import { getAuthor } from "@/lib/api";
import EditClient from "./_EditClient";

export default async function EditAuthorPage({ params }: { params: { id: string } }) {
    const author = await getAuthor(Number(params.id));
    return <EditClient initial={author} />;
}