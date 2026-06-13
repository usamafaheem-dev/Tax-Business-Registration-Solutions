"use client";

import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const features = [
  { id: "01", title: "Trusted Advisory" },
  { id: "02", title: "Transparent Filings" },
  { id: "03", title: "Experienced Consultants" },
  { id: "04", title: "Compliance Support" },
  { id: "05", title: "Business Success" },
];

function CardBracket({ id }: { id: string }) {
  // Vibrant yellow styling for dark brand background
  const strokeColor = "#f2cf07";
  const circleColor = "#f2cf07";

  if (id === "01" || id === "04") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-white/50"
        viewBox="0 0 260 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 22 10 H 6 V 50 H 245"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="drop-shadow-[0_0_2px_rgba(242,207,7,0.4)]"
        />
        <circle cx="245" cy="50" r="3" fill={circleColor} />
        <circle cx="245" cy="50" r="6" fill="none" stroke={circleColor} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  if (id === "02") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-white/50"
        viewBox="0 0 260 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 22 10 H 6 V 50 H 123"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="drop-shadow-[0_0_2px_rgba(242,207,7,0.4)]"
        />
        <path
          d="M 238 10 H 254 V 50 H 137"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="drop-shadow-[0_0_2px_rgba(242,207,7,0.4)]"
        />
        <circle cx="130" cy="50" r="3" fill={circleColor} />
        <circle cx="130" cy="50" r="6" fill="none" stroke={circleColor} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  if (id === "03" || id === "05") {
    return (
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none text-white/50"
        viewBox="0 0 260 60"
        preserveAspectRatio="none"
      >
        <path
          d="M 238 10 H 254 V 50 H 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          className="drop-shadow-[0_0_2px_rgba(242,207,7,0.4)]"
        />
        <circle cx="15" cy="50" r="3" fill={circleColor} />
        <circle cx="15" cy="50" r="6" fill="none" stroke={circleColor} strokeWidth="1" opacity="0.4" />
      </svg>
    );
  }

  return null;
}

