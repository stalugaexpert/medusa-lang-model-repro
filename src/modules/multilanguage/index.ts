import { Module } from "@medusajs/framework/utils";

import MultiLanguageModuleService from "./service";

export const MULTI_LANGUAGE_MODULE = "multiLanguageModuleService";

export default Module(MULTI_LANGUAGE_MODULE, {
  service: MultiLanguageModuleService,
});
