"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { faqs } from "@/lib/data/faq";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

function FAQAccordionItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  const activeClass = isOpen 
    ? "bg-[#070142] border-[#070142] text-white shadow-lg" 
    : "bg-[#070142]/5 border-[#070142]/20 text-[#070142] shadow-sm hover:bg-[#070142] hover:text-white hover:border-[#070142]";

  return (
    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 backdrop-blur-xl border group cursor-pointer ${activeClass}`} onClick={onClick}>

      {/* Decorative Background Icon */}
      <div className={`absolute -bottom-6 -right-6 pointer-events-none z-0 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12 ${isOpen ? "opacity-10 text-white" : "opacity-[0.04] text-[#070142] group-hover:opacity-10 group-hover:text-white"}`}>
        <MessageCircleQuestion className="w-32 h-32" />
      </div>

      <button
        type="button"
        className="relative z-10 flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
      >
        <span className="pr-4 font-display font-bold text-[16px]">{item.question}</span>
        <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-white/30 bg-white/10 rotate-180 text-white shadow-inner" : "border-[#070142]/30 text-[#070142]/70 bg-white/50 group-hover:bg-white/10 group-hover:border-white/30 group-hover:text-white"}`}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      <div className={`relative z-10 grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className={`px-6 pb-6 text-[15px] leading-relaxed font-sans ${isOpen ? "text-white/80" : "text-neutral-700 group-hover:text-white/80"}`}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-12 md:pt-12 md:pb-20 border-t border-neutral-200/50">

      {/* Blurry Blue Orbs in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#070142]/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-[#070142]/30 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Scattered Decorative Dots */}
      <div className="absolute left-[15%] top-[15%] h-2.5 w-2.5 rounded-full bg-[#f2cf07] opacity-60 z-0" />
      <div className="absolute right-[20%] top-[25%] h-3 w-3 rounded-full bg-[#070142] opacity-40 z-0" />
      <div className="absolute left-[8%] bottom-[30%] h-2 w-2 rounded-full bg-[#070142] opacity-50 z-0" />
      <div className="absolute right-[15%] bottom-[15%] h-3.5 w-3.5 rounded-full bg-[#f2cf07] opacity-70 z-0" />
      <div className="absolute left-[45%] top-[5%] h-2 w-2 rounded-full bg-[#070142] opacity-30 z-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">

        {/* Top Graphical "F A Q" Header Area */}
        <FadeIn>
          <div className="flex flex-col items-center justify-center mb-14">

            <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-transparent bg-[#f2cf07] mb-6 inline-flex">
              FAQs
            </Badge>

            {/* The Scrabble / Block Layout */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6">

              {/* Left Hand Icon (Simplified) */}
              <div className="hidden sm:block text-[#070142]/50 mr-2 -rotate-45 translate-y-4 drop-shadow-md">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" className="hidden" />
                  <path d="M18 13v-1a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v5" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M6 11v6a6 6 0 0 0 12 0v-4" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>

              {/* F A Q Blocks */}
              <div className="bg-[#070142] text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-[#070142] -rotate-[10deg] transition-transform duration-300 hover:scale-105 hover:-rotate-[12deg]">
                F
              </div>
              <div className="bg-[#070142] text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-[#070142] rotate-[4deg] mt-6 transition-transform duration-300 hover:scale-105 hover:rotate-[6deg]">
                A
              </div>
              <div className="bg-[#070142] text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-[#070142] rotate-[14deg] mt-16 transition-transform duration-300 hover:scale-105 hover:rotate-[16deg]">
                Q
              </div>

              {/* Right Hand Icon (Simplified) */}
              <div className="hidden sm:block text-[#070142]/50 ml-2 rotate-[135deg] translate-y-16 scale-x-[-1] drop-shadow-md">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path d="M18 13v-1a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v5" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M6 11v6a6 6 0 0 0 12 0v-4" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>

            </div>

            <p className="mt-4 text-lg text-neutral-700 font-medium max-w-lg text-center font-sans">
              Find quick answers to all your common <span className="inline-block bg-[#070142] text-white px-3 py-0.5 rounded -rotate-2 shadow-sm">Queries</span>
            </p>

          </div>
        </FadeIn>

        {/* FAQ 2-Column Layout */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4 sm:gap-6">
            {faqs.map((item, index) => (
              <FAQAccordionItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
