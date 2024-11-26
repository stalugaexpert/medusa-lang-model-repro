import { model } from "@medusajs/framework/utils";

import LanguageVersion from "./language-version";

const Language = model.define("language", {
  language_code: model.text().primaryKey(),
  name: model.text(),
  is_active: model.boolean(),
  activation_date: model.dateTime(),
  language_versions: model.hasMany(() => LanguageVersion, {
    mappedBy: "language",
  }),
});

export default Language;
