import { z } from "zod";

export const PostLanguageVersionSchema = z.object({
  content: z.record(z.unknown()),
  platform: z.enum(["common", "web", "mobile"]),
  available_from: z.coerce.date(),
  available_until: z.union([z.coerce.date(), z.null()]).optional(),
  status: z.enum(["draft", "published"]),
  author: z.string().min(1, "Author is required"),
});

export type PostLanguageVersionSchemaType = z.infer<
  typeof PostLanguageVersionSchema
>;
