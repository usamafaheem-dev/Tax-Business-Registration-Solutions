"use client";

import Link from "next/link";
import Image from "next/image";
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

  const isHome = pathname === "/";
  const isServicesHero = pathname.startsWith("/services") && isScrolled && !isPastHero;

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
              "max-w-[850px] backdrop-blur-lg rounded-[2rem] px-6 py-2 sm:py-2.5 shadow-xl transition-all duration-500",
              "bg-[#f2cf07]/60",
              "ring-2 ring-[#f2cf07]"
            )
            : "max-w-7xl px-5 py-6 sm:px-8 lg:px-10 bg-transparent"
        )}
      >
        <Link href="/" className="group shrink-0 flex items-center relative drop-shadow-sm">
          {/* Logo Container */}
          <div className={cn(
            "relative z-30 flex items-center justify-center shrink-0 transition-all duration-300 overflow-hidden",
            isScrolled 
              ? "h-10 sm:h-11 w-auto bg-transparent border-transparent rounded-none" 
              : "bg-[#f2cf07]/30 backdrop-blur-md border-2 border-[#f2cf07] rounded-full h-[4.5rem] w-[4.5rem] sm:h-[5.5rem] sm:w-[5.5rem]"
          )}>
            {/* Soft White Glow to make the logo readable without a hard white box */}
            <div className={cn(
              "absolute inset-0 z-0 transition-opacity duration-300",
              isScrolled ? "opacity-0 hidden" : "opacity-100 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_25%,rgba(255,255,255,0)_70%)]"
            )} />
            
            <Image
              src="/images/logo.jpeg"
              alt={siteConfig.name}
              width={240}
              height={100}
              className={cn(
                "relative z-10 object-contain w-auto mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isScrolled 
                  ? "h-10 sm:h-11 scale-100" 
                  : "h-14 sm:h-[4.8rem] scale-[1.3] sm:scale-[1.4] group-hover:scale-[1.4] sm:group-hover:scale-[1.5]"
              )}
            />
          </div>

          {/* Text Pill (Right Side, Tucked Under) */}
          <div className={cn(
            "hidden sm:flex flex-row items-center relative z-20 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isScrolled 
              ? "max-w-0 opacity-0 -translate-x-8 px-0 border-transparent h-0 overflow-hidden" 
              : "max-w-[300px] opacity-100 translate-x-0 bg-[#f2cf07]/30 backdrop-blur-md border-2 border-l-0 border-[#f2cf07] rounded-r-full h-9 sm:h-11 -ml-8 pl-10 pr-6"
          )}>
            <div className="flex flex-row items-center gap-1.5 w-max shrink-0 transition-transform duration-500 group-hover:translate-x-1">
              <span className="font-display font-medium text-[1.05rem] sm:text-[1.25rem] leading-none text-white drop-shadow-md tracking-normal">My Business</span>
              <span className="font-display font-black text-[1rem] sm:text-[1.2rem] leading-none text-[#f2cf07] bg-[#070142] px-2 py-0.5 rounded-sm inline-block -rotate-2 tracking-tight uppercase shadow-sm">Solution</span>
            </div>
          </div>
        </Link>

        {/* Center the navigation when scrolled */}
        <nav
          className={cn(
            "hidden md:flex items-center gap-1.5 transition-all duration-500 rounded-full",
            isScrolled
              ? "bg-[#070142] px-2 py-1.5 shadow-md"
              : (!isHome ? "bg-[#f2cf07] px-4 py-2.5 shadow-sm" : "bg-[#070142] px-4 py-2.5")
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-1.5 text-[0.88rem] font-medium transition-colors ${pathname === link.href
                ? (!isHome && !isScrolled ? "bg-[#070142] text-white" : "bg-[#f2cf07] text-[#070142]")
                : (!isHome && !isScrolled 
                    ? "text-[#070142] hover:bg-[#070142] hover:text-white" 
                    : "text-white hover:bg-white/25 hover:text-white")
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
              ? "bg-[#070142] text-[#f2cf07] hover:bg-[#070142]/90"
              : (!isHome ? "bg-[#f2cf07] text-[#070142]" : "bg-[#f2cf07] text-[#070142]")
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
              className="fixed inset-y-0 left-0 z-[101] w-full bg-[#070142] px-5 py-6 flex flex-col md:hidden overflow-y-auto shadow-2xl"
            >
              {/* Ambient Glows */}
              <div className="absolute top-0 left-0 w-full h-[300px] bg-[#070142]/80/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#070142]/10 blur-[80px] pointer-events-none" />

              {/* Header inside menu */}
              <div className="relative z-10 flex items-center justify-between mb-8 bg-[#f2cf07] rounded-[2rem] pl-4 pr-2 py-2 shadow-md">
                <Image
                  src="/images/logo.jpeg"
                  alt={siteConfig.name}
                  width={200}
                  height={80}
                  className="object-contain h-10 sm:h-12 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-[#070142] p-2 text-white transition-colors hover:bg-[#070142]/80 shadow-sm"
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
                  className="flex flex-col gap-0.5 rounded-[2rem] bg-[#070142] p-3 shadow-xl border border-white/10"
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
                          className={`block rounded-[1.25rem] px-5 py-3.5 text-[15px] font-bold transition-all duration-300 ${isActive
                            ? "bg-[#f2cf07] text-[#070142] shadow-md"
                            : "text-white/90 hover:bg-white/10 hover:translate-x-1"
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
                  className="mt-8 px-2 text-center text-[13.5px] leading-relaxed text-white/80 font-medium font-sans"
                >
                  Helping individuals, startups, and businesses with tax filing, company registration, and compliance across Pakistan.
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
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-[#f2cf07] border-none py-3.5 px-2 text-center text-[14px] font-bold text-[#070142] flex justify-center items-center gap-1.5 hover:bg-[#dcb900] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  Contact Us <ArrowRight className="h-4 w-4 text-[#070142]/60" />
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 rounded-full bg-white py-3.5 px-2 text-center text-[14px] font-bold text-[#070142] flex justify-center items-center gap-1.5 hover:bg-neutral-100 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4 text-[#070142]" /> Email Us
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
