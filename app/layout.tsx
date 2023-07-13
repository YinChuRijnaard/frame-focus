import "../styles/globals.css";
import type { Metadata } from "next";

import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Frame Focus",
  description: "Frame Focus - Curated Photography Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
