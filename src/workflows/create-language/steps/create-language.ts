import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import { MULTI_LANGUAGE_MODULE } from "../../../modules/multilanguage";
import MultiLanguageService from "../../../modules/multilanguage/service";
import { PostLanguageSchemaType } from "../../../api/languages/validators";

export const createLanguageStep = createStep(
  "create-language-step",
  async (input: PostLanguageSchemaType, { container }) => {
    const multiLanguageModuleService: MultiLanguageService = container.resolve(
      MULTI_LANGUAGE_MODULE
    );

    const language = await multiLanguageModuleService.createLanguages(input);

    return new StepResponse(language, language.id);
  }
);
