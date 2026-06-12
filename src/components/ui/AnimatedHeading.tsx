"use client";

import { motion } from "framer-motion";
import React from "react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Slower stagger so each word is seen clearly
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: "120%", opacity: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth snappy ease
    },
  },
};

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function AnimatedHeading({
  children,
  className = "",
  as: Component = "h2",
}: AnimatedHeadingProps) {
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        if (typeof child === "string") {
          const words = child.split(/(\s+)/);
          return words.map((word, i) => {
            if (word.trim() === "") {
              return <span key={`${index}-${i}`}>{word}</span>;
            }
            return (
              <span key={`${index}-${i}`} className="inline-flex overflow-hidden pb-2 -mb-2">
                <motion.span
                  variants={item}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            );
          });
        }
        return (
          <span key={index} className="inline-flex overflow-hidden pb-2 -mb-2">
            <motion.span variants={item} className="inline-block">
              {child}
            </motion.span>
          </span>
        );
      })}
    </MotionComponent>
  );
}
