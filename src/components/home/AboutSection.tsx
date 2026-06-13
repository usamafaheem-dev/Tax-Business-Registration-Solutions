"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  return (
    <section className="relative overflow-hidden bg-[#f5f4ef] pt-8 pb-12 md:pt-12 md:pb-20">
      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-[#070142]/80/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[15%] w-[500px] h-[500px] bg-[#070142]/80/[0.15] rounded-full blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column - Accordion & Stats */}
          <div className="lg:col-span-3 flex flex-col gap-12">

            {/* Accordion */}
            <div className="flex flex-col gap-4">
              {/* Mission Tab */}
              <div className="overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`flex w-full items-center justify-between px-6 py-4 transition-colors ${activeTab === "mission" ? "bg-[#f2cf07] text-[#070142]" : "bg-[#070142] text-white"
                    }`}
                >
                  <span className="font-display text-lg font-bold">Mission</span>
                  {activeTab === "mission" ? <ChevronUp className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                <AnimatePresence>
                  {activeTab === "mission" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white px-6 py-5"
                    >
                      <p className="text-[0.95rem] leading-relaxed text-neutral-600">
                        To provide seamless, reliable, and expert tax and business registration solutions, empowering entrepreneurs and organizations to thrive without compliance hurdles.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vision Tab */}
              <div className="overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`flex w-full items-center justify-between px-6 py-4 transition-colors ${activeTab === "vision" ? "bg-[#f2cf07] text-[#070142]" : "bg-[#070142] text-white"
                    }`}
                >
                  <span className="font-display text-lg font-bold">Vision</span>
                  {activeTab === "vision" ? <ChevronUp className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                <AnimatePresence>
                  {activeTab === "vision" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white px-6 py-5"
                    >
                      <p className="text-[0.95rem] leading-relaxed text-neutral-600">
                        To be the most trusted business consultancy partner in Pakistan, setting the highest standard for corporate compliance and professional excellence.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-row md:flex-col gap-6 md:gap-8 justify-between">
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-none text-neutral-900">
                  10k<span className="text-[#070142]">+</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-none text-neutral-900">
                  25<span className="text-[#070142]">+</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500">Years of Experience</p>
              </div>
            </div>

          </div>

          {/* Center Column - Image */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[450px] aspect-square lg:aspect-[4/4.5]">

              <div className="relative h-full w-full overflow-hidden rounded-t-[5rem] sm:rounded-t-[8rem] rounded-b-none shadow-xl">
                <Image
                  src="/images/about_us_edited.png"
                  alt="Business Consultancy at MBS"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pl-0 lg:pl-10 mt-8 lg:mt-0">
            <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-transparent bg-[#f2cf07] mb-6 self-center lg:self-start">
              About Us
            </Badge>

            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900 mb-6">
              Trusted <span className="bg-[#070142] text-white px-2 py-0.5 inline-block -rotate-2">Business</span><br />
              Consultancy Partner
            </AnimatedHeading>

            <p className="text-lg leading-relaxed text-neutral-600 mb-10">
              Helping Individuals, Startups & Businesses with Tax Filing, Company Registration, Trademark Protection, and Regulatory Compliance Across Pakistan.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 mb-10">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-2 border-[#f5f4ef] overflow-hidden relative">
                    <Image
                      src={`/images/team-${i}.webp`}
                      alt="Avatar"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="h-12 w-12 rounded-full border-2 border-[#f5f4ef] bg-neutral-900 flex items-center justify-center text-white z-10 relative">
                  <Plus className="h-5 w-5" />
                </div>
              </div>
              <p className="font-semibold text-neutral-900 text-sm">
                10,000+ Satisfied Clients
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-[#070142] bg-[#f2cf07] px-8 py-4 font-semibold text-[#070142] transition-colors hover:bg-[#070142] hover:text-white hover:border-[#f2cf07]"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
