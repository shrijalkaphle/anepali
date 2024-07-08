import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.css";
import { Footer } from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Navbar } from "@/components/Navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Download Nepali Fonts - aNepali",
  description: "Explore and Download Free Nepali Fonts. Use Voice typing, Search and filter fonts from a list of over 130 nepali fonts.",
  openGraph: {
    title: "Download Nepali Fonts - aNepali",
    description: "Explore and Download Free Nepali Fonts. Use Voice typing, Search and filter fonts from a list of over 130 nepali fonts.",
    url: "https://anepali.com",
    siteName: "aNepali",
    images: [
      {
        url: "https://anepali.com/assets/og_image.png"
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.png",

  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://anepali.com" />
      </Head>
      <GoogleAnalytics />
      <body className={inter.className}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8228712018832293" crossOrigin="anonymous"></script> */}
    </html>
  );
}
