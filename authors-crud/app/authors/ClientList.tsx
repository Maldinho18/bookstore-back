"use client";

import { useAuthorsStore } from "@/store/authors";
import AuthorCard from "@/components/AuthorCard";
import { Author } from "@/types/author";

import { useEffect } from "react";

export default function ClientList({ initial }: { initial: Author[] }) {
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