import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import ScrollTop from "@/components/ScrollTop";
import { TopBar } from "@/components/TopBar";
// import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIH Hub",
  description: "NEPAL'S NO. 1 CADET PREPARATION INSTITUTE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "",
          inter.className
        )}
      >
        <TopBar/>
        <Navbar />
        {children}
        <Analytics />
        <ScrollTop/>
        {/* <Footer /> */}
      </body>
    </html>
  );
}