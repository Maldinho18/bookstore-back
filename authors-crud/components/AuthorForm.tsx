"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authorSchema, AuthorFormValues } from "../lib/zodSchemas";

export default function AuthorForm ({
    defaultValues,
    onSubmit,
    submitLabel = "Guardar",
}: {
    defaultValues?: Partial<AuthorFormValues>;
    onSubmit: (values: AuthorFormValues) => Promise<void> | void;
    submitLabel?: string;
})  {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<AuthorFormValues>({
        resolver: zodResolver(authorSchema),
        defaultValues: {
            name: "",
            birthDate: "",
            description: "",
            image: "",
            ...defaultValues
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre</label>
                <input {...register("name")} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
                <label>Fecha de Nacimiento</label>
                <input type="date"{...register("birthDate")} />
                {errors.birthDate && <p>{errors.birthDate.message}</p>}
            </div>

            <div>
                <label>URL de imagen</label>
                <input {...register("image")} />
                {errors.image && <p>{errors.image.message}</p>}
            </div>

            <div>
                <label>Descripción</label>
                <textarea {...register("description")} />
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting}>
                {submitLabel}
            </button>
        </form> 
    );
}


