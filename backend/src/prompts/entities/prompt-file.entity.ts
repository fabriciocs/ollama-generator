import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { randomUUID } from 'node:crypto';

@Entity({ name: 'prompt_files' })
export class PromptFileEntity {
  @PrimaryColumn('varchar')
  id: string = randomUUID();

  @Column('varchar', { unique: true })
  fileName!: string;

  @Column('varchar')
  absolutePath!: string;

  @Column('varchar')
  relativePath!: string;

  @Column('int')
  sizeBytes!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
