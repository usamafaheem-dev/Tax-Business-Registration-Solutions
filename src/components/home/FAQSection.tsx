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
  return (
    <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 backdrop-blur-xl border hover:border-emerald-900 group ${isOpen ? "shadow-lg bg-emerald-900/10 border-emerald-900" : "bg-emerald-900/5 border-emerald-900/20 shadow-sm"}`}>
      
      {/* Decorative Background Icon */}
      <div className="absolute -bottom-6 -right-6 opacity-[0.04] pointer-events-none text-emerald-900 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
        <MessageCircleQuestion className="w-32 h-32" />
      </div>

      <button
        type="button"
        className="relative z-10 flex w-full items-center justify-between px-6 py-5 text-left hover:bg-emerald-900/5 transition-colors"
        onClick={onClick}
      >
        <span className="pr-4 font-display font-bold text-neutral-900 text-[16px]">{item.question}</span>
        <div className={`flex shrink-0 h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-emerald-900 bg-emerald-900 text-white rotate-180 shadow-inner" : "border-emerald-900/30 text-emerald-900/70 bg-white/50"}`}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>
      <div className={`relative z-10 grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-neutral-700 font-sans">
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
      
      {/* Blurry Green Orbs in Background */}
      <div className="absolute top-0 left-[-5%] w-[400px] h-[400px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[5%] right-[5%] w-[600px] h-[500px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Squiggly Lines Background (Right side & across) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M-100 200 C 150 450, 400 -100, 600 300 S 900 100, 1100 400" fill="none" stroke="#10b981" strokeWidth="1.5" />
        <path d="M300 -100 C 400 300, 800 -100, 1000 400 S 1100 800, 1200 900" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="6 6" />
        <path d="M-100 800 C 200 900, 300 500, 600 700 S 900 500, 1100 800" fill="none" stroke="#047857" strokeWidth="1" />
      </svg>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Top Graphical "F A Q" Header Area */}
        <FadeIn>
          <div className="flex flex-col items-center justify-center mb-14">
            
            <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-6 inline-flex">
              FAQs
            </Badge>

            {/* The Scrabble / Block Layout */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6">
              
              {/* Left Hand Icon (Simplified) */}
              <div className="hidden sm:block text-emerald-600/50 mr-2 -rotate-45 translate-y-4 drop-shadow-md">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" className="hidden"/>
                  <path d="M18 13v-1a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v5" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M6 11v6a6 6 0 0 0 12 0v-4" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>

              {/* F A Q Blocks */}
              <div className="bg-emerald-900 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-emerald-800 -rotate-[10deg] transition-transform duration-300 hover:scale-105 hover:-rotate-[12deg]">
                F
              </div>
              <div className="bg-emerald-900 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-emerald-800 rotate-[4deg] mt-6 transition-transform duration-300 hover:scale-105 hover:rotate-[6deg]">
                A
              </div>
              <div className="bg-emerald-900 text-white rounded-2xl w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-5xl sm:text-7xl font-display font-extrabold shadow-xl border border-emerald-800 rotate-[14deg] mt-16 transition-transform duration-300 hover:scale-105 hover:rotate-[16deg]">
                Q
              </div>

              {/* Right Hand Icon (Simplified) */}
              <div className="hidden sm:block text-emerald-600/50 ml-2 rotate-[135deg] translate-y-16 scale-x-[-1] drop-shadow-md">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path d="M18 13v-1a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v-2a2 2 0 0 0-4 0v5" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  <path d="M6 11v6a6 6 0 0 0 12 0v-4" strokeWidth="2" strokeLinecap="round" fill="none"/>
                </svg>
              </div>

            </div>

            <p className="mt-4 text-lg text-neutral-700 font-medium max-w-lg text-center font-sans">
              Find quick answers to all your common <span className="inline-block bg-emerald-900 text-white px-3 py-0.5 rounded -rotate-2 shadow-sm">Queries</span>
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
