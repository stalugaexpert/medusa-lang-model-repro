import { model } from "@medusajs/framework/utils";

import Language from "./language";

const LanguageVersion = model.define("language_version", {
  version_id: model.id().primaryKey(),
  language: model.belongsTo(() => Language, {
    mappedBy: "language_versions",
  }),
  content: model.json(),
  platform: model.enum(["common", "web", "mobile"]),
  available_from: model.dateTime(),
  available_until: model.dateTime().nullable(),
  status: model.enum(["draft", "published"]),
  author: model.text(),
});

export default LanguageVersion;
