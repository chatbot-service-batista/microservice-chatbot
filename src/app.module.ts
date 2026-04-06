import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OllamaService } from './chatbot/service/ollama.service';
import { ChatbotController } from './chatbot/controller/chatbot.controller';

@Module({
  imports: [],
  controllers: [AppController, ChatbotController],
  providers: [AppService, OllamaService],
})
export class AppModule {}
