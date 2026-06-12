"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((item, index) => (
        <div
          key={item.question}
          className={`overflow-hidden rounded-xl border bg-surface transition-colors ${
            openIndex === index ? "border-primary/30 shadow-sm" : "border-border"
          }`}
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-primary-light/30"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 font-medium text-text">{item.question}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-4 text-sm leading-relaxed text-muted">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
