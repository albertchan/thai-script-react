import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Learn Thai Script",
  description: "A Thai script learning app that doesn't look like shit.",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
