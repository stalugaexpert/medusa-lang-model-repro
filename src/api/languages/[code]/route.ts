import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

import { MULTI_LANGUAGE_MODULE } from "../../../modules/multilanguage";
import MultiLanguageService from "../../../modules/multilanguage/service";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const { code } = req.params;

  const multiLanguageService: MultiLanguageService = req.scope.resolve(
    MULTI_LANGUAGE_MODULE
  );

  const language = await multiLanguageService.retrieveLanguage(code);

  res.json(language);
};

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const { code } = req.params;

  const multiLanguageService: MultiLanguageService = req.scope.resolve(
    MULTI_LANGUAGE_MODULE
  );

  await multiLanguageService.deleteLanguages(code);

  res.status(204).send();
};

export const AUTHENTICATE = false;
