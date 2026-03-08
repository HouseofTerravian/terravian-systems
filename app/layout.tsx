import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Terravian Systems",
  description:
    "Infrastructure for Digital Platforms. Building and operating software systems across productivity, performance, identity, and competition.",
  openGraph: {
    title: "Terravian Systems",
    description:
      "Infrastructure for Digital Platforms. Building and operating software systems across productivity, performance, identity, and competition.",
    url: "https://terravian.systems",
    siteName: "Terravian Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terravian Systems",
    description:
      "Infrastructure for Digital Platforms. Building and operating software systems across productivity, performance, identity, and competition.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
