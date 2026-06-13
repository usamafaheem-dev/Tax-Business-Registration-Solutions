"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe2 } from "lucide-react";


const features = [
  {
    icon: ShieldCheck,
    title: "Transparent & Trusted Advisory",
    description: "Every filing is carefully documented. We ensure 100% compliance transparency in all our consultations.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    title: "Expert Network of Advisors",
    description: "We collaborate with legal, financial, and corporate experts to provide the best solutions.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Globe2,
    title: "National Business Growth",
    description: "Be part of a growing ecosystem of startup and corporate leaders scaling their brands.",
    color: "text-[#070142]",
    bgColor: "bg-[#070142]/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Blurry Blue Orbs in Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#070142]/40 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Scattered Decorative Dots */}
      <div className="absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#f2cf07] opacity-60 z-0 pointer-events-none" />
      <div className="absolute right-[15%] top-[10%] h-3 w-3 rounded-full bg-[#070142] opacity-40 z-0 pointer-events-none" />
      <div className="absolute left-[20%] bottom-[15%] h-2 w-2 rounded-full bg-[#070142] opacity-50 z-0 pointer-events-none" />
      <div className="absolute right-[10%] bottom-[20%] h-3.5 w-3.5 rounded-full bg-[#f2cf07] opacity-70 z-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-all hover:border-transparent hover:bg-white hover:shadow-2xl hover:shadow-neutral-200/50"
              >
                <div className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor} transition-transform duration-500 group-hover:scale-110 group-hover:rounded-full`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="mb-3 font-display text-xl font-bold text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                
                {/* Decorative background element on hover */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full ${feature.bgColor} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-50`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
