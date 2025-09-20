import { getAuthors } from "@/lib/api";
import AuthorCard from "@/components/AuthorCard";
import Link from 'next/link';
import { Author } from "@/types/author";
import { useAuthorsStore } from "@/store/authors";
import ClientList from "./ClientList";

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

