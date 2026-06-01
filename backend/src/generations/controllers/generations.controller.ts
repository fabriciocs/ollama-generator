import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGenerationDto } from '../dto/create-generation.dto';
import { GenerationsService } from '../services/generations.service';

@Controller('api/generations')
export class GenerationsController {
  constructor(private readonly generationsService: GenerationsService) {}

  @Post()
  create(@Body() dto: CreateGenerationDto) {
    return this.generationsService.create(dto);
  }

  @Get()
  list() {
    return this.generationsService.list();
  }

  @Get(':generationId')
  getStatus(@Param('generationId') generationId: string) {
    return this.generationsService.getStatus(generationId);
  }
}
