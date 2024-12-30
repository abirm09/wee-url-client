import GetProfile from "@/features/auth/getProfile/GetProfile";
import AOSInit from "@/lib/AOS/AOSInit";
import { StoreProvider } from "@/Providers";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("_wee_url") || null;
  return (
    <StoreProvider>
      <html lang="en">
        <GoogleTagManager gtmId="GTM-MG2LQR92" />
        <body className={`${inter.className} antialiased`}>{children}</body>
      </html>
      <GetProfile isAuthenticated={!!authCookie} />
      <AOSInit />
    </StoreProvider>
  );
}
