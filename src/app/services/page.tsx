import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ServicesGrid from "@/components/services/ServicesGrid";

export const metadata: Metadata = {
  title: "Our Services & Solutions",
  description:
    "Explore our tax filing, company registration, trademark protection, and corporate compliance services designed for startups and businesses.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef] relative overflow-hidden font-sans">

      {/* Small Hero Section */}
      <section className="relative w-full h-[45vh] min-h-[380px] max-h-[500px] bg-[#070142] flex flex-col items-center justify-center pt-24 pb-8 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.1]">
          Our Services & <span className="inline-block bg-[#f2cf07] text-[#070142] px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Solutions</span>
        </AnimatedHeading>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-medium">
          Reliable corporate compliance and tax management solutions designed to streamline your business.
        </p>
      </section>

      {/* Services Grid Section */}
      <section className="relative bg-white border-b border-neutral-200">
        {/* Ambient Blue Glowing Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">

          {/* Centered Heading */}
          <div className="text-center mb-20">
            <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] text-neutral-900 tracking-tight">
              See Our all <span className="inline-block bg-[#070142] text-white px-3 py-1 rounded rotate-2 shadow-sm font-bold mx-1">Services</span>
            </AnimatedHeading>
          </div>

          <ServicesGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#f5f4ef] relative pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

            {/* Left Content */}
            <div className="max-w-xl text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start">
              <div className="mb-6">
                <Badge dotColor="bg-[#070142]" textColor="text-[#070142]/90" className="border-transparent bg-[#f2cf07] inline-flex shadow-sm">
                  Elevate Your Impact With Us
                </Badge>
              </div>

              <AnimatedHeading as="h2" className="font-display text-3xl sm:text-4xl lg:text-[3.5rem] font-medium text-neutral-900 leading-[1.1] tracking-tight mb-6 sm:mb-8">
                Empowering Your <span className="inline-block bg-[#070142] text-white px-3 py-1 rounded -rotate-2 shadow-sm italic mx-1">Success</span> with Dedicated Expertise
              </AnimatedHeading>

              <p className="text-neutral-600 mb-8 sm:mb-10 leading-relaxed text-[15px] sm:text-[16px] font-medium max-w-lg">
                Partner with MBS to secure your business growth. Let's work together to handle your tax filing, company registration, and trademark protection so you can focus on building your brand.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#070142] bg-[#f2cf07] px-8 py-3.5 sm:py-4 text-[0.95rem] font-semibold text-[#070142] transition-all hover:bg-[#070142] hover:text-white hover:border-[#f2cf07] shadow-md"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="font-bold text-neutral-600 hover:text-[#070142] transition-colors border-b-2 border-transparent hover:border-[#070142] pb-1"
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
                    <polygon fill="#070142" points="50,0 55,5 63,3 67,9 75,9 77,16 85,18 85,25 92,29 90,36 96,42 92,48 96,55 90,60 92,68 85,71 85,78 77,80 75,88 67,87 63,94 55,91 50,97 45,91 37,94 33,87 25,88 23,80 15,78 15,71 8,68 10,60 4,55 8,48 4,42 10,36 8,29 15,25 15,18 23,16 25,9 33,9 37,3 45,5" />
                    <text className="text-[8.5px] font-bold fill-white uppercase tracking-[0.12em]">
                      <textPath href="#circlePath" startOffset="0%">
                        • EXPERT ADVISORY • TAX • COMPLIANCE •
                      </textPath>
                    </text>
                  </svg>
                  {/* Inner Yellow Circle */}
                  <div className="relative z-10 w-11 h-11 bg-[#f2cf07] rounded-full flex items-center justify-center text-[#070142] shadow-inner">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Yellow Sparkle */}
              <div className="absolute bottom-[-20px] right-[-20px] z-20 text-[#f2cf07] animate-pulse">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>

              {/* Images Grid */}
              <div className="grid grid-cols-[1fr_0.8fr] gap-3 h-full relative z-10">
                {/* Left tall image */}
                <div className="relative h-full w-full rounded-l-[2.5rem] rounded-tr-[1rem] rounded-br-sm overflow-hidden bg-neutral-200 shadow-md">
                  <Image src="/images/corporate_meeting.png" alt="Business Meeting" fill sizes="(max-width: 1024px) 100vw, 400px" className="object-cover object-center transition-all duration-700" />
                </div>
                {/* Right stacked images */}
                <div className="grid grid-rows-2 gap-3 h-full">
                  <div className="relative h-full w-full rounded-tr-[2.5rem] rounded-tl-[1rem] rounded-b-sm overflow-hidden bg-neutral-200 shadow-md">
                    <Image src="/images/business_consulting.png" alt="Business Consulting" fill sizes="(max-width: 1024px) 50vw, 250px" className="object-cover transition-all duration-700" />
                  </div>
                  <div className="relative h-full w-full rounded-br-[2.5rem] rounded-tl-sm rounded-tr-[1rem] overflow-hidden bg-neutral-200 shadow-md">
                    <Image src="/images/corporate_compliance.png" alt="Corporate Compliance" fill sizes="(max-width: 1024px) 50vw, 250px" className="object-cover transition-all duration-700" />
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
