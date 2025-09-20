export interface Author {
    id: number;
    name: string;
    birthDate: string;
    description: string;
    image: string;
}

export type AuthorCreate = Omit<Author, "id">;
export type AuthorUpdate = Partial<AuthorCreate>;