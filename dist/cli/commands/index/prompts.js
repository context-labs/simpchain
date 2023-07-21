export const createCodeFileSummary = (filePath, projectName, fileContents, contentType, filePrompt) => {
    return `
    You are acting as a ${contentType} documentation expert for a project called ${projectName}.
    Below is the ${contentType} from a file located at \`${filePath}\`. 
    ${filePrompt}
    Do not say "this file is a part of the ${projectName} project".

    ${contentType}:
    ${fileContents}

    Response:

  `;
};
export const createCodeQuestions = (filePath, projectName, fileContents, contentType, targetAudience) => {
    return `
    You are acting as a ${contentType} documentation expert for a project called ${projectName}.
    Below is the ${contentType} from a file located at \`${filePath}\`. 
    What are 3 questions that a ${targetAudience} might have about this ${contentType}? 
    Answer each question in 1-2 sentences. Output should be in markdown format.

    ${contentType}:
    ${fileContents}

    Questions and Answers:
    
  `;
};
export const folderSummaryPrompt = (folderPath, projectName, files, folders, contentType, folderPrompt) => {
    return `
    You are acting as a ${contentType} documentation expert for a project called ${projectName}.
    You are currently documenting the folder located at \`${folderPath}\`. 
    
    Below is a list of the files in this folder and a summary of the contents of each file:

    ${files.map((file) => {
        return `
        Name: ${file.fileName}
        Summary: ${file.summary}    

      `;
    })}

    And here is a list of the subfolders in this folder and a summary of the contents of each subfolder:

    ${folders.map((folder) => {
        return `
        Name: ${folder.folderName}
        Summary: ${folder.summary}    

      `;
    })}

    ${folderPrompt}
    Do not say "this file is a part of the ${projectName} project".
    Do not just list the files and folders.

    Response:
  `;
};
//# sourceMappingURL=prompts.js.map