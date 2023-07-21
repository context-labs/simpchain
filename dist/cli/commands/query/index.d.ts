import { AutodocRepoConfig, AutodocUserConfig } from '../../../types.js';
export declare const query: ({ name, repositoryUrl, output, contentType, chatPrompt, targetAudience }: AutodocRepoConfig, { llms }: AutodocUserConfig) => Promise<void>;
