import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
} from 'typeorm';
import { randomUUID } from 'node:crypto';
import type { AppLogLevel } from '../../common/types/log-level';

@Entity({ name: 'generation_logs' })
@Index(['generationId', 'createdAt'])
export class GenerationLogEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('varchar')
  generationId!: string;

  @Column('varchar', { nullable: true })
  stepId!: string | null;

  @Column('varchar')
  level!: AppLogLevel;

  @Column('text')
  message!: string;

  @Column('text', { nullable: true })
  metadataJson!: string | null;

  @CreateDateColumn()
  createdAt!: Date;
}
