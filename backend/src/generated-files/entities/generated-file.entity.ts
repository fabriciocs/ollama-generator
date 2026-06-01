import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { randomUUID } from 'node:crypto';

@Entity({ name: 'generated_files' })
@Index(['generationId'])
export class GeneratedFileEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('varchar')
  generationId!: string;

  @Column('varchar', { nullable: true })
  stepId!: string | null;

  @Column('varchar')
  fileName!: string;

  @Column('varchar')
  relativePath!: string;

  @Column('varchar')
  absolutePath!: string;

  @Column('varchar')
  mimeType!: string;

  @Column('int')
  sizeBytes!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
