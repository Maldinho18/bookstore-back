import { deleteAuthor } from "@/lib/api";
import { Author } from "../types/author";
import Link from "next/link";
import { useAuthorsStore } from "@/store/authors";

export default function AuthorCard({author, onDelete}: { author: Author; onDelete: (id: number) => void}) {
    return (
        <div>
            <div>
                <img src={author.image} alt={author.name} />
                <div>
                    <h3>{author.name}</h3>
                    <p>{author.birthDate}</p>
                </div>
            </div>
            <p>{author.description}</p>
            <div>
                <Link href={`/authors/${author.id}`} className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50">Editar</Link>
                <button
                  onClick={async () => {
                    const confirmed = confirm("¿Eliminar? Si el servidor responde 412, puedes removerlo solo de la lista (no persistirá).");
                    if (!confirmed) return;
                
                    const res = await deleteAuthor(author.id);
                    if (res.ok) {
                      useAuthorsStore.getState().remove(author.id); // quitar del estado (éxito)
                    } else if (res.status === 412) {
                      // Forzar eliminación local para cumplir el enunciado de la UI
                      useAuthorsStore.setState({
                        authors: useAuthorsStore.getState().authors.filter(a => a.id !== author.id),
                      });
                    } 
                  }}
                  className="rounded-xl bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                >
                  Eliminar
                </button>
            </div>
        </div>
    );
}