import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Next.js Tutorial",
  description: "Build awesome stuff with Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} min-h-screen `}
      >
        <Navbar />
        <main className=" py-20  px-8 max-w-7xl mx-auto">
          {children}

        </main>
      </body>
    </html>
  );
}
