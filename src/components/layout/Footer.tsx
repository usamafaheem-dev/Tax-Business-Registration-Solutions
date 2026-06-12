"use client";

import Link from "next/link";
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
        className="fixed bottom-0 left-0 w-full z-0 bg-[#0a2318] text-[#f5f4ef] rounded-t-[2.5rem] sm:rounded-t-[3.5rem] overflow-y-auto overflow-x-hidden no-scrollbar max-h-[85vh] md:max-h-none"
      >
        {/* Topographic Background (Reduced & Subtle) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
          <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 100 100" preserveAspectRatio="none">
            {Array.from({length: 4}).map((_, i) => (
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
            <div className="flex flex-col gap-2.5 md:gap-3 text-emerald-100/90 text-[13px] md:text-[15px] md:w-1/4 items-center md:items-start text-center md:text-left">
               <h3 className="font-display text-emerald-950 font-bold text-base md:text-lg mb-1.5 md:mb-2">
                 <span className="bg-white px-3 py-1 rounded shadow-sm rotate-2 inline-block">Reach Out</span>
               </h3>
               <p className="leading-relaxed mb-1 max-w-[220px]">
                 We are always here to help. <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded shadow-sm -rotate-2 text-xs font-bold mx-0.5">Reach out</span> to us for any inquiries or <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded shadow-sm rotate-2 text-xs font-bold mx-0.5">support</span>.
               </p>
               <p className="leading-relaxed max-w-[200px] text-emerald-300 font-medium">{siteConfig.address}</p>
               <p>
                 <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                   <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded rotate-1 shadow-sm font-bold text-xs md:text-sm tracking-wide transition-all hover:bg-emerald-100 hover:scale-105">
                     {siteConfig.phone}
                   </span>
                 </a>
               </p>
               <p>
                 <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                   <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded -rotate-1 shadow-sm font-bold text-xs md:text-sm tracking-wide transition-all hover:bg-emerald-100 hover:scale-105">
                     {siteConfig.email}
                   </span>
                 </a>
               </p>
            </div>

            {/* Center: Brand & Buttons */}
            <div className="flex flex-col items-center text-center md:w-2/4">
               {/* Asterisk Logo */}
               <div className="text-emerald-500 w-14 h-14 sm:w-24 sm:h-24 mb-2 md:mb-3 drop-shadow-2xl transition-transform hover:rotate-[15deg] duration-500">
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                   <path d="M44 0h12v35.8l31-17.9 6 10.4-31 17.9 31 17.9-6 10.4-31-17.9v35.8H44V56.6l-31 17.9-6-10.4 31-17.9-31-17.9 6-10.4 31 17.9z" />
                 </svg>
               </div>
               
               <AnimatedHeading as="h2" className="font-display text-2xl sm:text-4xl font-extrabold mb-1 text-white tracking-tight">
                 {siteConfig.name}
               </AnimatedHeading>
               <p className="font-serif italic text-emerald-100/60 text-[13px] sm:text-base mb-4 md:mb-6">
                 Where hope and <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded shadow-sm -rotate-2 font-bold mx-0.5 not-italic text-xs md:text-sm">community</span> begin
               </p>

               <div className="flex flex-col sm:flex-row gap-3 w-full justify-center px-4 sm:px-0">
                 <Link 
                   href="#donate" 
                   className="bg-emerald-500 text-[#0a2318] font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-emerald-400 hover:scale-105 transition-all text-[12px] md:text-[14px] shadow-lg"
                 >
                   Make a Donation <ArrowRight className="w-3.5 h-3.5" />
                 </Link>
                 <Link 
                   href="#contact" 
                   className="bg-[#123927] border border-emerald-800/50 text-white font-bold px-4 py-2 md:px-6 md:py-2.5 rounded-full flex items-center justify-center gap-1.5 hover:bg-emerald-900 hover:scale-105 transition-all text-[12px] md:text-[14px]"
                 >
                   Join our Team <ArrowRight className="w-3.5 h-3.5" />
                 </Link>
               </div>
            </div>

            {/* Right: Quick Links & Socials */}
            <div className="flex flex-col gap-4 md:gap-6 md:w-1/4 items-center md:items-end">
               
               {/* Quick Links (Single Column) */}
               <div className="flex flex-col gap-1 md:gap-2 text-[13px] md:text-[15px] text-center md:text-right">
                 <h3 className="font-display text-emerald-950 font-bold text-base md:text-lg mb-1.5 md:mb-2">
                   <span className="bg-white px-3 py-1 rounded shadow-sm -rotate-2 inline-block">Quick Links</span>
                 </h3>
                 {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-emerald-100/80 hover:text-white transition-colors block">
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
                     className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full text-white hover:text-emerald-200 hover:-translate-y-1 transition-all group" 
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
          <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-emerald-900/40 flex justify-center items-center text-[10px] md:text-[13px] font-sans">
             <div className="text-emerald-100/60 font-medium tracking-widest uppercase flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center">
                &copy; {new Date().getFullYear()} <span className="md:hidden">{siteConfig.name.replace(" Foundation", "")}</span><span className="hidden md:inline">{siteConfig.name}</span>. All <span className="inline-block bg-white text-emerald-950 px-2 py-0.5 rounded shadow-sm rotate-2 font-bold tracking-normal lowercase text-[9px] md:text-xs mx-0.5">rights</span> reserved.
             </div>
          </div>

        </div>
      </footer>
    </>
  );
}
