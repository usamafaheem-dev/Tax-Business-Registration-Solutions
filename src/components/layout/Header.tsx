"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  const isWhiteNavPage = ["/blogs", "/contact", "/about", "/services"].some(p => pathname.startsWith(p));
  const showWhiteNavPill = isWhiteNavPage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate hero height (approx 35vh, min 300px, max 400px)
      const vh = window.innerHeight * 0.35;
      const heroHeight = Math.min(Math.max(vh, 300), 400);
      setIsPastHero(window.scrollY > heroHeight - 40); // 40px buffer
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When scrolled, we want the logo to be white. 
  // Initially, if we are on blogs, the bg is white/grey, so logo is black.
  // If we are on home hero (which has black overlay), the logo should probably be white, 
  // but let's just make it switch based on scroll for the pill effect.
  
  return (
    <header
      className={cn(
        "fixed left-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isScrolled ? "top-4 px-4" : "top-0"
      )}
    >
      <div 
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled 
            ? cn(
                "max-w-[850px] bg-emerald-900 backdrop-blur-lg rounded-[2rem] px-6 py-3.5 shadow-2xl transition-[box-shadow,ring]",
                (isWhiteNavPage && !isPastHero) ? "ring-[1.5px] ring-white" : "ring-1 ring-white/10"
              )
            : "max-w-7xl px-5 py-6 sm:px-8 lg:px-10 bg-transparent"
        )}
      >
        <Link href="/" className="group shrink-0 flex items-center">
          <span 
            className={cn(
              "font-display font-extrabold lowercase tracking-tight transition-all duration-500",
              isScrolled 
                ? "text-[1.2rem] text-white" 
                : cn("text-[1.35rem] sm:text-[1.5rem]", (pathname === "/" || isWhiteNavPage) ? "text-white" : "text-neutral-900")
            )}
          >
            {siteConfig.name.toLowerCase()}
          </span>
        </Link>

        {/* Center the navigation when scrolled */}
        <nav 
          className={cn(
            "hidden md:flex items-center gap-1.5 transition-all duration-500",
            isScrolled 
              ? "bg-transparent px-0 py-0" 
              : (showWhiteNavPill ? "rounded-full bg-white px-4 py-2.5 shadow-sm" : "rounded-full bg-emerald-900 px-4 py-2.5")
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-[0.88rem] font-medium transition-colors ${
                pathname === link.href
                  ? (showWhiteNavPill ? "bg-emerald-900 text-white" : "bg-white text-neutral-900")
                  : (showWhiteNavPill ? "text-emerald-900 hover:bg-emerald-50" : "text-white/80 hover:bg-white/10 hover:text-white")
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={cn(
            "rounded-full p-2.5 transition-colors md:hidden",
            isScrolled 
              ? "bg-white/10 hover:bg-white/20 text-white" 
              : (showWhiteNavPill ? "bg-white text-emerald-900" : "bg-emerald-900 text-white")
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Sidebar / Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%", transition: { ease: "easeInOut", duration: 0.3 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-[101] w-full bg-[#051c13] px-5 py-6 flex flex-col md:hidden overflow-y-auto shadow-2xl"
            >
              {/* Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-[300px] bg-emerald-500/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-emerald-600/10 blur-[80px] pointer-events-none" />

              {/* Header inside menu */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <span className="font-display text-[1.4rem] font-extrabold lowercase tracking-tight text-white drop-shadow-md">
                  {siteConfig.name.toLowerCase()}
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-emerald-900/80 p-2 text-white transition-colors hover:bg-emerald-700 shadow-sm border border-emerald-700/50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links Card */}
              <div className="relative z-10 flex-1 flex flex-col">
                <motion.nav 
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                  }}
                  className="flex flex-col gap-1.5 rounded-[2rem] bg-[#083323] p-3 shadow-xl border border-[#0d4a34]"
                >
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div 
                        key={link.href}
                        variants={{
                          hidden: { x: -20, opacity: 0 },
                          visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-[1.25rem] px-5 py-4 text-[15px] font-bold transition-all duration-300 ${
                            isActive
                              ? "bg-white text-[#051c13] shadow-md"
                              : "text-emerald-50 hover:bg-white/10 hover:translate-x-1"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.nav>

                {/* Descriptive Text */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8 px-2 text-center text-[13.5px] leading-relaxed text-emerald-100/70 font-medium font-sans"
                >
                  Trusted programs in education, healthcare, and community welfare, helping families create a better tomorrow.
                </motion.p>
              </div>

              {/* Action Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="relative z-10 mt-8 flex gap-3 px-1 pb-4"
              >
                <Link
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-[#083323] border border-[#0d4a34] py-3.5 px-2 text-center text-[14px] font-bold text-white flex justify-center items-center gap-1.5 hover:bg-emerald-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  Join Us <ArrowRight className="h-4 w-4 text-emerald-400" />
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-white py-3.5 px-2 text-center text-[14px] font-bold text-[#051c13] flex justify-center items-center gap-1.5 hover:bg-neutral-100 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4 text-emerald-600" /> Email Us
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
