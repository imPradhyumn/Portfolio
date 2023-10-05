import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pradhyumn's Portfolio",
  description: "A portfolio website for software developer",
  themeColor: "dark",
  authors: {
    name: "Pradhyumn Sharma",
    url: "https://www.linkedin.com/in/im-pradhyumn",
  },
  category: "website",
  creator: "Pradhyumn Sharma",
  keywords: [
    "portfolio",
    "web developer",
    "front end",
    "full stack",
    "web design",
    "react",
    "python",
    "java",
    "css",
    "html",
    "nextjs",
    "flask",
    "javascript",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content="Personal Portfolio Website" />
        <meta name="title" content="imPradhyumn" />
        <meta name="type" content="website" />
        <meta name="url" content="https://im-pradhyumn.vercel.sh" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main style={{ marginTop: "3rem" }}>{children}</main>
      </body>
    </html>
  );
}
