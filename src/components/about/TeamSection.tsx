"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


interface Member {
  name: string;
  role: string;
  image: string;
}

const teamMembers: Member[] = [
  { name: "Sarah Ahmed", role: "Senior Tax Advisor", image: "/images/team-2.webp" },
  { name: "Omar Farooq", role: "SECP & Compliance Lead", image: "/images/team-5.webp" },
  { name: "Nadia Rahman", role: "Trademark & Intellectual Property Counsel", image: "/images/team-6.webp" },
  { name: "Hassan Malik", role: "Senior Tax Consultant", image: "/images/team-7.webp" },
  { name: "Muhammad Usama", role: "Managing Partner & Director", image: "/images/team-3.webp" },
  { name: "David Chen", role: "Company Secretary", image: "/images/team-1.webp" },
  { name: "Hamza Khan", role: "Intellectual Property Specialist", image: "/images/team-4.webp" },
];

// Repeat list 3 times to support infinite scroll loop seamlessly
const extendedTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

interface TeamCardProps {
  member: Member;
  idx: number;
  scrollX: MotionValue<number>;
  containerWidth: number;
}

const TeamCard = ({ member, idx, scrollX, containerWidth }: TeamCardProps) => {
  const isMobile = containerWidth < 768;
  const cardWidth = isMobile ? 180 : 250;
  const gap = isMobile ? 12 : 20;

  // Position of card center relative to container start (no start padding needed for loop)
  const cardCenter = idx * (cardWidth + gap) + cardWidth / 2;

  // scrollX value when this card is exactly centered in the viewport
  const centerX = cardCenter - containerWidth / 2;

  // Distance over which the interpolation occurs
  const rangeWidth = containerWidth > 0 ? containerWidth * 0.55 : 300;

  // Transform mapping matching user visual:
  // Center: small/straight (scale 0.82, rotate 0, y 0)
  // Edges: large/tilted (scale 1.08, rotate +/- 14deg, y 25px - curves downward)
  const scale = useTransform(
    scrollX,
    [centerX - rangeWidth, centerX, centerX + rangeWidth],
    [1.08, 0.82, 1.08]
  );

  const rotate = useTransform(
    scrollX,
    [centerX - rangeWidth, centerX, centerX + rangeWidth],
    [14, 0, -14]
  );

  const translateY = useTransform(
    scrollX,
    [centerX - rangeWidth, centerX, centerX + rangeWidth],
    [25, 0, 25]
  );

  return (
    <motion.div
      style={{
        width: cardWidth,
        scale,
        rotate,
        y: translateY,
      }}
      className="relative aspect-[3/4] cursor-pointer group flex-shrink-0 origin-center rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#070142] border-2 border-[#070142] shadow-xl hover:shadow-[0_20px_40px_rgba(6,78,59,0.4)] hover:border-[#070142] transition-all duration-300 select-none"
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 180px, 250px"
        className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
        priority={idx >= teamMembers.length && idx < teamMembers.length * 2}
      />
      {/* Elegant overlay always visible, giving it the green UI brand color at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070142]/90 via-[#070142]/45 to-transparent flex flex-col justify-end p-4 md:p-6 text-white z-10">
        <div className="font-display font-bold text-[15px] md:text-xl tracking-tight transition-transform duration-500 ease-out flex items-center flex-wrap gap-x-1 mb-1">
          {member.name.split(" ").map((word, i, arr) => {
              if (i === arr.length - 1) {
                return (
                  <span key={i} className="inline-block bg-[#f2cf07] text-[#070142] px-1.5 md:px-2 py-0.5 rounded -rotate-2 shadow-sm italic whitespace-nowrap">
                    {word}
                  </span>
                );
              }
            return <span key={i} className="whitespace-nowrap">{word}</span>;
          })}
        </div>
        <span className="text-[9px] md:text-[11px] text-white/70 font-semibold tracking-wider uppercase mt-1 transition-transform duration-500 ease-out">
          {member.role}
        </span>
      </div>
    </motion.div>
  );
};

export default function TeamSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollX } = useScroll({ container: containerRef });

  const [containerWidth, setContainerWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  // Mouse drag-to-scroll state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    // Initial measure
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });

    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMounted]);

  const isMobile = containerWidth < 768;
  const cardWidth = isMobile ? 180 : 250;
  const gap = isMobile ? 12 : 20;
  const singleWidth = teamMembers.length * (cardWidth + gap);

  // Snapping scroll listener for seamless infinite loop
  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const currentScroll = container.scrollLeft;

    if (currentScroll < singleWidth * 0.5) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = currentScroll + singleWidth;
      // Adjust drag reference to prevent mouse jump
      if (isDown.current) {
        scrollLeft.current += singleWidth;
      }
    } else if (currentScroll > singleWidth * 1.5) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = currentScroll - singleWidth;
      // Adjust drag reference to prevent mouse jump
      if (isDown.current) {
        scrollLeft.current -= singleWidth;
      }
    }
  };

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    containerRef.current.style.scrollBehavior = "auto";
    isDown.current = true;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    isDown.current = false;
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier

    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }

    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Center scroll helper on mount or layout to start in middle set
  useEffect(() => {
    if (isMounted && containerRef.current && containerWidth > 0) {
      // Center the middle set of cards in the viewport
      containerRef.current.style.scrollBehavior = "auto";
      containerRef.current.scrollLeft = singleWidth;
    }
  }, [isMounted, containerWidth, cardWidth, gap, singleWidth]);

  return (
    <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 bg-[#f5f0e8] overflow-hidden select-none">
      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-4 md:mb-6 max-w-2xl mx-auto px-6">
          <Badge
            dotColor="bg-[#f2cf07]"
            textColor="text-white"
            className="border-transparent bg-[#070142] mb-4 inline-flex"
          >
            Meet the People Behind MBS
          </Badge>
          <AnimatedHeading as="h2" className="font-display text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.2]">
            Our Super Squad of{" "}
            <span className="bg-[#070142] text-white px-3 py-0.5 inline-block -rotate-2">
              Leaders
            </span>
          </AnimatedHeading>
        </div>
      </div>

      {/* Edge-to-Edge Scrollable Team Slider (Infinite Loop) */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`w-full overflow-x-auto scrollbar-none flex items-center gap-3 md:gap-5 py-8 md:py-12 relative z-20 ${isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
      >
        {/* Team Cards (Repeated for loop) */}
        {isMounted && containerWidth > 0 ? (
          extendedTeamMembers.map((member, idx) => (
            <TeamCard
              key={idx}
              member={member}
              idx={idx}
              scrollX={scrollX}
              containerWidth={containerWidth}
            />
          ))
        ) : (
          // Static fallback/SSR loader layout
          teamMembers.map((member, idx) => (
            <div
              key={idx}
              style={{ width: cardWidth }}
              className="relative aspect-[3/4] flex-shrink-0 rounded-[2rem] overflow-hidden bg-[#070142] border-2 border-[#070142] shadow-xl"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 200px, 250px"
                className="object-cover"
              />
            </div>
          ))
        )}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto mt-6">
        {/* Bottom Action Link */}
        <div className="flex justify-center px-6 relative z-30">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#070142] bg-[#f2cf07] px-10 py-4 text-[0.95rem] font-bold text-[#070142] transition-all hover:bg-[#070142] hover:text-white hover:border-[#070142] hover:shadow-lg shadow-md uppercase tracking-wider"
          >
            Join Our Team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
