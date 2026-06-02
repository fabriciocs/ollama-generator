import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { randomUUID } from 'node:crypto';
import { GenerationEntity } from './generation.entity';
import { GenerationStepEntity } from './generation-step.entity';

@Entity({ name: 'generation_step_executions' })
@Index(['generationId', 'stepId', 'attemptNumber'], { unique: true })
export class GenerationStepExecutionEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('varchar')
  generationId!: string;

  @Column('varchar')
  stepId!: string;

  @Column('int')
  attemptNumber!: number;

  @Column('varchar')
  status!: 'running' | 'completed' | 'error';

  @Column('varchar', { nullable: true })
  promptPath!: string | null;

  @Column('varchar', { nullable: true })
  outputFile!: string | null;

  @Column('text', { nullable: true })
  inputSnapshotJson!: string | null;

  @Column('varchar', { nullable: true })
  outputHash!: string | null;

  @Column('datetime', { nullable: true })
  startedAt!: Date | null;

  @Column('datetime', { nullable: true })
  finishedAt!: Date | null;

  @Column('int', { nullable: true })
  durationMs!: number | null;

  @Column('text', { nullable: true })
  errorMessage!: string | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToOne(() => GenerationEntity, (generation) => generation.executions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'generationId' })
  generation!: GenerationEntity;

  @ManyToOne(() => GenerationStepEntity, (step) => step.executions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'stepId' })
  step!: GenerationStepEntity;
}
