"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/data/site";
import FadeIn from "@/components/ui/FadeIn";

import AnimatedHeading from "@/components/ui/AnimatedHeading";

const SocialIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case "facebook": return <Facebook className="w-4 h-4" />;
    case "twitter": return <Twitter className="w-4 h-4" />;
    case "instagram": return <Instagram className="w-4 h-4" />;
    case "linkedin": return <Linkedin className="w-4 h-4" />;
    default: return <span className="font-bold uppercase text-xs">{platform.charAt(0)}</span>;
  }
};

export default function ContactPageForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) newErrors.name = "Required";
    if (!email?.trim()) newErrors.email = "Required";
    if (!phone?.trim()) newErrors.phone = "Required";
    if (!message?.trim()) newErrors.message = "Required";

    return newErrors;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto py-6 md:py-12 px-4 flex flex-col md:flex-row items-center justify-center min-h-[500px] font-sans">
      
      {/* Left Side: Contact Info Floating Card */}
      <div className="w-full md:w-[320px] bg-emerald-900 rounded-2xl md:rounded-[2rem] p-6 sm:p-8 text-white z-20 shadow-[0_20px_50px_rgba(4,120,87,0.3)] relative md:-mr-8 mb-6 md:mb-0">
        <h3 className="font-display text-3xl font-bold mb-8">
          Contact <span className="inline-block bg-white text-emerald-900 px-3 py-1 rounded -rotate-3 shadow-sm italic tracking-wide ml-1">
            Info
          </span>
        </h3>
        
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4 group">
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4 text-emerald-300" />
            </div>
            <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium italic hover:text-emerald-200 transition-colors">
              {siteConfig.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-4 group">
            <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
              <Mail className="w-4 h-4 text-emerald-300" />
            </div>
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium italic hover:text-emerald-200 transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-12">
          {Object.entries(siteConfig.social).map(([platform, url]) => (
            <a 
              key={platform} 
              href={url} 
              target="_blank" 
              rel="noreferrer" 
              className="relative flex items-center justify-center w-11 h-11 rounded-full text-white hover:text-emerald-200 hover:-translate-y-1 transition-all group" 
              title={platform}
            >
              {/* Animated White Border */}
              <div className="absolute inset-0 border-[1.5px] border-dashed border-white/80 rounded-full animate-[spin_8s_linear_infinite] group-hover:border-white transition-colors" />
              <div className="relative z-10">
                <SocialIcon platform={platform} />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Right Side: Form Card with Animated Dotted Border */}
      <div className="w-full md:w-[550px] bg-neutral-900/5 backdrop-blur-xl rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 md:pl-20 shadow-xl border border-white/40 z-10 relative overflow-hidden group">
        
        {/* Animated Dotted Border Overlay */}
        <div className="absolute inset-0 border-2 border-dashed border-emerald-500/80 rounded-sm pointer-events-none opacity-80" 
             style={{ 
               backgroundImage: `linear-gradient(90deg, #10b981 50%, transparent 50%), linear-gradient(90deg, #10b981 50%, transparent 50%), linear-gradient(0deg, #10b981 50%, transparent 50%), linear-gradient(0deg, #10b981 50%, transparent 50%)`,
               backgroundRepeat: `repeat-x, repeat-x, repeat-y, repeat-y`,
               backgroundSize: `12px 2px, 12px 2px, 2px 12px, 2px 12px`,
               backgroundPosition: `0% 0%, 100% 100%, 0% 100%, 100% 0px`,
               animation: `border-dance 20s infinite linear`,
               border: 'none'
             }} 
        />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes border-dance {
            0% {
              background-position: 0% 0%, 100% 100%, 0% 100%, 100% 0px;
            }
            100% {
              background-position: 100% 0%, 0% 100%, 0% 0%, 100% 100%;
            }
          }
        `}} />

        <AnimatedHeading as="h2" className="font-display text-2xl md:text-3xl font-medium text-neutral-900 mb-8 tracking-tight">
          Have Any <span className="inline-block bg-emerald-900 text-white px-3 py-1 rounded -rotate-2 shadow-sm italic ml-1">Question?</span>
        </AnimatedHeading>

        {submitted ? (
          <div className="flex flex-col items-start justify-center py-6">
            <div className="h-12 w-12 bg-emerald-50 rounded-full flex items-center justify-center mb-4 border border-emerald-100 animate-bounce">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">Message Sent!</h3>
            <p className="text-neutral-600 text-sm mb-6 max-w-md leading-relaxed">
              Thank you for your message. We'll get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-5 py-2 text-sm font-bold transition-all rounded-full font-sans"
            >
              Submit Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 relative z-20">
            
            {/* Full Name */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Full name"
                className={`w-full bg-transparent border-b-2 ${errors.name ? 'border-red-500' : 'border-emerald-900/30'} pb-2 text-[14px] font-medium text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-emerald-600 transition-colors`}
              />
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-emerald-900/30'} pb-2 text-[14px] font-medium text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-emerald-600 transition-colors`}
                />
              </div>

              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  className={`w-full bg-transparent border-b-2 ${errors.phone ? 'border-red-500' : 'border-emerald-900/30'} pb-2 text-[14px] font-medium text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-emerald-600 transition-colors`}
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="relative mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Write your message here....."
                className={`w-full bg-transparent border-b-2 ${errors.message ? 'border-red-500' : 'border-emerald-900/30'} pb-2 text-[14px] font-medium text-neutral-900 placeholder:text-neutral-500 outline-none focus:border-emerald-600 transition-colors resize-none`}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-2">
              <button
                type="submit"
                className="bg-transparent border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white font-bold text-[13px] md:text-[14px] px-6 py-2.5 transition-all rounded-full flex items-center justify-center gap-2 uppercase tracking-wide w-full md:w-max shadow-sm hover:shadow-md"
              >
                <span>Submit Message</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
