import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="preload"
          href="/fonts/CabinetGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/CabinetGrotesk-Extrabold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} min-h-screen antialiased bg-[#0a2318]`}>
        <div className="relative z-10 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Header />
          <main>{children}</main>
          
          {/* Left "Nok" (Inverted Corner) */}
          <svg className="absolute bottom-0 left-0 w-[2.5rem] sm:w-[3.5rem] h-[2.5rem] sm:h-[3.5rem] translate-y-full text-[#f5f4ef] fill-current z-20" viewBox="0 0 100 100">
            <path d="M0 0 L100 0 A 100 100 0 0 0 0 100 Z" />
          </svg>

          {/* Right "Nok" (Inverted Corner) */}
          <svg className="absolute bottom-0 right-0 w-[2.5rem] sm:w-[3.5rem] h-[2.5rem] sm:h-[3.5rem] translate-y-full text-[#f5f4ef] fill-current z-20" viewBox="0 0 100 100">
            <path d="M0 0 L100 0 L100 100 A 100 100 0 0 0 0 0 Z" />
          </svg>
        </div>
        <Footer />
      </body>
    </html>
  );
}
