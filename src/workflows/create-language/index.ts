import {
  createWorkflow,
  WorkflowResponse,
} from "@medusajs/framework/workflows-sdk";

import { createLanguageStep } from "./steps/create-language";
import { PostLanguageSchemaType } from "../../api/languages/validators";

export const createLanguageWorkflow = createWorkflow(
  "create-language",
  (input: PostLanguageSchemaType) => {
    const response = createLanguageStep(input);
    return new WorkflowResponse(response);
  }
);
