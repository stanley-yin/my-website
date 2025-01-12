"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import { GoogleTagManager } from "@next/third-parties/google";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo />
      <GoogleTagManager gtmId="GTM-W2QVHK3" />
      <body>
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
