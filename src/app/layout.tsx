import GetProfile from "@/features/auth/getProfile/GetProfile";
import AOSInit from "@/lib/AOS/AOSInit";
import InitGoogleTagManager from "@/lib/InitGoogleTagManager/InitGoogleTagManager";
import { StoreProvider } from "@/Providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import React from "react";
import { Toaster } from "react-hot-toast";
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
        <InitGoogleTagManager />
        <body className={`${inter.className} antialiased`}>
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
      <GetProfile isAuthenticated={!!authCookie} />
      <AOSInit />
    </StoreProvider>
  );
}
