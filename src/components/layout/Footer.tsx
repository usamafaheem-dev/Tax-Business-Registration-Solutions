"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig, navLinks } from "@/lib/data/site";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case "facebook": return <Facebook className="w-4 h-4" />;
    case "twitter": return <Twitter className="w-4 h-4" />;
    case "instagram": return <Instagram className="w-4 h-4" />;
    case "linkedin": return <Linkedin className="w-4 h-4" />;
    default: return <span className="font-bold uppercase text-xs">{platform.charAt(0)}</span>;
  }
};

export default function Footer() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    const timeout = setTimeout(updateHeight, 500);

    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div style={{ height: footerHeight }} className="w-full" />

      <footer
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0 bg-[#070142] text-[#f5f4ef] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] overflow-y-auto overflow-x-hidden no-scrollbar max-h-[85vh] md:max-h-none"
      >
        {/* Topographic Background (Reduced & Subtle) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({ length: 4 }).map((_, i) => (
              <path
                key={i}
                d={`M 0 ${i * 30 + 10} Q 50 ${i * 30 + 40} 100 ${i * 30 + 10}`}
                fill="none"
                stroke="#10b981"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        <div className="mx-auto max-w-[1300px] px-4 pt-4 pb-6 lg:px-6 lg:pt-10 lg:pb-10 relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10">

            {/* Left: Contact Info & Brief Text */}
            <div className="flex flex-col gap-2.5 md:gap-3 text-white/90/90 text-[13px] md:text-[15px] md:w-1/4 items-center md:items-start text-center md:text-left">
              <h3 className="font-display text-[#070142] font-bold text-base md:text-lg mb-1.5 md:mb-2">
                <span className="bg-[#f2cf07] px-3 py-1 rounded shadow-sm rotate-2 inline-block">Reach Out</span>
              </h3>
              <p className="leading-relaxed mb-1 max-w-[220px]">
                We are always here to help. <span className="inline-block bg-white text-[#070142] px-2 py-0.5 rounded shadow-sm -rotate-2 text-xs font-bold mx-0.5">Reach out</span> to us for any inquiries or <span className="inline-block bg-white text-[#070142] px-2 py-0.5 rounded shadow-sm rotate-2 text-xs font-bold mx-0.5">support</span>.
              </p>
              <p className="leading-relaxed max-w-[200px] text-white/70 font-medium">{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="group transition-colors">
                  <span className="inline-block bg-[#f2cf07] text-[#070142] px-2 py-0.5 rounded rotate-1 shadow-sm font-bold text-xs md:text-sm tracking-wide transition-all group-hover:scale-105">
                    {siteConfig.phone}
                  </span>
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="group transition-colors">
                  <span className="inline-block bg-[#f2cf07] text-[#070142] px-2 py-0.5 rounded -rotate-1 shadow-sm font-bold text-xs md:text-sm tracking-wide transition-all group-hover:scale-105">
                    {siteConfig.email}
                  </span>
                </a>
              </p>
            </div>

            {/* Center: Brand & Buttons */}
            <div className="flex flex-col items-center text-center md:w-2/4">
              <Link href="/" className="mb-4 md:mb-6 transition-transform hover:scale-105 duration-500 bg-[#f2cf07]/70 backdrop-blur-md border border-[#f2cf07]/50 rounded-full w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center overflow-hidden relative">
                {/* Soft White Glow for readability */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6)_25%,rgba(255,255,255,0)_60%)] z-0" />
                <Image
                  src="/images/logo.jpeg"
                  alt={siteConfig.name}
                  width={280}
                  height={120}
                  className="object-contain h-full w-full relative z-10 mix-blend-multiply scale-[1.4] sm:scale-[1.45]"
                />
              </Link>
              <p className="font-serif italic text-white/90/60 text-[13px] sm:text-base mb-4 md:mb-6">
                Your trusted <span className="inline-block bg-[#f2cf07] text-[#070142] px-2 py-0.5 rounded shadow-sm -rotate-2 font-bold mx-0.5 not-italic text-xs md:text-sm">compliance</span> partner
              </p>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center px-4 sm:px-0">
                <Link
                  href="/services"
                  className="bg-[#f2cf07] text-[#070142] font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-[#dcb900] hover:scale-105 transition-all text-[12px] md:text-[14px] shadow-lg"
                >
                  Our Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-[#f2cf07] hover:text-[#070142] hover:border-[#f2cf07] hover:scale-105 transition-all text-[12px] md:text-[14px]"
                >
                  Contact Us <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Quick Links & Socials */}
            <div className="flex flex-col gap-4 md:gap-6 md:w-1/4 items-center md:items-end">

              {/* Quick Links (Single Column) */}
              <div className="flex flex-col gap-1 md:gap-2 text-[13px] md:text-[15px] text-center md:text-right">
                <h3 className="font-display text-[#070142] font-bold text-base md:text-lg mb-1.5 md:mb-2">
                  <span className="bg-[#f2cf07] px-3 py-1 rounded shadow-sm -rotate-2 inline-block">Quick Links</span>
                </h3>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-white/90/80 hover:text-white transition-colors block">
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Social Media Circular Buttons */}
              <div className="flex gap-3 mt-2 md:mt-4">
                {Object.entries(siteConfig.social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full text-[#f2cf07] hover:text-[#dcb900] hover:-translate-y-1 transition-all group"
                    title={platform}
                  >
                    {/* Animated White Border */}
                    <div className="absolute inset-0 border-2 border-dashed border-white/80 rounded-full animate-[spin_8s_linear_infinite] group-hover:border-white transition-colors" />
                    <div className="relative z-10">
                      <SocialIcon platform={platform} />
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Copyright Notice */}
          <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-[#070142]/40 flex justify-center items-center text-[10px] md:text-[13px] font-sans">
            <div className="text-white/90/60 font-medium tracking-widest uppercase flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center">
              &copy; {new Date().getFullYear()} <span className="md:hidden">{siteConfig.name.replace(" Foundation", "")}</span><span className="hidden md:inline">{siteConfig.name}</span>. All <span className="inline-block bg-[#f2cf07] text-[#070142] px-2 py-0.5 rounded shadow-sm rotate-2 font-bold tracking-normal lowercase text-[9px] md:text-xs mx-0.5">rights</span> reserved.
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
