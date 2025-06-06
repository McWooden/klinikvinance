import Header from "@/components/header";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Venice Clinic",
  description:
    "Venice Clinic: Klinik kecantikan terpercaya untuk Rejuve Mate Your Life, Elevating Your Confidence. Menawarkan berbagai layanan dan produk kecantikan berkualitas.",
  openGraph: {
    title: "Venice Clinic",
    description:
      "Venice Clinic: Klinik kecantikan terpercaya untuk Rejuve Mate Your Life, Elevating Your Confidence. Menawarkan berbagai layanan dan produk kecantikan berkualitas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#F9FBFC] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
