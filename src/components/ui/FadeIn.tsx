"use client";

import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function FadeIn({ children, className = "" }: FadeInProps) {
  return <div className={className}>{children}</div>;
}
