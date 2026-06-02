import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { randomUUID } from 'node:crypto';
import { GenerationStepEntity } from './generation-step.entity';
import { GenerationStepExecutionEntity } from './generation-step-execution.entity';

@Entity({ name: 'generations' })
export class GenerationEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('text')
  idea!: string;

  @Column('varchar')
  productName!: string;

  @Column('varchar')
  outputDir!: string;

  @Column('varchar', { default: 'created' })
  status!: 'created' | 'running' | 'completed' | 'error';

  @Column('varchar', { nullable: true })
  currentStepKey!: string | null;

  @Column('text', { nullable: true })
  errorMessage!: string | null;

  @Column('varchar', { nullable: true })
  lastGeneratedFile!: string | null;

  @Column('datetime', { nullable: true })
  finishedAt!: Date | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => GenerationStepEntity, (step) => step.generation)
  steps!: GenerationStepEntity[];

  @OneToMany(
    () => GenerationStepExecutionEntity,
    (execution) => execution.generation,
  )
  executions!: GenerationStepExecutionEntity[];
}
