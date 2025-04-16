import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email(),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
});

export type RegisterUserInput = z.infer<typeof registerUserSchema>;
