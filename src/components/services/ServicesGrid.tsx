"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";

export default function ServicesGrid() {
  const [visibleCount, setVisibleCount] = useState(9);
  const visibleServices = services.slice(0, visibleCount);

  const hasMore = visibleCount < services.length;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-24 max-w-[1100px] mx-auto">
        {visibleServices.map((service, i) => {
          const Icon = service.icon;
          // Extract first word for slanted badge
          const words = service.title.split(' ');
          const firstWord = words[0];
          const restOfTitle = words.slice(1).join(' ');

          // Middle column staggered down
          const isMiddle = i % 3 === 1;
          const dropClass = isMiddle ? "lg:translate-y-8" : "";

          return (
            <FadeIn key={service.id} delay={i * 0.1} className={dropClass}>
              <div className="bg-gradient-to-b from-[#070142]/15 to-white/90 backdrop-blur-md rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border border-[#070142]/25 group h-full flex flex-col cursor-default">

                {/* Icon Pill */}
                <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-[#070142]/20 text-[#070142] shadow-sm mb-4 md:mb-6 group-hover:bg-[#070142] group-hover:text-white transition-colors duration-300">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Title with Slanted First Word */}
                <h3 className="font-display text-lg md:text-xl font-bold text-neutral-900 mb-3 md:mb-4 leading-snug">
                  <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded -rotate-3 shadow-sm italic mr-1">
                    {firstWord}
                  </span>
                  {restOfTitle}
                </h3>

                {/* Description */}
                <p className="text-[13px] md:text-[14px] leading-relaxed text-neutral-600 font-medium">
                  {service.description}
                </p>

              </div>
            </FadeIn>
          );
        })}
      </div>

      {/* View More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={() => setVisibleCount(services.length)}
            className="inline-flex items-center justify-center rounded-full border border-[#070142] bg-[#f2cf07] px-8 py-3.5 text-[0.95rem] font-semibold text-[#070142] transition-all hover:bg-[#070142] hover:text-white hover:border-[#f2cf07] hover:shadow-lg shadow-sm"
          >
            Load More Services
          </button>
        </div>
      )}
    </>
  );
}
