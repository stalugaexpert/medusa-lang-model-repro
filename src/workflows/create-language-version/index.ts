import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

import { createLanguageVersionStep } from "./steps/create-language-version";
import { PostLanguageVersionSchemaType } from "../../api/languages/[code]/versions/validators";

export type CreateLanguageVersionInput = {
  language_code: string;
  body: PostLanguageVersionSchemaType;
};

export const createLanguageVersionWorkflow = createWorkflow(
  "create-language-version",
  (input: CreateLanguageVersionInput) => {
    const response = createLanguageVersionStep(input);
    return new WorkflowResponse(response);
  }
);
