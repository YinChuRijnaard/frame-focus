import "../styles/globals.css";
import type { Metadata } from "next";

import "remixicon/fonts/remixicon.css";

import Nav from "@/components/Nav";
import BannerCard from "@/components/BannerCard";
import Footer from "@/components/Footer";

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
        <BannerCard />
        {children}
        <Footer />
      </body>
    </html>
  );
}
