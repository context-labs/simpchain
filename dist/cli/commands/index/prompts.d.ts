import { FileSummary, FolderSummary } from '../../../types.js';
export declare const createCodeFileSummary: (filePath: string, projectName: string, fileContents: string, contentType: string, filePrompt: string) => string;
export declare const createCodeQuestions: (filePath: string, projectName: string, fileContents: string, contentType: string, targetAudience: string) => string;
export declare const folderSummaryPrompt: (folderPath: string, projectName: string, files: FileSummary[], folders: FolderSummary[], contentType: string, folderPrompt: string) => string;
