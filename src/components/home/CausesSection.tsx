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

const itemVariants = {
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/80 to-white pt-8 pb-12 md:pt-12 md:pb-20">
      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[10%] w-[500px] h-[500px] bg-emerald-500/[0.25] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-[-15%] top-[50%] w-[500px] h-[500px] bg-emerald-500/[0.25] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-[25%] top-[30%] w-[400px] h-[400px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-6">
            Our Services
          </Badge>
          <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900 max-w-3xl">
            Our Mission Is To Make Your <span className="bg-emerald-900 text-white px-3 py-1 inline-block -rotate-2 mx-1">Community</span> Better Through Support
          </AnimatedHeading>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Determine card styles based on index
            let cardStyle = "";
            let iconContainerStyle = "";
            let iconStyle = "";
            let titleStyle = "";
            let descStyle = "";

            if (index === 0 || index === 2) {
              // Top Left & Top Right: Dark cards
              cardStyle = "bg-[#1a1a1a] text-white hover:scale-[1.03] hover:shadow-2xl";
              iconContainerStyle = "bg-emerald-900";
              iconStyle = "text-white";
              titleStyle = "text-white";
              descStyle = "text-neutral-300";
            } else if (index === 1) {
              // Top Middle: Green card (Brand Dark Green)
              cardStyle = "bg-emerald-900 text-white lg:translate-y-8 hover:scale-[1.03] hover:shadow-2xl";
              iconContainerStyle = "bg-[#1a1a1a]";
              iconStyle = "text-white";
              titleStyle = "text-white";
              descStyle = "text-white/80";
            } else if (index === 4) {
              // Bottom Middle: Light grey card, shifted down
              cardStyle = "bg-neutral-100 border border-neutral-200 lg:translate-y-8 hover:scale-[1.03] hover:shadow-2xl";
              iconContainerStyle = "bg-[#1a1a1a]";
              iconStyle = "text-white";
              titleStyle = "text-[#1a1a1a]";
              descStyle = "text-neutral-600";
            } else {
              // Bottom Left & Right: Light grey cards
              cardStyle = "bg-neutral-100 border border-neutral-200 hover:scale-[1.03] hover:shadow-2xl";
              iconContainerStyle = "bg-[#1a1a1a]";
              iconStyle = "text-white";
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
            className="group inline-flex items-center gap-2 rounded-full border-2 border-emerald-900 bg-emerald-900 px-8 py-4 font-semibold text-white transition-all hover:bg-emerald-950 hover:border-emerald-950"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
