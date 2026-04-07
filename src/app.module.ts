import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatbotController } from './chatbot/chatbot.controller';
import { OllamaService } from './chatbot/ollama.service';

@Module({
  imports: [],
  controllers: [AppController, ChatbotController],
  providers: [AppService, OllamaService],
})
export class AppModule {}
