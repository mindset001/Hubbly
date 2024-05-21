import type { Metadata } from "next";
import { MuseoModerno, Raleway } from "next/font/google";

import "./globals.css";

const inter = MuseoModerno({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hubbly",
  description: "Where Innovation Meets Efficiency In Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
