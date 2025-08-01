import { z } from "zod";

export const newsSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Título não pode estar vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Título não pode conter apenas espaços",
    }),
  banner: z
    .string()
    .nonempty({ message: "Banner não pode estar vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Banner não pode conter apenas espaços",
    }),
  text: z
    .string()
    .nonempty({ message: "Texto não pode estar vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Texto não pode conter apenas espaços",
    }),
});
