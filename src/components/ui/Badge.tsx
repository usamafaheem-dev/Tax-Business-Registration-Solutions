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
  dotColor = "bg-emerald-500",
  textColor = "text-emerald-800"
}: BadgeProps) {
  return (
    <div className={cn("mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-white/80 px-4 py-1.5 shadow-sm", className)}>
      <span className={cn("h-2 w-2 shrink-0 rounded-full", dotColor)} />
      <span className={cn("text-sm font-medium tracking-wide", textColor)}>
        {children}
      </span>
    </div>
  );
}
