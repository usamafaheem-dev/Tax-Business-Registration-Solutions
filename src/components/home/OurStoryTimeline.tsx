"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Heart,
  HeartPulse,
  Home,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { aboutContent, storyTimeline } from "@/lib/data/about";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  book: BookOpen,
  "heart-pulse": HeartPulse,
  users: Users,
  sparkles: Sparkles,
  home: Home,
  award: Award,
};

const TOTAL = storyTimeline.length;
const AUTO_MS = 4000;

export default function OurStoryTimeline() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const pausedRef = useRef(false);

  const changeSlide = useCallback((index: number, direction: 1 | -1) => {
    const next = ((index % TOTAL) + TOTAL) % TOTAL;
    setDir(direction);
    setActive(next);
  }, []);

  const nextSlide = useCallback(() => {
    setDir(1);
    setActive((p) => (p + 1) % TOTAL);
  }, []);

  const prevSlide = useCallback(() => {
    setDir(-1);
    setActive((p) => (p - 1 + TOTAL) % TOTAL);
  }, []);

  /* Auto-play — always runs, pauses only on image hover */
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setDir(1);
        setActive((p) => (p + 1) % TOTAL);
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, []);

  const current = storyTimeline[active];
  const Icon = iconMap[current.icon];

  return (
    <section className="relative overflow-hidden border-t border-[#070142]/10/60 bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#070142]/50/25 blur-3xl" />
        <div className="absolute right-0 top-20 h-48 w-48 rounded-full bg-[#070142]/30/20 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-[#070142]/80/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left */}
          <div>
            <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-[#070142]/20/70 bg-[#070142]/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#070142]/50 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#070142]/80" />
              </span>
              <span className="text-sm font-semibold text-[#070142]">Our Journey</span>
              <span className="h-3.5 w-px bg-[#070142]/30" />
              <span key={active} className="story-spotlight text-sm font-bold text-[#070142]">
                {current.date}
              </span>
            </div>

            <AnimatedHeading as="h2" className="font-display text-3xl font-extrabold text-[#242021] md:text-4xl">
              Our Story
            </AnimatedHeading>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-600">
              {aboutContent.story}
            </p>

            <div
              key={`card-${active}`}
              className={`story-spotlight mt-7 rounded-2xl border border-[#070142]/10/80 bg-gradient-to-br from-[#070142]/5/80 to-white p-5 ${
                dir === 1 ? "story-spotlight-next" : "story-spotlight-prev"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#070142] shadow-sm">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#070142]">
                    {current.date}
                  </span>
                  <h3 className="mt-0.5 font-display text-lg font-bold text-[#242021]">
                    {current.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2.5">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2cf07] text-[#070142] shadow-sm transition hover:bg-[#070142] hover:text-white active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2cf07] text-[#070142] shadow-sm transition hover:bg-[#070142] hover:text-white active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="ml-1 text-sm font-semibold text-[#070142]">
                {String(active + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Right — stacked slides (reliable crossfade) */}
          <div
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-neutral-200 shadow-lg lg:aspect-[5/6]">
              {storyTimeline.map((item, i) => (
                <div
                  key={item.date}
                  aria-hidden={i !== active}
                  className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                  style={{
                    opacity: i === active ? 1 : 0,
                    zIndex: i === active ? 2 : 1,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 540px"
                    priority={i < 2}
                  />
                </div>
              ))}

              <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div
                key={`cap-${active}`}
                className="story-spotlight pointer-events-none absolute bottom-0 left-0 right-0 z-[4] p-6"
              >
                <span className="inline-flex rounded-full bg-[#070142] px-3 py-1 text-xs font-bold text-white">
                  {current.date}
                </span>
                <p className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  {current.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Year pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {storyTimeline.map((item, i) => (
            <button
              key={item.date}
              type="button"
              onClick={() => changeSlide(i, i >= active ? 1 : -1)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                i === active
                  ? "bg-[#070142] text-white shadow-md shadow-emerald-200"
                  : "bg-[#070142]/5 text-[#070142] hover:bg-[#070142]/10"
              }`}
            >
              {item.date}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-5 h-1 max-w-md overflow-hidden rounded-full bg-[#070142]/10">
          <div
            className="h-full rounded-full bg-[#070142] transition-all duration-700 ease-out"
            style={{ width: `${((active + 1) / TOTAL) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
