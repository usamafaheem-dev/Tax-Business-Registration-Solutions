"use client";

import { Quote, Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { testimonials } from "@/lib/data/testimonials";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


const extendedTestimonials = testimonials.map((t, index) => ({
  ...t,
  id: index,
  rating: 5,
  avatar: ["/images/about-education.jpg", "/images/about-community.png", "/images/about-volunteers.jpg"][index % 3],
}));

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Auto rotate testimonials
  useEffect(() => {
    if (extendedTestimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % extendedTestimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#f5f4ef] pt-8 pb-12 md:pt-12 md:pb-20">
      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-emerald-500/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] bottom-[15%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <div className="space-y-6 flex flex-col items-center lg:items-start w-full">
              <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-2">
                Testimonials
              </Badge>

              <AnimatedHeading as="h2" className="font-display text-4xl md:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-neutral-900">
                Stories from Our <span className="bg-emerald-900 text-white px-3 py-1 inline-block -rotate-2 mx-1">Community</span>
              </AnimatedHeading>

              <p className="text-lg leading-relaxed text-neutral-600 max-w-lg">
                Don't just take our word for it. See what our volunteers and beneficiaries have to say about our impact.
              </p>

              <div className="flex items-center gap-3 pt-4">
                {extendedTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "w-10 bg-emerald-900" : "w-3 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full min-h-[380px] md:min-h-[400px] lg:min-h-[420px]">
            {extendedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 50,
                  scale: activeIndex === index ? 1 : 0.95,
                  pointerEvents: activeIndex === index ? "auto" : "none",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-emerald-900 shadow-2xl shadow-emerald-900/20 rounded-[2rem] p-5 sm:p-6 md:p-10 h-auto min-h-full flex flex-col relative overflow-hidden group">
                  {/* Watermark Quote Icon */}
                  <Quote className="absolute -bottom-6 -right-6 h-32 w-32 text-emerald-800/50 rotate-12 transition-transform duration-700 group-hover:-rotate-12 group-hover:scale-110" />
                  
                  <div className="relative z-10 mb-6 flex gap-1">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      ))}
                  </div>

                  <div className="relative z-10 mb-6 flex-1">
                    <p className="text-[14px] sm:text-[15px] md:text-[1.15rem] font-medium leading-relaxed text-white/95">
                      "{testimonial.quoteStart}
                      <span className="bg-white text-emerald-900 px-2 py-0.5 inline-block -rotate-2 mx-1 font-bold shadow-sm">
                        {testimonial.highlight}
                      </span>
                      {testimonial.quoteEnd}"
                    </p>
                  </div>

                  <div className="relative z-10 w-full h-px bg-emerald-800/80 mb-6" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-emerald-400 shadow-lg">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{testimonial.name}</h3>
                      <p className="text-sm font-medium text-emerald-400 mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-3xl bg-emerald-900/5 -z-10" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-emerald-900/5 -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
