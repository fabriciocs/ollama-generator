import { IsString, Length, MaxLength } from 'class-validator';

export class CreateGenerationDto {
  @IsString()
  @Length(10, 10000)
  @MaxLength(10000)
  idea!: string;
}
