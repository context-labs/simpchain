import { ChatVectorDBQAChain } from 'langchain/chains';
import { HNSWLib } from '../../../langchain/hnswlib.js';
import { LLMModels } from '../../../types.js';
export declare const makeChain: (projectName: string, repositoryUrl: string, contentType: string, chatPrompt: string, targetAudience: string, vectorstore: HNSWLib, llms: LLMModels[], onTokenStream?: ((token: string) => void) | undefined) => ChatVectorDBQAChain;
