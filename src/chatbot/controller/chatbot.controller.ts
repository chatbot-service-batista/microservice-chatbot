import { Body, Controller, Post } from '@nestjs/common';
import { OllamaService } from '../service/ollama.service';
import { GenerateGemma3Dto } from '../dto/generate-gemma3.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Chatbot')
@Controller('chatbot')
export class ChatbotController {
  constructor(private readonly ollamaService: OllamaService) {}

  @Post('gemma3/generate')
  @ApiOperation({ summary: 'Gerar resposta usando Gemma 3 via Ollama' })
  @ApiResponse({ status: 200, description: 'Resposta gerada com sucesso.' })
  async generateGemma3(@Body() body: GenerateGemma3Dto) {
    return {
      result: await this.ollamaService.generateGemma3(body.prompt),
    };
  }
}
