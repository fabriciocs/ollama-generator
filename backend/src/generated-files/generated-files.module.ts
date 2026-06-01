import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneratedFilesController } from './controllers/generated-files.controller';
import { GeneratedFileEntity } from './entities/generated-file.entity';
import { GeneratedFileRepository } from './repositories/generated-file.repository';
import { GeneratedFileReaderService } from './services/generated-file-reader.service';
import { GeneratedFileWriterService } from './services/generated-file-writer.service';
import { GeneratedFilesService } from './services/generated-files.service';

@Module({
  imports: [TypeOrmModule.forFeature([GeneratedFileEntity])],
  controllers: [GeneratedFilesController],
  providers: [
    GeneratedFileRepository,
    GeneratedFileWriterService,
    GeneratedFileReaderService,
    GeneratedFilesService,
  ],
  exports: [
    GeneratedFileRepository,
    GeneratedFileWriterService,
    GeneratedFileReaderService,
    GeneratedFilesService,
  ],
})
export class GeneratedFilesModule {}
