import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
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
          "min-h-screen font-sans antialiased  max-w-6xl mx-auto px-4",
          inter.className
        )}
      >
        <Navbar />
        <MenuBar/>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}