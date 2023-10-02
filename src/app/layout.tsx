import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const font = Poppins({
  style: "normal",
  weight: "400",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Relatório de erros",
  description: "Criado para acompanhamento de rotinas e requisições.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
