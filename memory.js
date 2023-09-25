import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({
  temperature: 0.9,
  streaming: true,
  callbacks: [
    {
      handleLLMNewToken(token) {
        process.stdout.write(token);
      },
    },
  ],
});

const memory = new BufferMemory();

const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

const res1 = await chain.call({
  input: "Hi, I'm Greyson.",
});

console.log(res1);

const res2 = await chain.call({
  input: "What is my name?",
});

console.log(res2);
