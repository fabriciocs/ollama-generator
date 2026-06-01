import { Global, Module } from '@nestjs/common';
import { FilesystemService } from './services/filesystem.service';
import { OutputDirectoryService } from './services/output-directory.service';
import { PathSafetyService } from './services/path-safety.service';

@Global()
@Module({
  providers: [PathSafetyService, FilesystemService, OutputDirectoryService],
  exports: [PathSafetyService, FilesystemService, OutputDirectoryService],
})
export class FilesystemModule {}
