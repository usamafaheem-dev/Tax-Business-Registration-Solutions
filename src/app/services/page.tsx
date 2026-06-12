import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/lib/data/services";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export const metadata: Metadata = {
  title: "Our Programs & Services",
  description:
    "Explore our education, healthcare, women empowerment, youth development, and community support programs.",
};

export default function ServicesPage() {
  const visibleServices = services.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#f5f4ef] relative overflow-hidden font-sans">
      
      {/* Small Hero Section */}
      <section className="relative w-full h-[35vh] min-h-[300px] max-h-[400px] bg-emerald-900 flex flex-col items-center justify-center pt-16 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-emerald-100 leading-[1.1]">
          Programs & <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Services</span>
        </AnimatedHeading>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50/90 max-w-2xl mx-auto">
          Comprehensive programs designed to uplift communities and create lasting positive change.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="relative bg-white border-b border-neutral-200">
        {/* Soft Ambient Brand Green Glows */}
        <div className="absolute left-[-15%] top-[10%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute right-[-15%] top-[60%] w-[500px] h-[500px] bg-emerald-500/[0.12] rounded-full blur-[110px] pointer-events-none" />

        <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
          
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 tracking-tight">
              See Our all <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded rotate-2 shadow-sm font-bold mx-1">Services</span>
            </AnimatedHeading>
          </div>

          {/* 6-Card Staggered Grid */}
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
                  <div className="bg-gradient-to-b from-emerald-50/80 to-white rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-md border border-emerald-200/60 group h-full flex flex-col cursor-default">
                    
                    {/* Icon Pill */}
                    <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-900 text-white shadow-sm mb-4 md:mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    {/* Title with Slanted First Word */}
                    <h3 className="font-display text-lg md:text-xl font-bold text-neutral-900 mb-3 md:mb-4 leading-snug">
                      <span className="inline-block bg-emerald-900 text-white px-2 py-0.5 rounded -rotate-3 shadow-sm italic mr-1">
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
          <div className="flex justify-center mt-12">
            <button className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-emerald-900 px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:bg-emerald-950 hover:shadow-lg shadow-sm">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f4ef] relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            
            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              <div className="mb-6">
                <Badge dotColor="bg-[#ccff00]" textColor="text-emerald-100" className="border-transparent bg-emerald-900 inline-flex shadow-sm">
                  Elevate Your Impact With Us
                </Badge>
              </div>
              
              <AnimatedHeading as="h2" className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6 sm:mb-8">
                Empowering Your <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm italic mx-1">Success</span> with Dedicated Expertise
              </AnimatedHeading>
              
              <p className="text-neutral-600 mb-8 sm:mb-10 leading-relaxed text-[15px] sm:text-[16px] font-medium max-w-lg">
                Partner with HopeBridge to amplify your impact. Let's work together to bring education, healthcare, and empowerment to those who need it most. Reach out to discover how our services can support your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-900 px-8 py-3.5 sm:py-4 text-[0.95rem] font-semibold text-white transition-all hover:bg-emerald-950 shadow-md"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="font-bold text-neutral-600 hover:text-emerald-800 transition-colors border-b-2 border-transparent hover:border-emerald-800 pb-1"
                >
                  Learn About Our Mission
                </Link>
              </div>
            </div>

            {/* Right Content - Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full block mt-10 lg:mt-0 lg:pl-10">
              
              {/* Spinning Badge */}
              <div className="absolute top-[60%] left-[-5%] z-30">
                <div className="relative w-[130px] h-[130px] flex items-center justify-center drop-shadow-xl">
                  {/* Jagged Background SVG */}
                  <svg className="absolute w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
                    <defs>
                      <path id="circlePath" d="M 50, 50 m -28, 0 a 28,28 0 1,1 56,0 a 28,28 0 1,1 -56,0" />
                    </defs>
                    <polygon fill="#064e3b" points="50,0 55,5 63,3 67,9 75,9 77,16 85,18 85,25 92,29 90,36 96,42 92,48 96,55 90,60 92,68 85,71 85,78 77,80 75,88 67,87 63,94 55,91 50,97 45,91 37,94 33,87 25,88 23,80 15,78 15,71 8,68 10,60 4,55 8,48 4,42 10,36 8,29 15,25 15,18 23,16 25,9 33,9 37,3 45,5" />
                    <text className="text-[9px] font-bold fill-white uppercase tracking-[0.15em]">
                      <textPath href="#circlePath" startOffset="0%">
                        • PARTNER WITH US • VOLUNTEER •
                      </textPath>
                    </text>
                  </svg>
                  {/* Inner Lime Circle */}
                  <div className="relative z-10 w-11 h-11 bg-[#ccff00] rounded-full flex items-center justify-center text-emerald-900 shadow-inner">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Lime Sparkle */}
              <div className="absolute bottom-[-20px] right-[-20px] z-20 text-[#ccff00] animate-pulse">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-[1fr_0.8fr] gap-3 h-full relative z-10">
                {/* Left tall image */}
                <div className="relative h-full w-full rounded-l-[2.5rem] rounded-tr-[1rem] rounded-br-sm overflow-hidden bg-neutral-200 shadow-md">
                  <Image src="https://i.pinimg.com/1200x/55/79/b9/5579b9f80adb472d1e75df503ca23db5.jpg" alt="Volunteers" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover object-center transition-all duration-700" />
                </div>
                {/* Right stacked images */}
                <div className="grid grid-rows-2 gap-3 h-full">
                  <div className="relative h-full w-full rounded-tr-[2.5rem] rounded-tl-[1rem] rounded-b-sm overflow-hidden bg-neutral-200 shadow-md">
                    <Image src="https://i.pinimg.com/736x/aa/7b/9d/aa7b9dc8812c7295dfa0f3e62a0ddd1a.jpg" alt="Community" fill sizes="(max-width: 1024px) 50vw, 250px" className="object-cover transition-all duration-700" />
                  </div>
                  <div className="relative h-full w-full rounded-br-[2.5rem] rounded-tl-sm rounded-tr-[1rem] overflow-hidden bg-neutral-200 shadow-md">
                    <Image src="https://i.pinimg.com/1200x/68/86/cf/6886cff4fec683db4a4637df181e75e7.jpg" alt="Education" fill sizes="(max-width: 1024px) 50vw, 250px" className="object-cover transition-all duration-700" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
