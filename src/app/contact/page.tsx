import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import ContactPageForm from "./ContactPageForm";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { siteConfig } from "@/lib/data/site";
import { contactProcess } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with HopeBridge Foundation. Reach us by phone, email, WhatsApp, or our contact form.",
};

const contactDetails = [
  { icon: MapPin, label: "Address", value: siteConfig.address, href: undefined },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: siteConfig.whatsapp,
    href: `https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f5f4ef] relative overflow-hidden">
      
      {/* Small Hero Section */}
      <section className="relative w-full h-[35vh] min-h-[300px] max-h-[400px] bg-emerald-900 flex flex-col items-center justify-center pt-16 px-6 text-center shadow-md z-10">
        <AnimatedHeading as="h1" className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-emerald-100 leading-[1.1]">
          Contact <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-2 font-bold mx-1 shadow-md">Us</span>
        </AnimatedHeading>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-emerald-50/90 max-w-2xl mx-auto">
          We are here to help. Reach out and let us know how we can support you.
        </p>
      </section>

      {/* Soft Ambient Brand Green Glows */}
      <div className="absolute left-[-15%] top-[15%] w-[500px] h-[500px] bg-emerald-500/[0.20] rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute right-[-15%] top-[40%] w-[500px] h-[500px] bg-emerald-500/[0.15] rounded-full blur-[110px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 pt-10 pb-8 md:pt-16 md:pb-16 relative z-10">
        
        {/* Contact Details Section */}
        <section className="mb-6">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-4 inline-flex">
              Contact Info
            </Badge>
            <AnimatedHeading as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 mb-4 tracking-tight">
              Reach <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm italic ml-1">Out &</span> Connect
            </AnimatedHeading>
            <p className="text-lg text-neutral-600">
              We're here to answer any questions you may have. Feel free to reach out to us using any of the methods below.
            </p>
          </div>

          {/* Cards Grid with Mountain/Arc Layout */}
          <div className="relative max-w-[1100px] mx-auto pb-4 md:pb-12">
            
            {/* Background Mountain/Arc SVG Line connecting the cards */}
            <svg className="absolute top-[70px] left-0 w-full h-[100px] z-0 pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M 12.5 10 C 37.5 90, 62.5 90, 87.5 10" fill="none" stroke="#047857" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 relative z-10 px-4 sm:px-0">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                
                // Custom Subtitle for the card based on label
                const getSubtitle = (label: string) => {
                  switch(label) {
                    case 'Address': return 'Visit Us At';
                    case 'Email': return 'Drop A Line';
                    case 'Phone': return 'Call Us On';
                    case 'WhatsApp': return 'Message Us';
                    default: return 'Contact Us';
                  }
                };

                // Apply curve by pushing middle cards down
                const isEdge = i === 0 || i === 3;
                const dropClass = isEdge ? "md:translate-y-0" : "md:translate-y-[50px]";

                // Card Color Variations
                const cardBg = isEdge ? "bg-emerald-900 text-white border-emerald-800" : "bg-white text-emerald-900 border-neutral-100";
                const iconBg = isEdge ? "bg-white text-emerald-900 group-hover:bg-emerald-100" : "bg-emerald-900 text-emerald-100 group-hover:bg-emerald-800";
                const textMuted = isEdge ? "text-emerald-200/60" : "text-neutral-400";
                const textBody = isEdge ? "text-emerald-100/90" : "text-neutral-500";
                
                // Slanted First Word Badge
                const subtitleStr = getSubtitle(item.label);
                const subtitleWords = subtitleStr.split(' ');
                const firstWord = subtitleWords[0];
                const restOfTitle = subtitleWords.slice(1).join(' ');
                const badgeColor = isEdge ? "bg-emerald-100 text-emerald-900" : "bg-emerald-900 text-white";

                const content = (
                  <div className={`${cardBg} rounded-[1.5rem] md:rounded-[3rem] p-4 md:px-4 md:py-5 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:shadow-xl shadow-md border group flex flex-row md:flex-col items-center md:justify-center text-left md:text-center h-full min-h-[90px] md:min-h-[140px] w-full max-w-[340px] md:max-w-[240px] mx-auto ${dropClass} gap-3 md:gap-0`}>
                    
                    <div className={`flex shrink-0 h-10 w-10 md:h-9 md:w-9 items-center justify-center rounded-full ${iconBg} shadow-sm md:mb-2 transition-colors`}>
                      <Icon className="h-4 w-4 md:h-3.5 md:w-3.5" />
                    </div>
                    
                    <div className="flex-1 w-full flex flex-col justify-center overflow-hidden">
                      <div className="mb-1 md:mb-1.5 w-full">
                        <p className={`text-[9px] md:text-[8px] font-bold ${textMuted} uppercase tracking-widest mb-0.5`}>{item.label}</p>
                        <h4 className="font-bold font-display text-[13px] md:text-[12px] leading-tight flex items-center md:justify-center gap-1.5 flex-wrap">
                          <span className={`inline-block ${badgeColor} px-1.5 py-0.5 rounded -rotate-2 shadow-sm italic`}>
                            {firstWord}
                          </span>
                          <span>{restOfTitle}</span>
                        </h4>
                      </div>
                      
                      <div className={`text-[12px] md:text-[11px] font-medium ${textBody} leading-snug truncate md:whitespace-normal md:break-words max-w-full md:px-2`}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                );

              return (
                <FadeIn key={item.label} delay={i * 0.1}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.label === "WhatsApp" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </FadeIn>
              );
            })}
          </div>
          </div>
        </section>
      </div>

      {/* Edge-to-Edge Our Process Section */}
      <section className="relative w-full bg-white pt-10 pb-12 md:pt-24 md:pb-32 overflow-hidden border-y border-neutral-200 shadow-sm">
        {/* Green Blur Effects */}
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-emerald-500/[0.12] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-emerald-500/[0.12] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 relative z-10">
          <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto relative z-10">
            <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 mb-6 inline-flex">
              Our Process
            </Badge>
            <AnimatedHeading as="h2" className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 mb-6 tracking-tight">
              Simple <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm font-bold mx-1">Steps</span> to Connect
            </AnimatedHeading>
            <p className="text-lg text-neutral-600">
              Getting the support you need should be easy. Follow these simple steps to reach our team and start making a difference together.
            </p>
          </div>

          {/* Desktop Timeline Layout */}
          <div className="relative w-full h-[280px] mt-8 z-10 hidden md:block">
            
            {/* Animated Dashed Track */}
            <div className="absolute bottom-[30px] left-0 w-full h-[4px] opacity-70" 
                 style={{ 
                   backgroundImage: 'repeating-linear-gradient(90deg, #064e3b, #064e3b 8px, transparent 8px, transparent 16px)',
                   backgroundSize: '16px 4px',
                   animation: 'track-move 10s infinite linear'
                 }} />
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes track-move {
                0% { background-position: 0px 0; }
                100% { background-position: -160px 0; }
              }
            `}} />

            {/* Steps Container */}
            <div className="absolute inset-0 flex justify-between px-4 lg:px-10">
              {contactProcess.map((step, i) => {
                const isHigh = i % 2 === 0;
                const bottomPos = isHigh ? "bottom-[140px]" : "bottom-[70px]";
                const lineH = isHigh ? "h-[110px]" : "h-[40px]";
                
                // Extract first word for slanted background
                const titleWords = step.title.split(' ');
                const firstWord = titleWords[0];
                const restOfTitle = titleWords.slice(1).join(' ');

                return (
                  <FadeIn key={step.step} delay={i * 0.15} className="relative flex-1 flex flex-col items-center">
                    
                    {/* Content Block */}
                    <div className={`absolute ${bottomPos} flex flex-col items-center text-center px-4 w-[120%] -ml-[10%]`}>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-neutral-900 mb-4">
                        <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-3 shadow-sm italic mr-1">
                          {firstWord}
                        </span>
                        {restOfTitle && ` ${restOfTitle}`}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-600 leading-relaxed max-w-[280px]">{step.description}</p>
                    </div>

                    {/* Vertical Connecting Line */}
                    <div className={`absolute bottom-[30px] w-[2px] opacity-80 ${lineH}`} 
                         style={{
                           backgroundImage: 'repeating-linear-gradient(180deg, #064e3b, #064e3b 4px, transparent 4px, transparent 8px)',
                           backgroundSize: '2px 8px',
                           animation: 'vertical-move 5s infinite linear'
                         }} />
                    <style dangerouslySetInnerHTML={{__html: `
                      @keyframes vertical-move {
                        0% { background-position: 0 0px; }
                        100% { background-position: 0 80px; }
                      }
                    `}} />

                    {/* Timeline Box on Track */}
                    <div className="absolute bottom-[14px] flex items-center gap-3 bg-white px-4 py-2 rounded-lg border-2 border-emerald-800 shadow-md transition-transform hover:-translate-y-1 z-20">
                      <span className="font-sans font-extrabold text-neutral-700 text-[13px] tracking-wide uppercase">Step {step.step}</span>
                      <span className="w-3.5 h-3.5 bg-emerald-600 rounded-sm shadow-sm" />
                    </div>

                  </FadeIn>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout (Standard vertical stack with cards) */}
          <div className="flex flex-col gap-6 md:hidden relative z-10 mt-8">
            {contactProcess.map((step, i) => {
              const titleWords = step.title.split(' ');
              const firstWord = titleWords[0];
              const restOfTitle = titleWords.slice(1).join(' ');

              return (
                <FadeIn key={step.step} delay={i * 0.15} className="relative bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left shadow-sm">
                  <div className="h-12 w-12 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-50 font-display text-xl font-extrabold mb-5 shadow-sm shadow-emerald-900/20">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-3 flex items-center flex-wrap gap-1.5">
                    <span className="inline-block bg-emerald-900 text-white px-2.5 py-0.5 rounded -rotate-2 shadow-sm italic">
                      {firstWord}
                    </span>
                    <span>{restOfTitle}</span>
                  </h3>
                  <p className="text-neutral-600 text-[14px] leading-relaxed w-full">{step.description}</p>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Re-open Main Container for Contact Form */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 lg:px-16 pt-8 pb-10 md:pt-12 md:pb-20 relative z-10">
        
        {/* Contact Form Section */}
        <section className="mb-6 md:mb-8">
          <FadeIn className="flex flex-col items-center">
            <div className="mb-8 text-center">
              <Badge dotColor="bg-emerald-500" textColor="text-white" className="border-transparent bg-emerald-900 inline-flex">
                Contact Us
              </Badge>
            </div>
            <ContactPageForm />
          </FadeIn>
        </section>

      </div>
    </div>
  );
}
