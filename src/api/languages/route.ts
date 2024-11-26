import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

import { MULTI_LANGUAGE_MODULE } from "../../modules/multilanguage";
import MultiLanguageService from "../../modules/multilanguage/service";
import { createLanguageWorkflow } from "../../workflows/create-language";
import { PostLanguageSchemaType } from "./validators";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const multiLanguageService: MultiLanguageService = req.scope.resolve(
    MULTI_LANGUAGE_MODULE
  );

  const query = await multiLanguageService.listAndCountLanguages(
    {},
    { relations: ["language_versions"] }
  );

  const [languages, count] = query;

  res.json({ languages, count });
};

export const POST = async (
  req: MedusaRequest<PostLanguageSchemaType>,
  res: MedusaResponse
) => {
  const { result } = await createLanguageWorkflow(req.scope).run({
    input: req.body,
  });

  res.json(result);
};

export const AUTHENTICATE = false;
