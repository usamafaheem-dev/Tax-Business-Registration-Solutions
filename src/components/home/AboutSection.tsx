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
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-emerald-500/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[15%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />

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
                  className={`flex w-full items-center justify-between px-6 py-4 transition-colors ${
                    activeTab === "mission" ? "bg-slate-900 text-white" : "bg-emerald-900 text-white"
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
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Vision Tab */}
              <div className="overflow-hidden shadow-sm">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`flex w-full items-center justify-between px-6 py-4 transition-colors ${
                    activeTab === "vision" ? "bg-slate-900 text-white" : "bg-emerald-900 text-white"
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
                        To create a world where everyone has access to basic needs and opportunities.
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
                  23.5k<span className="text-emerald-700">+</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500">Volunteers Engaged</p>
              </div>
              <div>
                <h3 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-medium leading-none text-neutral-900">
                  15<span className="text-emerald-700">+</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-500">Years of Experience</p>
              </div>
            </div>

          </div>

          {/* Center Column - Image */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[400px] aspect-[4/5]">
              
              <div className="relative h-full w-full overflow-hidden rounded-t-full shadow-xl">
                <Image
                  src="/images/about_us.webp"
                  alt="Volunteer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pl-0 lg:pl-10 mt-8 lg:mt-0">
            <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-6 self-center lg:self-start">
              About Us
            </Badge>
            
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900 mb-6">
              Building Bridges,<br />
              Changing <span className="bg-emerald-900 text-white px-2 py-0.5 inline-block -rotate-2">Lives</span>
            </AnimatedHeading>
            
            <p className="text-lg leading-relaxed text-neutral-600 mb-10">
              We are dedicated to improving the lives of underprivileged communities through education, healthcare, and sustainable empowerment programs. By working hand in hand, we build a future where everyone thrives.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-6 mb-10">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-2 border-[#f5f4ef] overflow-hidden relative">
                    <Image
                      src={`/images/about-education.jpg`}
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
                10,000+ hours volunteered
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-emerald-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-emerald-950"
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
