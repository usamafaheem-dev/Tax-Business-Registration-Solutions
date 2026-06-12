import type { LucideIcon } from "lucide-react";


const iconAccents = ["icon-purple", "icon-blue", "icon-mint", "icon-yellow", "icon-orange"];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  index = 0,
}: ServiceCardProps) {
  const accent = iconAccents[index % iconAccents.length];

  return (
    <div className="card-base group p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:scale-105 ${accent}`}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
