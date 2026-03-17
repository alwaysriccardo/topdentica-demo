import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "TopDentica — Clinică Stomatologică Chișinău",
  description:
    "Stomatologie modernă în Chișinău. Consultație gratuită, igienizare profesională, implantologie, estetică dentară. Programează-te acum.",
  keywords: [
    "stomatolog chisinau",
    "dentist chisinau",
    "clinica stomatologica",
    "topdentica",
    "implant dentar",
    "albire dinti",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
