import { Injectable, NotFoundException } from '@nestjs/common';
import { OutputDirectoryService } from '../../filesystem/services/output-directory.service';
import { generationSteps } from '../constants/generation-steps';
import { CreateGenerationDto } from '../dto/create-generation.dto';
import { GenerationEntity } from '../entities/generation.entity';
import { GenerationStepEntity } from '../entities/generation-step.entity';
import { GenerationRepository } from '../repositories/generation.repository';
import { GenerationStepRepository } from '../repositories/generation-step.repository';
import { GenerationRunnerService } from './generation-runner.service';
import { GenerationStatusService } from './generation-status.service';

@Injectable()
export class GenerationsService {
  constructor(
    private readonly generationRepository: GenerationRepository,
    private readonly generationStepRepository: GenerationStepRepository,
    private readonly outputDirectoryService: OutputDirectoryService,
    private readonly generationStatusService: GenerationStatusService,
    private readonly generationRunnerService: GenerationRunnerService,
  ) {}

  async create(dto: CreateGenerationDto) {
    const { productName, outputDir } =
      await this.outputDirectoryService.createProductDirectory(dto.idea);

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

    const steps = generationSteps.map((step, index) =>
      Object.assign(new GenerationStepEntity(), {
        generationId: savedGeneration.id,
        stepKey: step.stepKey,
        title: step.title,
        promptPath: step.promptFile,
        outputFile: step.outputFileTemplate(productName),
        status: 'pending' as const,
        startedAt: null,
        finishedAt: null,
        durationMs: null,
        errorMessage: null,
        orderIndex: index,
      }),
    );
    await this.generationStepRepository.saveMany(steps);
    await this.generationStatusService.writeSnapshot(savedGeneration.id);

    void this.generationRunnerService.run(savedGeneration.id);
    return this.generationStatusService.getStatus(savedGeneration.id);
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
