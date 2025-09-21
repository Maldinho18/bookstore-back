import { getAuthor } from "@/lib/api";
import EditClient from "./_EditClient";

export default async function EditAuthorPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const author = await getAuthor(Number(id));
    return <EditClient initial={author} />;
}