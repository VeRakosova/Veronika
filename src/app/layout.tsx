import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veronika Rákošová | Správa PPC kampaní",
  description: "Freelance PPC špecialistka. Zastrešujem kompletnú správu výkonnostných kampaní na Google, Mete a Skliku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-50 text-slate-800 min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