function HighlightedTitle({ title }: { title: string }) {
  const words = title.split(" ");
  if (words.length <= 1) return <span className="text-white text-base md:text-[15px] font-bold tracking-wide">{title}</span>;

  const mainPart = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  const rotation = title.length % 2 === 0 ? "rotate-1" : "-rotate-1";

  return (
    <span className="text-white text-base md:text-[15px] font-bold tracking-wide leading-tight select-none">
      {mainPart}{" "}
      <span className={`inline-block bg-[#f2cf07] text-[#070142] px-2 py-0.5 rounded font-extrabold text-[0.95em] ${rotation} shadow-sm transition-transform duration-300 hover:scale-105`}>
        {lastWord}
      </span>
    </span>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#070142] pt-8 pb-12 md:pt-12 md:pb-20 border-t border-[#070142]/50">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>

      {/* Glowing center gradients behind the scene */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#070142]/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#070142]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
        <FadeIn>
          <div className="mb-10 text-center lg:mb-12">
            <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-[#070142] bg-[#f2cf07]/90 backdrop-blur-md mb-4 inline-flex">
              Why Choose Us
            </Badge>
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white mb-6">
              One Mission <span className="bg-[#f2cf07] text-[#070142] px-3 py-1 inline-block -rotate-2 mx-1 shadow-sm transition-transform hover:scale-105">5 Core Pillars</span>
            </AnimatedHeading>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:hidden items-center gap-3">
          <div className="relative flex justify-center py-2">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#070142]/80/10 rounded-full blur-xl" />
              <svg viewBox="0 0 230 260" className="w-16 h-20 text-white/50">
                <defs>
                  <filter id="neon-glow-mob" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <ellipse cx="115" cy="190" rx="60" ry="16" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
                <ellipse cx="115" cy="190" rx="35" ry="9" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" />
                <path d="M 115 190 L 75 173 M 115 190 L 155 173 M 115 190 L 90 203 M 115 190 L 140 203" stroke="#ffffff" strokeWidth="0.75" strokeOpacity="0.3" />
                <path d="M 95 155 C 82 140, 79 125, 79 110 C 79 74, 95 54, 115 54 C 135 54, 151 74, 151 110 C 151 125, 148 140, 138 155 Z" fill="none" stroke="#f2cf07" strokeWidth="3" filter="url(#neon-glow-mob)" />
                <path d="M 95 155 H 135 M 97 165 H 133 M 99 175 H 131" stroke="#f2cf07" strokeWidth="2" fill="none" />
                <path d="M 107 155 L 109 120 C 109 110, 113 110, 115 115 C 117 110, 121 110, 121 120 L 123 155" fill="none" stroke="#f2cf07" strokeWidth="1.5" filter="url(#neon-glow-mob)" />
              </svg>
            </div>
          </div>

          <div className="w-full max-w-sm flex flex-col gap-3">
            {features.map((feature, idx) => (
              <FadeIn key={feature.id} delay={idx * 0.08}>
                <div className="relative w-full h-[60px] bg-[#070142]/20 backdrop-blur-sm border border-[#070142]/80/10 rounded-lg flex items-center px-5 overflow-hidden group hover:bg-[#070142]/40 transition-colors duration-300">
                  <CardBracket id={feature.id} />
                  <div className="relative z-10 flex items-center justify-between w-full">
                    <span className="font-display text-[10px] font-bold tracking-wider text-white/50 mr-4">
                      {feature.id}
                    </span>
                    <div className="flex-grow">
                      <HighlightedTitle title={feature.title} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center w-full h-[280px] overflow-hidden">
          <div className="absolute w-[1000px] h-[280px] scale-[0.85] xl:scale-100 origin-center flex-shrink-0 transition-all duration-500">
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 280">
                <defs>
                  <filter id="neon-line-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f2cf07" />
                    <stop offset="100%" stopColor="#dcb900" />
                  </linearGradient>
                </defs>
                <motion.path d="M 460 130 L 410 80 V 70 H 340" fill="none" stroke="url(#line-grad)" strokeWidth="2" filter="url(#neon-line-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }} />
                <motion.path d="M 500 100 V 60" fill="none" stroke="url(#line-grad)" strokeWidth="2" filter="url(#neon-line-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }} />
                <motion.path d="M 540 130 L 590 80 V 70 H 660" fill="none" stroke="url(#line-grad)" strokeWidth="2" filter="url(#neon-line-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }} />
                <motion.path d="M 460 150 L 410 200 V 210 H 340" fill="none" stroke="url(#line-grad)" strokeWidth="2" filter="url(#neon-line-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.25 }} />
                <motion.path d="M 540 150 L 590 200 V 210 H 660" fill="none" stroke="url(#line-grad)" strokeWidth="2" filter="url(#neon-line-glow)" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} />
              </svg>
            </div>

            <motion.div animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.55, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[500px] top-[140px] -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-[#070142]/80/20 rounded-full blur-[25px] pointer-events-none" />

            <div className="absolute left-[420px] top-[50px] w-[160px] h-[180px] flex items-center justify-center select-none">
              <svg viewBox="0 0 230 260" className="w-full h-full text-white/50">
                <defs>
                  <filter id="neon-bulb-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur1" />
                    <feGaussianBlur stdDeviation="12" result="blur2" />
                    <feMerge>
                      <feMergeNode in="blur2" />
                      <feMergeNode in="blur1" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <ellipse cx="115" cy="190" rx="90" ry="24" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
                <ellipse cx="115" cy="190" rx="60" ry="16" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.5" />
                <ellipse cx="115" cy="190" rx="30" ry="8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.7" />
                <path d="M 115 190 L 25 205 M 115 190 L 205 205 M 115 190 L 50 170 M 115 190 L 180 170 M 115 190 L 75 225 M 115 190 L 155 225 M 115 190 L 115 240 M 115 190 L 115 140" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.4" />
                <motion.path d="M 95 155 C 82 140, 79 125, 79 110 C 79 74, 95 54, 115 54 C 135 54, 151 74, 151 110 C 151 125, 148 140, 138 155 Z" fill="none" stroke="#f2cf07" strokeWidth="3.2" filter="url(#neon-bulb-glow)" animate={{ strokeWidth: [3, 4, 3], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
                <path d="M 95 155 H 135 M 97 165 H 133 M 99 175 H 131" stroke="#f2cf07" strokeWidth="2.5" fill="none" filter="url(#neon-bulb-glow)" />
                <path d="M 103 165 C 103 171, 127 171, 127 165" stroke="#f2cf07" strokeWidth="2.5" fill="none" />
                <motion.path d="M 107 155 L 109 120 C 109 110, 113 110, 115 115 C 117 110, 121 110, 121 120 L 123 155" fill="none" stroke="#ffffff" strokeWidth="2" filter="url(#neon-bulb-glow)" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                <circle cx="115" cy="112" r="2.2" fill="#fff" filter="url(#neon-bulb-glow)" />
              </svg>
            </div>

            <div className="absolute left-[80px] top-[40px] w-[260px] h-[60px] bg-[#070142]/10 backdrop-blur-[2px] rounded-lg group cursor-pointer hover:bg-[#070142]/25 transition-colors duration-300">
              <CardBracket id="01" />
              <div className="absolute left-4 top-2 text-[10px] font-bold tracking-widest text-white/50/50 select-none">01</div>
              <div className="absolute left-8 top-[24px] right-4 flex items-center justify-start">
                <HighlightedTitle title={features[0].title} />
              </div>
            </div>

            <div className="absolute left-[370px] top-[0px] w-[260px] h-[60px] bg-[#070142]/10 backdrop-blur-[2px] rounded-lg group cursor-pointer hover:bg-[#070142]/25 transition-colors duration-300">
              <CardBracket id="02" />
              <div className="absolute left-1/2 -translate-x-1/2 top-2 text-[10px] font-bold tracking-widest text-white/50/50 select-none">02</div>
              <div className="absolute left-4 top-[24px] right-4 flex items-center justify-center">
                <HighlightedTitle title={features[1].title} />
              </div>
            </div>

            <div className="absolute right-[80px] top-[40px] w-[260px] h-[60px] bg-[#070142]/10 backdrop-blur-[2px] rounded-lg group cursor-pointer hover:bg-[#070142]/25 transition-colors duration-300">
              <CardBracket id="03" />
              <div className="absolute right-4 top-2 text-[10px] font-bold tracking-widest text-white/50/50 select-none">03</div>
              <div className="absolute left-4 top-[24px] right-8 flex items-center justify-end">
                <HighlightedTitle title={features[2].title} />
              </div>
            </div>

            <div className="absolute left-[80px] top-[180px] w-[260px] h-[60px] bg-[#070142]/10 backdrop-blur-[2px] rounded-lg group cursor-pointer hover:bg-[#070142]/25 transition-colors duration-300">
              <CardBracket id="04" />
              <div className="absolute left-4 top-2 text-[10px] font-bold tracking-widest text-white/50/50 select-none">04</div>
              <div className="absolute left-8 top-[24px] right-4 flex items-center justify-start">
                <HighlightedTitle title={features[3].title} />
              </div>
            </div>

            <div className="absolute right-[80px] top-[180px] w-[260px] h-[60px] bg-[#070142]/10 backdrop-blur-[2px] rounded-lg group cursor-pointer hover:bg-[#070142]/25 transition-colors duration-300">
              <CardBracket id="05" />
              <div className="absolute right-4 top-2 text-[10px] font-bold tracking-widest text-white/50/50 select-none">05</div>
              <div className="absolute left-4 top-[24px] right-8 flex items-center justify-end">
                <HighlightedTitle title={features[4].title} />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
