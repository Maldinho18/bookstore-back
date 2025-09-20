import React from "react";

export const metadata = { title: "Authors CRUD", description: "Preparcial Next.js" };

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
        <html lang="es">
            <main>{children}</main>
        </html>
    );
}