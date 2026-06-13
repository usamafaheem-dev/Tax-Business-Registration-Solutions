"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  },
};

export default function CausesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#070142]/5/80 to-white pt-8 pb-12 md:pt-12 md:pb-20">
      {/* Soft Ambient Blue Glows */}
      <div className="absolute left-[-10%] top-[10%] w-[500px] h-[500px] bg-[#070142]/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[-10%] top-[50%] w-[500px] h-[500px] bg-[#070142]/30 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-[25%] top-[30%] w-[400px] h-[400px] bg-[#070142]/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Scattered Decorative Dots */}
      <div className="absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#f2cf07] opacity-60 z-0 pointer-events-none" />
      <div className="absolute right-[15%] top-[10%] h-3 w-3 rounded-full bg-[#070142] opacity-40 z-0 pointer-events-none" />
      <div className="absolute left-[20%] bottom-[15%] h-2 w-2 rounded-full bg-[#070142] opacity-50 z-0 pointer-events-none" />
      <div className="absolute right-[10%] bottom-[20%] h-3.5 w-3.5 rounded-full bg-[#f2cf07] opacity-70 z-0 pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10">

        <div className="mb-20 text-center flex flex-col items-center">
          <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-transparent bg-[#f2cf07] mb-6">
            Our Services
          </Badge>
          <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900 max-w-3xl">
            Ensure Your <span className="bg-[#070142] text-white px-3 py-1 inline-block -rotate-2 mx-1">Business</span> Stays Fully Compliant & Protected
          </AnimatedHeading>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:pb-12"
        >
          {services.slice(0, 9).map((service, index) => {
            const Icon = service.icon;

            // Determine card styles based on index
            let cardStyle = "";
            let iconContainerStyle = "";
            let iconStyle = "text-white";
            let titleStyle = "";
            let descStyle = "";

            // Push middle column cards down for a nicer effect
            const isMiddleColumn = index === 1 || index === 4 || index === 7;
            const translateClass = isMiddleColumn ? "lg:translate-y-8" : "";

            if (index < 3) {
              // Top Row: Yellow icons
              if (index === 1) {
                // Top Middle: Dark Blue card
                cardStyle = `bg-[#070142] text-white hover:scale-[1.03] hover:shadow-2xl ${translateClass}`;
                titleStyle = "text-white";
                descStyle = "text-white/80";
                iconContainerStyle = "bg-[#f2cf07]";
              } else {
                // Top Left & Right: Light Yellow cards
                cardStyle = `bg-[#fefce8] border-2 border-[#f2cf07] hover:scale-[1.03] hover:shadow-xl ${translateClass}`;
                titleStyle = "text-[#070142]";
                descStyle = "text-[#070142]/80";
                iconContainerStyle = "bg-[#070142]";
              }
            } else {
              // Bottom Rows: Yellow/Blue icons
              iconContainerStyle = "bg-[#f2cf07] text-[#070142]";
              iconStyle = "text-[#070142]";
              cardStyle = `bg-neutral-100 border border-neutral-200 hover:scale-[1.03] hover:shadow-2xl ${translateClass}`;
              titleStyle = "text-[#1a1a1a]";
              descStyle = "text-neutral-600";
            }

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`flex flex-col p-6 md:p-8 rounded-[1.5rem] transition-all duration-300 cursor-pointer ${cardStyle}`}
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full mb-6 ${iconContainerStyle}`}>
                  <Icon className={`h-6 w-6 ${iconStyle}`} />
                </div>

                <h3 className={`mb-3 font-display text-[1.25rem] font-bold leading-tight ${titleStyle}`}>
                  {service.title}
                </h3>

                <p className={`text-[0.9rem] leading-relaxed ${descStyle}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-16 md:mt-20 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-[#070142] bg-[#f2cf07] px-8 py-4 font-semibold text-[#070142] transition-all hover:bg-[#070142] hover:text-white hover:border-[#f2cf07] shadow-sm hover:shadow-md"
          >
            See All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
