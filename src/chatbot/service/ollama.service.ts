import { Injectable, Logger } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { OllamaRequest, OllamaResponse } from '../interface/ollama.interface';

@Injectable()
export class OllamaService {
  private readonly logger = new Logger(OllamaService.name);
  private readonly ollamaUrl: string =
    process.env.OLLAMA_URL || 'http://localhost:11434/api/generate';

  async generateGemma3(prompt: string): Promise<string> {
    const payload: OllamaRequest = {
      model: 'gemma3:latest',
      prompt,
      stream: false,
    };
    try {
      const response: AxiosResponse<OllamaResponse> = await axios.post(
        this.ollamaUrl,
        payload,
      );
      this.logger.log('Resposta recebida do Ollama com Gemma 3');
      return response.data.response;
    } catch (error: any) {
      this.logger.error('Erro ao chamar Ollama', error?.message || error);
      throw new Error('Erro ao chamar Ollama: ' + (error?.message || error));
    }
  }
}
