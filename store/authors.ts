"use client";

import { Author, AuthorCreate, AuthorUpdate } from "../types/author";
import { create } from "zustand";
import { getAuthors, createAuthor, updateAuthor, deleteAuthor } from "../lib/api";

type AuthorState = {
    authors: Author[];
    loading: boolean;
    fetchAll: () => Promise<void>;
    add: (data: AuthorCreate) => Promise<Author>;
    edit: (id: number, data: AuthorUpdate) => Promise<Author>;
    remove: (id: number) => Promise<void>;
};

export const useAuthorStore = create<AuthorState> ((set, get) => ({
    authors: [],
    loading: false,

    fetchAll: async () => {
        set({loading:true});
        try {
            const data = await getAuthors();
            set({authors:data});
        } finally {
            set({loading:false});
        }
    },

    add: async (data) => {
        const created = await createAuthor(data);
        set({authors: [...get().authors, created]});
        return created;
    },

    edit: async (id, data) => {
        const updated = await updateAuthor(id, data);
        set({ authors: get().authors.map(a => a.id === id ? updated : a) });
        return updated;
    },

    remove: async (id) => {
        await deleteAuthor(id);
        set({ authors: get().authors.filter(a => a.id !== id) });
    }
}));