"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { blogPosts } from "@/lib/data/blogs";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function BlogsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(4);

  const featuredPost = blogPosts[0];
  
  const tabs = ["All", "Education", "Community", "Empowerment", "Healthcare"];
  const allFilteredPosts = activeTab === "All" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === activeTab);

  const visiblePosts = allFilteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < allFilteredPosts.length;
  const hasLess = visibleCount > 4 && visibleCount >= allFilteredPosts.length;

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const handleViewLess = () => {
    setVisibleCount(4);
  };

  return (
    <div className="min-h-screen bg-[#f5f4ef] relative overflow-hidden">
      
      {/* Small Hero Section */}
      <section className="relative w-full h-[35vh] min-h-[300px] max-h-[400px] bg-emerald-900 flex flex-col items-center justify-center pt-16 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-emerald-100 leading-[1.1]">
          News, <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Stories</span> & Insights
        </AnimatedHeading>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50/90 max-w-2xl mx-auto">
          Stay updated with our latest impact stories, community initiatives, and field reports from our volunteers.
        </p>
      </section>

      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-emerald-500/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] top-[40%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        
        {/* Featured Section with Grey Background */}
        <section className="mb-16 md:mb-20 bg-neutral-200/50 rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden border border-neutral-200">
          <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-6 md:mb-8 inline-flex">
            Featured
          </Badge>
          
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="w-full lg:w-[50%] flex flex-col justify-center">
              <AnimatedHeading as="h1" className="font-display text-3xl sm:text-4xl md:text-[3.5rem] lg:text-[4.25rem] font-medium leading-[1.1] tracking-tight text-neutral-900">
                {featuredPost.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm font-bold mx-1">
                  {featuredPost.title.split(" ").slice(-1)[0]}
                </span>
              </AnimatedHeading>
              
              <div className="mt-6 md:mt-8 flex items-center gap-4 text-[0.85rem] md:text-[0.95rem] font-medium text-neutral-500">
                <span>{featuredPost.date}</span>
                <span className="text-neutral-400">•</span>
                <span>{featuredPost.category}</span>
              </div>
              
              <div className="mt-6 md:mt-8">
                <Link
                  href={`/blogs/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-transparent px-6 md:px-7 py-2.5 md:py-3 text-[13px] md:text-[0.95rem] font-semibold text-emerald-900 transition-all hover:bg-emerald-900 hover:text-white hover:border-white hover:shadow-lg shadow-sm"
                >
                  Read blog
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-[45%] h-[250px] sm:h-[350px] md:h-[450px] relative rounded-2xl md:rounded-[2rem] overflow-hidden bg-black shadow-lg">
              {featuredPost.image.endsWith('.mp4') ? (
                <video
                  src={featuredPost.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              ) : (
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="mb-10 sm:mb-14 border-b border-neutral-200">
          <div className="flex overflow-x-auto no-scrollbar items-center gap-6 sm:gap-8 pb-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setVisibleCount(4);
                }}
                className={`relative pb-3 sm:pb-4 text-[15px] sm:text-lg font-medium transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === tab ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-emerald-600"
                  />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Grid Section */}
        <section>
          <motion.div 
            layout
            className="grid gap-x-12 gap-y-12 sm:gap-y-16 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {visiblePosts.map((post) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={post.slug}
                  className="group flex flex-col-reverse sm:flex-row justify-between gap-5 sm:gap-8"
                >
                  <div className="w-full sm:w-[55%] flex flex-col justify-between py-1 sm:py-2">
                    <div>
                      <Link href={`/blogs/${post.slug}`}>
                        <AnimatedHeading as="h2" className="font-display text-xl sm:text-2xl font-medium leading-[1.1] tracking-tight text-neutral-900 transition-colors group-hover:text-emerald-700 md:text-[1.75rem]">
                          {post.title.split(" ").slice(0, -1).join(" ")}{" "}
                          <span className="inline-block bg-emerald-900 text-white px-2 py-0.5 rounded -rotate-2 shadow-sm font-medium mx-1 text-lg md:text-2xl transition-transform group-hover:rotate-1">
                            {post.title.split(" ").slice(-1)[0]}
                          </span>
                        </AnimatedHeading>
                      </Link>
                      
                      <div className="mt-3 sm:mt-5 flex items-center gap-3 text-[0.85rem] sm:text-[0.9rem] font-medium text-neutral-500">
                        <span>{post.date}</span>
                        <span className="text-neutral-400">•</span>
                        <span>{post.category}</span>
                      </div>
                    </div>
                    
                    <div className="mt-5 sm:mt-8">
                      <Link
                        href={`/blogs/${post.slug}`}
                        className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-transparent px-5 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-sm font-semibold text-emerald-900 transition-all hover:bg-emerald-900 hover:text-white hover:border-white hover:shadow-md shadow-sm"
                      >
                        Read blog
                      </Link>
                    </div>
                  </div>
                  
                  <div className="w-full sm:w-[40%] aspect-[4/3] sm:aspect-square relative rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden shadow-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-md">
                    <Link href={`/blogs/${post.slug}`}>
                      {post.image.endsWith('.mp4') ? (
                        <video
                          src={post.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      )}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          <div className="mt-16 flex justify-center">
            {hasMore ? (
              <button
                onClick={handleViewMore}
                className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-emerald-900 px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:bg-emerald-950 hover:border-emerald-950 hover:shadow-lg shadow-sm"
              >
                View More
              </button>
            ) : hasLess ? (
              <button
                onClick={handleViewLess}
                className="inline-flex items-center justify-center rounded-full border border-emerald-900 bg-emerald-900 px-8 py-3.5 text-[0.95rem] font-semibold text-white transition-all hover:bg-emerald-950 hover:border-emerald-950 hover:shadow-lg shadow-sm"
              >
                View Less
              </button>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}
