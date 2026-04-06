import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class GenerateGemma3Dto {
  @ApiProperty({ example: 'Seu prompt aqui', description: 'Prompt para o modelo Gemma 3' })
  @IsString()
  @IsNotEmpty()
  prompt: string;
}
