import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";
import { GooglePaLM } from "langchain/llms/googlepalm";
import { SerpAPILoader } from "langchain/document_loaders/web/serpapi";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

// Initialize the necessary components
// const apiKey = process.env.SERP_API_KEY;
// const query = "What is the weather in Minneapolis?";

// Use SerpAPILoader to load web search results
// const loader = new SerpAPILoader({ q: query, apiKey });
// const docs = await loader.load();

// console.log("docs: ", docs);

const model = new OpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const template =
  "What would a good company name for a company that makes {product}?";

const promptTemplate = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

// const model = new GooglePaLM({
//   apiKey: process.env.GOOGLE_PALM_API_KEY,
//   temperature: 0,
// });

// const chain = new LLMChain({
//   llm: model,
//   prompt: promptTemplate,
// });

// const res = await model.call(
//   "Who are the top ten richest women in the world? What are their net worth?"
// );

// const res = await chain.call({ product: "colorful socks" });

// const res = await model.call(
//   "Who is Olivia Wilde's boyfriend? What is his current age raised to the 0.23 power?"
// );

const res = await model.call("What is 29 raised to the 0.23 power?");
console.log(res);
