# Microservice Chatbot — Backend

Microserviço de inteligência artificial generativa desenvolvido com NestJS e TypeScript, integrado ao modelo Gemma 3 via Ollama.

## Sobre o Projeto

Este serviço foi estruturado como um microserviço independente, com responsabilidade única: receber um prompt e retornar a resposta gerada pelo modelo de linguagem **Gemma 3** (Google) através do runtime local **Ollama**.

Por ser desacoplado, pode ser facilmente integrado a qualquer sistema — outros frontends, API gateways, aplicações mobile ou serviços internos — sem necessidade de reimplementação da lógica de IA.

## Funcionalidades

- Endpoint REST para geração de respostas com Gemma 3
- Validação de entrada com DTOs e Class Validator
- Documentação automática da API via Swagger
- Configuração da URL do Ollama por variável de ambiente
- Logs estruturados com o Logger nativo do NestJS

## Tecnologias Utilizadas

- NestJS
- TypeScript
- Axios
- Swagger (OpenAPI)
- Class Validator / Class Transformer
- Ollama (runtime local de LLMs)
- Gemma 3 (Google)

## Como rodar o projeto

1. Instale e inicie o Ollama com o modelo Gemma 3:
   ```bash
   ollama run gemma3
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor em modo desenvolvimento:
   ```bash
   npm run start:dev
   ```

4. Acesse a documentação Swagger em [http://localhost:3000/api](http://localhost:3000/api).

## Endpoint Principal

```
POST /chatbot/gemma3/generate
```

**Body:**
```json
{
  "prompt": "Sua pergunta aqui"
}
```

**Response:**
```json
{
  "result": "Resposta gerada pelo modelo"
}
```

## Variáveis de Ambiente

| Variável     | Padrão                                  | Descrição                        |
|--------------|-----------------------------------------|----------------------------------|
| `OLLAMA_URL` | `http://localhost:11434/api/generate`   | URL da instância do Ollama       |

## Estrutura de Pastas

- `src/chatbot` — Módulo principal do chatbot
- `src/chatbot/dto` — Validação de entrada (DTOs)
- `src/chatbot/interface` — Tipagens da integração com Ollama
