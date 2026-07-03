import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, { error: "Minimum 3 characters" }),
  body: z.string().min(10, { error: "Minimum 10 characters" }),
});
