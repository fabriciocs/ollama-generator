import { Controller, Get } from '@nestjs/common';
import { DebugService } from './debug.service';

@Controller('api/debug/logs')
export class DebugController {
  constructor(private readonly debugService: DebugService) {}

  @Get('recent')
  recent() {
    return this.debugService.getRecentLogs();
  }
}
