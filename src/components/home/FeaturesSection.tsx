"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Globe2 } from "lucide-react";


const features = [
  {
    icon: ShieldCheck,
    title: "Transparent & Trusted Giving",
    description: "Every donation is tracked and reported. We ensure 100% transparency in all our projects.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Users,
    title: "Trusted Network of Partners",
    description: "We collaborate with local experts and international organizations for maximum impact.",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Globe2,
    title: "Global Movement",
    description: "Be part of a worldwide community dedicated to bringing hope and creating lasting change.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
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
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
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
