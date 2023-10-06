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
  description: "A portfolio for software developer",
  themeColor: "dark",
  authors: {
    name: "Pradhyumn Sharma",
    url: "https://www.linkedin.com/in/im-pradhyumn",
  },
  category: "website",
  creator: "Pradhyumn Sharma",
  keywords: [
    "portfolio",
    "developer",
    "software",
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
  appleWebApp: true,
  verification: {
    google: "xB0od4QV2-rEeAiOHVgiCNUiSH1VFNdo_jSMaOfO1Wg",
  },
  openGraph: {
    type: "website",
    url: "https://im-pradhyumn.vercel.app",
    description: "A portfolio website for software developer",
    siteName: "Pradhyumn's Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:type" content="website" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <main style={{ marginTop: "3rem" }}>{children}</main>
      </body>
    </html>
  );
}
