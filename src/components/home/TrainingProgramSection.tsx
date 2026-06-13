"use client";

import { Briefcase, Calculator, Scale } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import React from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const trainingItems = [
  {
    id: "01",
    title: (
      <>
        Corporate <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded rotate-1 shadow-sm">Compliance</span>
      </>
    ),
    icon: Briefcase,
    desc: "Orientation for businesses to remain compliant with SECP, FBR, and SRB regulations."
  },
  {
    id: "02",
    title: (
      <>
        Taxation <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded -rotate-2 shadow-sm">Basics</span>
      </>
    ),
    icon: Calculator,
    desc: "Guides on managing income tax, sales tax returns, and Filer benefits."
  },
  {
    id: "03",
    title: (
      <>
        Business <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded rotate-2 shadow-sm">Structuring</span>
      </>
    ),
    icon: Scale,
    desc: "Workshops on structuring Private Limited companies, AOPs, and Proprietorships."
  }
];

export default function TrainingProgramSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 md:pt-12 md:pb-20">

      {/* Ambient Blue Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
        <FadeIn>
          <div className="mb-10 text-center relative z-10">
            <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-transparent bg-[#f2cf07] mb-6 inline-flex">
              Training
            </Badge>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900">
              Training <span className="inline-block bg-[#070142] text-white px-3 py-1 rounded-lg -rotate-2 shadow-sm">Program</span>
            </AnimatedHeading>
            <p className="mt-5 text-base text-neutral-600 max-w-xl mx-auto font-medium">
              Learn the fundamentals of corporate compliance and tax management through our expert-led programs.
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-16 hidden md:block z-10">
          {/* Wavy Dotted Line Background - Animated */}
          <div className="absolute left-[15%] right-[15%] top-[25px] h-[50px] pointer-events-none">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 100">
              <style>
                {`
                   @keyframes move-line {
                     from { stroke-dashoffset: 24; }
                     to { stroke-dashoffset: 0; }
                   }
                   .animated-path {
                     animation: move-line 1s linear infinite;
                   }
                 `}
              </style>
              <path
                className="animated-path"
                d="M 0 50 C 250 120, 250 -20, 500 50 C 750 120, 750 -20, 1000 50"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="2.5"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* Small scattered decorative dots (Yellow) */}
          <div className="absolute left-[20%] top-[-10px] h-2 w-2 rounded-full bg-[#f2cf07] opacity-80" />
          <div className="absolute left-[45%] top-[70px] h-2 w-2 rounded-full bg-[#f2cf07] opacity-60" />
          <div className="absolute right-[25%] top-[10px] h-1.5 w-1.5 rounded-full bg-[#f2cf07]" />
          <div className="absolute right-[10%] top-[80px] h-2 w-2 rounded-full bg-[#f2cf07] opacity-80" />

          <div className="grid grid-cols-3 gap-4 relative z-10">
            {trainingItems.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 0.2}>
                <div className="flex flex-col items-center text-center">
                  {/* Circle Icon matching the green theme */}
                  <div className="relative flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#070142] text-white transition-transform duration-300 hover:scale-105 z-10 shadow-lg">
                    <item.icon className="h-7 w-7" />

                    {/* Faint outer circle (black/greyish border) */}
                    <div className="absolute inset-[-12px] rounded-full border border-neutral-300 -z-10" />
                    <div className="absolute inset-[-20px] rounded-full border border-neutral-200 -z-10" />
                  </div>

                  <div className="mt-10 px-4">
                    <h3 className="font-display text-[1.15rem] md:text-[1.25rem] font-bold text-neutral-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-neutral-500 text-[13px] leading-relaxed max-w-[220px] mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col gap-10 mt-10 relative z-10">
          {/* Vertical Dotted Line */}
          <div className="absolute left-[35px] top-[20px] bottom-[20px] w-[2px] border-l-2 border-dashed border-slate-300 z-0" />

          {trainingItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.2}>
              <div className="flex gap-6 relative z-10">
                <div className="relative flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#070142] shadow-md text-white">
                  <item.icon className="h-7 w-7" />
                  <div className="absolute inset-[-8px] rounded-full border border-neutral-300 -z-10" />
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-[1.15rem] font-bold text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-neutral-500 text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
