import type { Metadata } from "next";
import "../common/styles/globals.css";
import { inter } from "@/common/styles/fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Tuğberk Ata",
  description: "The Portfolio Site For Tuğberk Ata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />{" "}
      </body>
    </html>
  );
}
