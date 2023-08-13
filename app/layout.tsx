import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "800"] });

export const metadata: Metadata = {
  title: "Frontend Mentor | Notifications",
  description: "Criado por Leandro Rodrigues",
  authors: [
    { name: "Leandro Rodrigues", url: "https://leandro-dev.vercel.app" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${font.className} bg-[#f7fafd] flex items-center justify-center h-full md:p-6`}
      >
        {children}
      </body>
    </html>
  );
}
