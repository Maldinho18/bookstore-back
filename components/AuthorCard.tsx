import { Author } from "../types/author";
import Link from "next/link";

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
                <Link href={`/authors/${author.id}`}>Editar</Link>
                <button onClick={() => onDelete(author.id)}>Eliminar</button>
            </div>
        </div>
    );
}