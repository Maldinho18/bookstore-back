import { getAuthors } from "@/lib/api";
import AuthorCard from "@/components/AuthorCard";
import Link from 'next/link';
import { Author } from "@/types/author";
import { useAuthorsStore } from "@/store/authors";

export default async function AuthorsPage() {
    const initial = await getAuthors();
    return (
        <section>
            <header>
                <h1>Autores</h1>
                <Link href="/authors/create">Crear Autor</Link>
            </header>

            <HydratedList initial={initial} />
        </section>
    );
}

function HydratedList({ initial }: { initial: Author[] }) {
    return <ClientList initial={initial} />;
}

"use client";

import { useEffect } from "react";

function ClientList({ initial }: { initial: Author[] }) {
    const { authors, fetchAll, remove } = useAuthorsStore();

    useEffect(() => {
        if (authors.length === 0) {
            useAuthorsStore.setState({ authors: initial });
        } else {
            void fetchAll();
        }
    }, []);

    return (
        <div>
            {authors.map((a) => (
                <AuthorCard key={a.id} author={a} onDelete={remove}/>
            ))}
        </div>
    );
}