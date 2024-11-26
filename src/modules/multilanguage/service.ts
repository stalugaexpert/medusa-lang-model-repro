import { MedusaService } from "@medusajs/framework/utils";

import Language from "./models/language";
import LanguageVersion from "./models/language-version";

class MultiLanguageModuleService extends MedusaService({
  Language,
  LanguageVersion,
}) {}

export default MultiLanguageModuleService;
