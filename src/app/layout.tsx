import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/main.css";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "aNepali",
  description: "Explore and Download Free Nepali Fonts. Use Voice typing, Search and filter fonts from a list of over 130 nepali fonts.",
  openGraph: {
    title: "aNepali",
    description: "Explore and Download Free Nepali Fonts. Use Voice typing, Search and filter fonts from a list of over 130 nepali fonts.",
    url: "https://anepali.com/",
    siteName: "aNepali",
    images: [
      {
        url: "https://anepali.com/assets/og_image.png"
      },
    ],
    locale: "en-US",
    type: "website",
  }
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
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8228712018832293" crossOrigin="anonymous"></script>
    </html>
  );
}
