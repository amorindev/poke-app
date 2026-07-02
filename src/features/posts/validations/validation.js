import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Minimum 3 characters"),

  body: z.string().min(10, "Minimum 10 characters"),

  userId: z.coerce
    .number({
      invalid_type_error: "User ID must be a number",
    })
    .positive("User ID must be greater than 0"),
});
