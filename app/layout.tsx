import type { Metadata } from "next";
import "../common/styles/globals.css";
import { inter } from "@/common/styles/fonts";

export const metadata: Metadata = {
  title: "Tuğberk Ata",
  description: "Tuğberk Ata Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
