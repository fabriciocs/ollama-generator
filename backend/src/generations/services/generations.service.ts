import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OutputDirectoryService } from '../../filesystem/services/output-directory.service';
import { CreateGenerationDto } from '../dto/create-generation.dto';
import { GenerationEntity } from '../entities/generation.entity';
import { GenerationStepEntity } from '../entities/generation-step.entity';
import { GenerationRepository } from '../repositories/generation.repository';
import { GenerationStepRepository } from '../repositories/generation-step.repository';
import { GenerationRunnerService } from './generation-runner.service';
import { GenerationStatusService } from './generation-status.service';
import { PromptDiscoveryService } from '../../prompts/services/prompt-discovery.service';

@Injectable()
export class GenerationsService {
  constructor(
    private readonly generationRepository: GenerationRepository,
    private readonly generationStepRepository: GenerationStepRepository,
    private readonly outputDirectoryService: OutputDirectoryService,
    private readonly generationStatusService: GenerationStatusService,
    private readonly generationRunnerService: GenerationRunnerService,
    private readonly promptDiscoveryService: PromptDiscoveryService,
  ) {}

  async create(dto: CreateGenerationDto) {
    const { productName, outputDir } =
      await this.outputDirectoryService.createProductDirectory(dto.idea);
    const promptFileNames =
      await this.promptDiscoveryService.listPromptFileNames();
    if (!promptFileNames.length) {
      throw new BadRequestException(
        'No prompt files found in prompts base dir',
      );
    }
    const generationSteps = promptFileNames.map((promptFileName, index) => ({
      stepKey: this.promptDiscoveryService.buildStepKey(promptFileName),
      title: this.promptDiscoveryService.buildTitle(promptFileName),
      promptFile: promptFileName,
      outputFileTemplate: () =>
        this.promptDiscoveryService.buildOutputFileName(promptFileName),
      orderIndex: index,
    }));

    const generation = Object.assign(new GenerationEntity(), {
      idea: dto.idea,
      productName,
      outputDir,
      status: 'created' as const,
      currentStepKey: generationSteps[0]?.stepKey ?? null,
      errorMessage: null,
      lastGeneratedFile: null,
      finishedAt: null,
    });
    const savedGeneration = await this.generationRepository.save(generation);

    const steps = generationSteps.map((step) =>
      Object.assign(new GenerationStepEntity(), {
        generationId: savedGeneration.id,
        stepKey: step.stepKey,
        title: step.title,
        promptPath: step.promptFile,
        outputFile: step.outputFileTemplate(),
        status: 'pending' as const,
        startedAt: null,
        finishedAt: null,
        durationMs: null,
        errorMessage: null,
        orderIndex: step.orderIndex,
      }),
    );
    await this.generationStepRepository.saveMany(steps);
    await this.generationStatusService.writeSnapshot(savedGeneration.id);

    void this.generationRunnerService.run(savedGeneration.id);
    return this.generationStatusService.getStatus(savedGeneration.id);
  }

  async retryStep(generationId: string, stepId: string) {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      throw new NotFoundException('Generation not found');
    }

    const step =
      await this.generationStepRepository.findOneByGenerationIdAndStepId(
        generationId,
        stepId,
      );
    if (!step) {
      throw new NotFoundException('Step not found');
    }

    if (step.status === 'completed') {
      throw new BadRequestException('Completed steps cannot be retried');
    }

    const steps =
      await this.generationStepRepository.findByGenerationId(generationId);
    const startIndex = steps.findIndex((candidate) => candidate.id === step.id);
    if (startIndex < 0) {
      throw new NotFoundException('Step not found');
    }

    for (let index = startIndex; index < steps.length; index += 1) {
      const current = steps[index];
      current.status = 'pending';
      current.startedAt = null;
      current.finishedAt = null;
      current.durationMs = null;
      current.errorMessage = null;
      await this.generationStepRepository.save(current);
    }

    generation.status = 'running';
    generation.currentStepKey = step.stepKey;
    generation.errorMessage = null;
    generation.finishedAt = null;
    generation.lastGeneratedFile =
      startIndex > 0 ? steps[startIndex - 1].outputFile : null;
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);

    void this.generationRunnerService.run(generationId, {
      fromStepKey: step.stepKey,
    });
    return this.generationStatusService.getStatus(generationId);
  }

  async resume(generationId: string) {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      throw new NotFoundException('Generation not found');
    }

    const steps =
      await this.generationStepRepository.findByGenerationId(generationId);
    const stepToResume = steps.find(
      (candidate) => candidate.status !== 'completed',
    );
    if (!stepToResume) {
      return this.generationStatusService.getStatus(generationId);
    }

    generation.status = 'running';
    generation.currentStepKey = stepToResume.stepKey;
    generation.errorMessage = null;
    generation.finishedAt = null;
    await this.generationRepository.save(generation);
    await this.generationStatusService.writeSnapshot(generationId);

    void this.generationRunnerService.run(generationId, {
      fromStepKey: stepToResume.stepKey,
    });
    return this.generationStatusService.getStatus(generationId);
  }

  async list() {
    const generations = await this.generationRepository.findAll();
    return Promise.all(
      generations.map(async (generation) =>
        this.generationStatusService.getStatus(generation.id),
      ),
    );
  }

  async getStatus(generationId: string) {
    return this.generationStatusService.getStatus(generationId);
  }

  async getById(generationId: string) {
    const generation = await this.generationRepository.findOne(generationId);
    if (!generation) {
      throw new NotFoundException('Generation not found');
    }
    return generation;
  }
}
