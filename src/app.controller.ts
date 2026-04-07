import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { GenerateGemma3Dto } from './chatbot/dto/generate-gemma3.dto';
import { OllamaService } from './chatbot/ollama.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ollamaService: OllamaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('gemma3/generate')
  async generateGemma3(@Body() body: GenerateGemma3Dto) {
    return {
      result: await this.ollamaService.generateGemma3(body.prompt),
    };
  }
}
