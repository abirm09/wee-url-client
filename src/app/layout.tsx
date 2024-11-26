import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wee-Url | Home",
  description: "An url shortening app",
};
// Font - inter
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
