// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Authors CRUD",
  description: "Preparcial Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-gray-50 text-gray-900 antialiased">
        <main className="mx-auto max-w-5xl p-6">{children}</main>
      </body>
    </html>
  );
}
