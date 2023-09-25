import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
import { GooglePaLM } from "langchain/llms/googlepalm";
import { SerpAPILoader } from "langchain/document_loaders/web/serpapi";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions } from "langchain/agents";

// const model = new GooglePaLM({
//   temperature: 0,
// });

const model = new OpenAI({
  temperature: 0,
});

const tools = [
  new SerpAPI(process.env.SERPAPI_API_KEY, {
    hl: "en",
    gl: "us",
  }),
  new Calculator(),
];

const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "zero-shot-react-description",
  verbose: true,
});

console.log("Loaded the agent... ");

const res = await executor.call({
  input:
    "Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?",
});

console.log(res.output);
