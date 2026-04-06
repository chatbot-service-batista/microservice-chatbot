export interface OllamaRequest {
  model: string;
  prompt: string;
  stream?: boolean;
}

export interface OllamaResponse {
  response: string;
  // Adicione outros campos conforme necessário
}
