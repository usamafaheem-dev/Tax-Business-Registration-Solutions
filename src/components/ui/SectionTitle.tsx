import AnimatedHeading from "@/components/ui/AnimatedHeading";
interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  accent?: "purple" | "blue" | "mint" | "yellow" | "orange";
}

const accentStyles = {
  purple: "bg-primary-light text-primary-dark",
  blue: "bg-blue-100 text-blue-700",
  mint: "bg-mint-light text-emerald-700",
  yellow: "bg-accent-light text-amber-700",
  orange: "bg-orange-light text-orange-700",
};

export default function SectionTitle({
  label,
  title,
  description,
  centered = true,
  accent = "blue",
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`mb-3 inline-block rounded-full px-4 py-1 text-sm font-medium ${accentStyles[accent]}`}
        >
          {label}
        </span>
      )}
      <AnimatedHeading as="h2" className="text-3xl font-bold tracking-tight text-text md:text-4xl">
        {title}
      </AnimatedHeading>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
