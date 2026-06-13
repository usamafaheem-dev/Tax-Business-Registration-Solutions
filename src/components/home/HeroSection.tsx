"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, ShieldCheck, Users, Globe2 } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const donateBtn =
  "inline-flex items-center gap-2 rounded-full bg-[#070142] px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-[#070142] font-display";

const features = [
  {
    icon: ShieldCheck,
    title: "25+ Years of Experience",
  },
  {
    icon: Users,
    title: "10000+ Satisfied Clients",
  },
  {
    icon: Globe2,
    title: "2500+ Successful Registrations",
  },
  {
    icon: ShieldCheck,
    title: "Professional Tax Consultants",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[550px] overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <Image
        src="/images/hero_bg.png"
        alt="Tax and business registration consultancy"
        fill
        priority
        className="object-cover object-[center_right] sm:object-right"
        sizes="100vw"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/60" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 pt-28 md:pt-36 pb-8 md:pb-12 flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-xl lg:max-w-2xl flex flex-col items-center md:items-start"
        >
          <motion.div variants={fadeUp}>
            <Badge className="bg-[#070142] border-none backdrop-blur-md font-display" textColor="text-white" dotColor="bg-[#f2cf07]">My Business Solution</Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-4 md:mt-2 font-display text-4xl sm:text-[3.75rem] lg:text-[4.5rem] font-extrabold leading-[1.1] md:leading-[1.1] tracking-tight text-white">
            Complete<br />
            <span className="bg-[#070142] text-white px-3 py-1 inline-block -rotate-2 rounded-lg shadow-md my-2">Tax & Business</span><br />
            <span className="whitespace-nowrap">Registration <span className="bg-[#070142] text-white px-3 py-1 inline-block -rotate-2 rounded-lg shadow-md">Solutions</span></span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 md:mt-4 max-w-lg text-[15px] md:text-lg leading-relaxed md:leading-snug text-white/95 sm:text-xl font-display">
            Helping Individuals, Startups & Businesses with Tax Filing, Company Registration, Trademark Protection, and Regulatory Compliance Across Pakistan.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 md:mt-8 flex flex-row items-center justify-center md:justify-start gap-3 w-full md:w-auto">
            <Link href="/contact" className="inline-flex items-center justify-center gap-1.5 rounded-full border-2 border-[#070142] bg-[#f2cf07] px-5 py-2.5 md:px-8 md:py-3.5 text-[0.8rem] md:text-[0.95rem] font-semibold text-[#070142] transition-colors hover:bg-[#070142] hover:text-white hover:border-[#f2cf07] font-display">
              Join Us
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </Link>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-transparent bg-[#070142] px-5 py-2.5 md:px-8 md:py-3.5 text-[0.8rem] md:text-[0.95rem] font-semibold text-white transition-colors hover:bg-black font-display shadow-md"
            >
              <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
              Email Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Marquee Row inside Hero Section */}
      <div className="relative z-10 w-full border-t border-white/20 bg-[#070142] overflow-hidden flex shrink-0">
        <div className="flex w-max animate-marquee hover:animation-play-state-paused">
          {[...features, ...features, ...features, ...features].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-3 md:gap-4 py-3.5 md:py-5 px-6 md:px-10 border-r border-white/20 text-white shrink-0">
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full bg-[#f2cf07] text-white shadow-sm">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <span className="font-display text-[0.95rem] md:text-[1.1rem] font-bold tracking-wide">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
