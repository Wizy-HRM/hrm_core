import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
