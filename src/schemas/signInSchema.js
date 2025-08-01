import { z } from "zod";

export const signInSchema = z.object({
  email: z.email({ message: "Email inválido" }).toLowerCase(),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});
