import { Author, AuthorCreate, AuthorUpdate } from "../types/author";

const API = "http://127.0.0.1:8080/api/authors"

export async function getAuthors(): Promise<Author[]> {
    const response = await fetch(API, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error obteniendo autores');
    return response.json();
}

export async function getAuthor(id: number): Promise<Author> {
    const response = await fetch(`${API}/${id}`, { cache: 'no-store' });
    if (!response.ok) throw new Error('Error obteniendo autor');
    return response.json();
}

export async function createAuthor(payload: AuthorCreate): Promise<Author> {
    const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Error creando autor');
    return response.json();
}

export async function updateAuthor(id: number, payload: AuthorUpdate): Promise<Author> {
    const response = await fetch (`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Error actualizando autor');
    return response.json();
}

// lib/api.ts
export async function deleteAuthor(id: number): Promise<{ ok: boolean; status: number; message?: string }> {
  const res = await fetch(`${API}/${id}`, { method: "DELETE" });
  if (res.status === 204) return { ok: true, status: 204 };
  if (!res.ok) {
    let msg = "";
    try { msg = await res.text(); } catch {}
    return { ok: false, status: res.status, message: msg || res.statusText };
  }
  return { ok: true, status: res.status };
}
