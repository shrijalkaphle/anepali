import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anepali",
  description: "Nepali font list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <script src="./scripts/main.js"></script> */}
    </html>
  );
}
