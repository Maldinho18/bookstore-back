"use client";

import { useRouter } from "next/navigation";
import AuthorForm from "@/components/AuthorForm";
import { useAuthorsStore } from "@/store/authors";
import { AuthorFormValues } from "@/lib/zodSchemas";

export default function CreateAuthorPage() {
    const router = useRouter();
    const { add } = useAuthorsStore();

    const onSubmit = async (values: AuthorFormValues) => {
        await add(values);
        router.push("/authors");
    };

    return (
        <section>
            <h1>Crear autor</h1>
            <AuthorForm onSubmit={onSubmit} submitLabel="Crear" />
        </section>
    );
}