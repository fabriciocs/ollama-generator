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

@Entity({ name: 'generation_steps' })
@Index(['generationId', 'orderIndex'])
export class GenerationStepEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('varchar')
  generationId!: string;

  @Column('varchar')
  stepKey!: string;

  @Column('varchar')
  title!: string;

  @Column('varchar')
  promptPath!: string;

  @Column('varchar')
  outputFile!: string;

  @Column('varchar', { default: 'pending' })
  status!: 'pending' | 'running' | 'completed' | 'error' | 'skipped';

  @Column('int')
  orderIndex!: number;

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

  @ManyToOne(() => GenerationEntity, (generation) => generation.steps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'generationId' })
  generation!: GenerationEntity;
}
