import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  dotColor?: string;
  textColor?: string;
}

export default function Badge({ 
  children, 
  className,
  dotColor,
  textColor = "text-[#070142]"
}: BadgeProps) {
  return (
    <div className={cn("mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#070142]/20/80 bg-white/80 px-4 py-1.5 shadow-sm", className)}>
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-60", dotColor || "bg-[#070142]")}></span>
        <span className={cn("relative inline-flex rounded-full h-2.5 w-2.5", dotColor || "bg-[#070142]")}></span>
      </span>
      <span className={cn("text-sm font-medium tracking-wide", textColor)}>
        {children}
      </span>
    </div>
  );
}
