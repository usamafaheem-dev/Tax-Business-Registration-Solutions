import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data/blogs";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const recentBlogs = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const categories = ["Education", "Community", "Healthcare", "Empowerment"];

  return (
    <article className="min-h-screen bg-[#f5f4ef] relative overflow-hidden">
      
      {/* Small Hero Section */}
      <section className="relative w-full h-[35vh] min-h-[300px] max-h-[400px] bg-emerald-900 flex flex-col items-center justify-center pt-16 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h2" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-emerald-100 leading-[1.1]">
          Exploring Our Latest <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Stories</span>
        </AnimatedHeading>
      </section>

      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-emerald-500/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] top-[40%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1300px] px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative z-10 pt-10 pb-16 md:pt-24 md:pb-32">
        
        {/* Main Content */}
        <div className="w-full lg:w-[65%]">
          <Link
            href="/blogs"
            className="mb-6 md:mb-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-neutral-500 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Link>

          <div className="mb-4 md:mb-6">
            <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 font-bold shadow-sm text-sm">
              {post.category}
            </span>
          </div>

          <AnimatedHeading as="h1" className="font-display text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4.25rem] font-medium leading-[1.15] tracking-tight text-neutral-900">
            {post.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-emerald-900 text-white px-3 py-1 inline-block -rotate-2 mx-1 shadow-sm">
              {post.title.split(" ").slice(-1)[0]}
            </span>
          </AnimatedHeading>

          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 md:gap-4 border-y border-neutral-200 py-3 md:py-5 text-[13px] sm:text-[14px] md:text-[0.95rem] font-medium text-neutral-500">
            <span className="whitespace-nowrap">{today}</span>
            <span className="text-neutral-400 hidden min-[370px]:inline">•</span>
            <span className="whitespace-nowrap">{post.category}</span>
            <span className="text-neutral-400 hidden min-[370px]:inline">•</span>
            <span className="whitespace-nowrap">{post.readTime}</span>
          </div>

          <div className="my-8 md:my-12 aspect-[16/9] w-full mx-auto overflow-hidden rounded-[1.5rem] md:rounded-3xl relative bg-black shadow-lg">
            {post.image.endsWith('.mp4') ? (
              <video
                src={post.image}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            )}
          </div>

          <div className="prose prose-lg max-w-none text-neutral-600 text-justify text-base md:text-lg">
            <p className="text-xl md:text-[1.35rem] leading-relaxed text-neutral-800 font-medium mb-6 md:mb-8 text-left">
              {post.excerpt}
            </p>
            <p className="mb-6">
              At HopeBridge Foundation, we believe that lasting change begins with
              informed action and <span className="inline-block bg-emerald-900 text-white px-1.5 py-0.5 rounded rotate-1 text-[0.9em] shadow-sm">community</span> participation. This article explores
              the themes central to our mission and shares practical insights from
              our field work.
            </p>
            <p className="mb-6">
              Education is the foundation of lasting community growth. Discover how access to <span className="inline-block bg-emerald-900 text-white px-1.5 py-0.5 rounded -rotate-2 text-[0.9em] shadow-sm">learning</span> transforms lives and neighborhoods. When neighbors come together with a shared purpose, remarkable change becomes possible.
            </p>
            <p className="mb-6">
              Whether you are a volunteer, donor, or community member, your
              involvement makes a real difference. We invite you to explore our
              programs, <span className="inline-block bg-emerald-900 text-white px-1.5 py-0.5 rounded rotate-2 text-[0.9em] shadow-sm">reach out</span> with questions, or join us in creating positive
              impact. By working hand in hand, we can build a future where everyone has the opportunity to thrive.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[35%] lg:pt-24 space-y-8 md:space-y-10">
          
          {/* Recent Blogs Widget */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-neutral-100">
            <h3 className="font-display text-2xl font-bold text-neutral-900 mb-6">Recent Articles</h3>
            <div className="flex flex-col gap-6">
              {recentBlogs.map((recent) => (
                <Link href={`/blogs/${recent.slug}`} key={recent.slug} className="group flex items-start gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                    {recent.image.endsWith('.mp4') ? (
                      <video src={recent.image} autoPlay loop muted playsInline preload="none" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <Image src={recent.image} alt={recent.title} fill sizes="96px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-medium leading-snug text-neutral-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {recent.title}
                    </h4>
                    <span className="text-sm text-neutral-500 mt-1 block">{recent.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Widget */}
          <div className="bg-emerald-900 rounded-[2rem] p-8 shadow-lg text-white">
            <h3 className="font-display text-2xl font-bold mb-6">Categories</h3>
            <ul className="flex flex-col gap-3">
              {categories.map((category) => (
                <li key={category}>
                  <Link href="/blogs" className="flex items-center justify-between py-2 border-b border-emerald-800/50 hover:text-emerald-300 transition-colors">
                    <span>{category}</span>
                    <span className="bg-emerald-800 text-xs px-2 py-1 rounded-full">Explore</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / CTA Widget */}
          <div className="bg-neutral-100 rounded-[2rem] p-8 border border-neutral-200">
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Never Miss an Update</h3>
            <p className="text-neutral-600 text-sm mb-6">Join our community newsletter for the latest stories and impact reports.</p>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-full border border-neutral-300 focus:outline-none focus:border-emerald-500 bg-white text-sm" />
              <button className="w-full bg-emerald-900 text-white font-semibold py-3 rounded-full hover:bg-emerald-950 transition-colors text-[0.95rem]">
                Subscribe
              </button>
            </div>
          </div>

        </aside>

      </div>
    </article>
  );
}
