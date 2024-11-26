import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";

import { MULTI_LANGUAGE_MODULE } from "../../../modules/multilanguage";
import MultiLanguageService from "../../../modules/multilanguage/service";
import { CreateLanguageVersionInput } from "..";

export const createLanguageVersionStep = createStep(
  "create-language-version-step",
  async (input: CreateLanguageVersionInput, { container }) => {
    const multiLanguageModuleService: MultiLanguageService = container.resolve(
      MULTI_LANGUAGE_MODULE
    );

    const languageVersion =
      await multiLanguageModuleService.createLanguageVersions({
        language_id: input.language_code,
        ...input.body,
      });

    return new StepResponse(languageVersion, languageVersion.id);
  }
);
