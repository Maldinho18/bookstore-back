import { z } from "zod";

export const authorSchema = z.object({
    name: z.string().min(2),
    birthDate: z.string(),
    description: z.string().min(10),
    image: z.string().url("URL de imagen no válida"),
});
export type AuthorFormValues = z.infer<typeof authorSchema>;