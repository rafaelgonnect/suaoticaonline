import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth com Supabase",
  description: "Aplicação de exemplo usando Next.js e Supabase para autenticação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <NavBar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 py-4">
            <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} - App de Autenticação com Next.js e Supabase
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
