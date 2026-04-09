import type { Metadata } from "next";
import { Advent_Pro, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const adventPro = Advent_Pro({
  variable: "--font-advent-pro",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-alfa-slab",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "OohButter — Meal Prep & Events Catering",
  description:
    "OohButter is a two-chef team offering weekly meal prep packages and bespoke catering for corporate and private events.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${adventPro.variable} ${alfaSlabOne.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
