import { z } from "zod";

export const PostLanguageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  language_code: z
    .string()
    .regex(/^[a-z]{2}-[A-Z]{2}$/, "Invalid language code format"),
  is_active: z.boolean(),
  activation_date: z.coerce.date(),
});

export type PostLanguageSchemaType = z.infer<typeof PostLanguageSchema>;
