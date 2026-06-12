import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Target, Heart, Globe } from "lucide-react";
import { aboutContent } from "@/lib/data/about";
import TeamSection from "@/components/about/TeamSection";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our story, mission, vision, core values, and the team behind HopeBridge Foundation.",
};

const extendedTeam = [
  ...aboutContent.team,
  { name: "Sarah Ahmed", role: "Education Director", bio: "" },
  { name: "David Chen", role: "Volunteer Coordinator", bio: "" },
  { name: "Aisha Khan", role: "Women Empowerment Lead", bio: "" },
  { name: "Michael Osei", role: "Operations Manager", bio: "" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] relative overflow-hidden font-sans">
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        .animate-dash {
          animation: dash 40s linear infinite;
        }
        /* Linear keyframes for a perfect zigzag mountain path */
        @keyframes mountain-bob {
          0% { transform: translateY(0); }
          25% { transform: translateY(-80px); }
          50% { transform: translateY(0); }
          75% { transform: translateY(80px); }
          100% { transform: translateY(0); }
        }
        /* Float animations for polaroids */
        @keyframes float-1 { 0%, 100% { transform: translateY(0) rotate(-6deg); } 50% { transform: translateY(-15px) rotate(-4deg); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0) rotate(3deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(0) rotate(-2deg); } 50% { transform: translateY(-10px) rotate(-1deg); } }
        @keyframes float-4 { 0%, 100% { transform: translateY(0) rotate(5deg); } 50% { transform: translateY(-18px) rotate(7deg); } }
        @keyframes float-5 { 0%, 100% { transform: translateY(0) rotate(-4deg); } 50% { transform: translateY(-22px) rotate(-2deg); } }
      `}</style>

      {/* Small Hero Section */}
      <section className="relative w-full h-[35vh] min-h-[300px] max-h-[400px] bg-emerald-900 flex flex-col items-center justify-center pt-16 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-emerald-100 leading-[1.1]">
          About <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Us</span>
        </AnimatedHeading>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50/90 max-w-2xl mx-auto">
          Discover the passionate people and core principles driving our mission forward.
        </p>
      </section>

      {/* About Us Detail Section */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 bg-white border-b border-neutral-200 overflow-hidden">
        {/* Prominent Ambient Brand Green Glows */}
        <div className="absolute left-[-10%] top-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-500/20 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-lime-500/15 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-24 items-center">
            
            {/* Left Content - Image Collage */}
            <div className="relative h-[350px] sm:h-[450px] w-full hidden md:block">
              {/* Dotted Arrow Decorative Element (Animated) */}
              <div className="absolute bottom-[0%] left-[-15%] z-20 opacity-60">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none" stroke="#10b981" strokeWidth="2.5" strokeDasharray="8 8" className="animate-dash">
                  <path d="M 10 100 Q 50 150 120 120 T 180 140" fill="transparent"/>
                  <polygon points="180,140 170,130 165,145" fill="none" stroke="#10b981" strokeWidth="2.5"/>
                </svg>
              </div>

              {/* Dotted Arc Decorative Element (Animated) */}
              <div className="absolute top-[60%] right-[5%] z-20 opacity-60">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" stroke="#047857" strokeWidth="2.5" strokeDasharray="8 8" className="animate-dash">
                  <path d="M 50 10 Q 150 50 100 140" fill="transparent"/>
                </svg>
              </div>

              {/* Tilted Left Image */}
              <div className="absolute left-[5%] top-[15%] w-[55%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl -rotate-6 z-10 bg-neutral-200">
                <Image src="/images/about-community.png" alt="Our Community" fill className="object-cover" />
              </div>

              {/* Right Floating Image */}
              <div className="absolute right-[10%] top-[5%] w-[45%] h-[50%] rounded-[2rem] overflow-hidden shadow-xl z-20 border-4 border-white bg-neutral-200">
                <Image src="/images/about-education.jpg" alt="Online Learning" fill className="object-cover" />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-[5%] left-[50%] z-30 transform -translate-x-1/2 w-max max-w-[90%]">
                <div className="bg-emerald-900 text-white px-6 py-4 md:px-8 md:py-5 rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 relative overflow-hidden border-2 border-neutral-900">
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-700 rounded-tl-lg" style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }} />
                  <div className="absolute bottom-[-2px] right-[-2px] w-6 h-6 bg-white rounded-tl-lg" style={{ clipPath: "polygon(0 0, 0% 100%, 100% 0%)" }} />
                  
                  <span className="font-display text-3xl md:text-4xl font-extrabold tracking-tighter text-[#ccff00]">10K+</span>
                  <div className="flex flex-col text-[11px] md:text-sm font-semibold leading-tight tracking-wider uppercase opacity-90">
                    <span>Lives</span>
                    <span>Impacted</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text & Features */}
            <div className="max-w-xl mx-auto lg:mx-0 w-full">
              <div className="mb-6 text-center lg:text-left">
                <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-4 inline-flex uppercase tracking-widest text-[0.8rem] font-bold shadow-sm">
                  Get To Know Us
                </Badge>
                <AnimatedHeading as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 leading-[1.15] tracking-tight">
                  Driving real change in the <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm italic mx-1">Community</span> from anywhere
                </AnimatedHeading>
              </div>
              
              <p className="text-neutral-500 mb-10 leading-relaxed text-[15px] font-medium text-center lg:text-left">
                {aboutContent.vision} We are dedicated to providing sustainable solutions for those in need, operating with transparency, compassion, and a commitment to positive impact.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 mb-12">
                {/* Our Story */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-neutral-800 text-[13px] sm:text-[15px]">Our Story</span>
                </div>
                {/* Mission */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-neutral-800 text-[13px] sm:text-[15px]">Mission</span>
                </div>
                {/* Vision */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-neutral-800 text-[13px] sm:text-[15px]">Vision</span>
                </div>
                {/* Core Values */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm border border-emerald-100">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-bold text-neutral-800 text-[13px] sm:text-[15px]">Core Values</span>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-[#1b3b30] px-8 py-3.5 text-[0.95rem] font-bold text-white transition-all hover:bg-[#122820] shadow-md uppercase tracking-wider"
                >
                  Discover More
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Photos Section */}
      <TeamSection />

    </div>
  );
}
