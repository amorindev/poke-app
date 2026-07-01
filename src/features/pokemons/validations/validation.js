import { z } from "zod";

export const schema = z.object({
  name: z.string().min(2, "It must have at least 2 characters"),
  url: z.url("It must be a valid URL"),
});
