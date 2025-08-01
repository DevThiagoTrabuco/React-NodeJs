import z from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Pesquisa não pode estar vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Pesquisa não pode conter apenas espaços",
    }),
});
