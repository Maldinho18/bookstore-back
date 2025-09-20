"use client";

import { useAuthorsStore } from "@/store/authors";
import AuthorForm from "@/components/AuthorForm";
import { Author } from "@/types/author";
import { useRouter } from "next/navigation";
import { AuthorFormValues } from "@/lib/zodSchemas";
import { useEffect } from "react";

export default function _EditClient({ initial }: { initial: Author }) {
    const router = useRouter();
    const { edit, authors } = useAuthorsStore();

    useEffect(() => {
        if(!authors.find(a => a.id === initial.id)) {
            useAuthorsStore.setState({ authors: [...authors, initial] });
        }
    }, [authors, initial]);

    const onSubmit = async (values: AuthorFormValues) => {
        await edit(initial.id, values);
        router.push("/authors");
    };

    return (
        <section>
            <h1>Editar autor</h1>
            <AuthorForm onSubmit={onSubmit} submitLabel="Guardar" defaultValues={initial} />
        </section>
    );
}