import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aNepali",
  description: "Nepali font list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="assets/favicon.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
