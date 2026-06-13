import AnimatedHeading from "@/components/ui/AnimatedHeading";
interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="page-hero-gradient relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-hero-purple/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-hero-orange/25 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-hero-mint/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700 backdrop-blur-sm">
          MBS
        </span>
        <AnimatedHeading as="h1" className="text-4xl font-bold tracking-tight text-text md:text-5xl">
          {title}
        </AnimatedHeading>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{description}</p>
        )}
      </div>
    </section>
  );
}
