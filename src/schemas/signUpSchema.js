import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
      .transform((name) =>
        name
          .trim()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      ),
    email: z.email({ message: "Email inválido" }).toLowerCase(),
    password: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });
