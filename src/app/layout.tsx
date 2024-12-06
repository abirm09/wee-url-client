import GetProfile from "@/features/auth/getProfile/GetProfile";
import { StoreProvider } from "@/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "../styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeeUrl | Home",
  description: "An url shortening app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
      <GetProfile />
    </StoreProvider>
  );
}
