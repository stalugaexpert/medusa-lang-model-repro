import { MedusaRequest, MedusaResponse } from "@medusajs/framework";

import { MULTI_LANGUAGE_MODULE } from "../../../../modules/multilanguage";
import MultiLanguageService from "../../../../modules/multilanguage/service";
import { createLanguageVersionWorkflow } from "../../../../workflows/create-language-version";
import { PostLanguageVersionSchemaType } from "./validators";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const multiLanguageService: MultiLanguageService = req.scope.resolve(
    MULTI_LANGUAGE_MODULE
  );

  const { code } = req.params;

  const versions = await multiLanguageService.listLanguageVersions({
    language_id: code,
  });

  res.json(versions);
};

export const POST = async (
  req: MedusaRequest<PostLanguageVersionSchemaType>,
  res: MedusaResponse
) => {
  const { code } = req.params;

  const { result } = await createLanguageVersionWorkflow(req.scope).run({
    input: { language_code: code, body: req.body },
  });

  res.json(result);
};

export const AUTHENTICATE = false;
