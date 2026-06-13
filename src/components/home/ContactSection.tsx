"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, CheckCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Badge from "@/components/ui/Badge";
import { siteConfig } from "@/lib/data/site";
import AnimatedHeading from "@/components/ui/AnimatedHeading";


export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const newErrors: Record<string, string> = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) newErrors.name = "Full name is required";
    if (!email?.trim()) newErrors.email = "Email is required";
    if (!phone?.trim()) newErrors.phone = "Phone number is required";
    if (!message?.trim()) newErrors.message = "Message is required";

    return newErrors;
  }

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5f4ef] pt-8 pb-12 md:pt-12 md:pb-20 border-t border-neutral-200/50">

      {/* Ambient Green Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#070142]/80/15 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[40%] w-[500px] h-[300px] bg-[#070142]/80/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[20%] right-[-5%] w-[300px] h-[300px] bg-[#070142]/80/10 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 relative z-10">

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start lg:justify-between">

          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2 lg:pt-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <FadeIn>
              <Badge dotColor="bg-[#070142]" textColor="text-[#070142]" className="border-transparent bg-[#f2cf07] mb-6 inline-flex self-center lg:self-start">
                Contact Us
              </Badge>

              <AnimatedHeading as="h2" className="font-display text-4xl font-extrabold leading-tight text-neutral-900 md:text-5xl lg:text-[3.5rem] mb-6" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>
                Get In <span className="inline-block bg-[#070142] text-white px-3 py-1 rounded-lg font-extrabold -rotate-2 shadow-sm transition-transform duration-300 hover:scale-105" style={{ fontFamily: '"Cabinet Grotesk", sans-serif' }}>Touch</span>
              </AnimatedHeading>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8 max-w-md font-sans">
                We are always here to help. Reach out to us directly through WhatsApp or Email, or simply fill out the form, and we will get back to you as soon as possible.
              </p>
            </FadeIn>

            {/* Contact Links Grid (Reduced Gap) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-6 mt-4 w-full">
              {/* WhatsApp Info */}
              <FadeIn delay={0.2}>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 group"
                >
                  <div className="relative flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full text-[#070142] bg-white shadow-md group-hover:text-[#070142] transition-colors mx-auto lg:mx-0">
                    {/* Spinning dotted border */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 8" />
                    </svg>
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display font-bold text-neutral-900 text-sm sm:text-lg mb-1 sm:mb-1.5">WhatsApp</h3>
                    <p className="text-[10px] min-[375px]:text-[11px] sm:text-sm font-bold font-sans">
                      <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded rotate-1 group-hover:bg-[#070142] transition-colors shadow-sm whitespace-nowrap">
                        {siteConfig.whatsapp}
                      </span>
                    </p>
                  </div>
                </a>
              </FadeIn>

              {/* Email Info */}
              <FadeIn delay={0.3}>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 group"
                >
                  <div className="relative flex h-11 w-11 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full text-[#070142] bg-white shadow-md group-hover:text-[#070142] transition-colors mx-auto lg:mx-0">
                    {/* Spinning dotted border */}
                    <svg className="absolute inset-0 w-full h-full animate-[spin_8s_linear_infinite]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="8 8" />
                    </svg>
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="font-display font-bold text-neutral-900 text-sm sm:text-lg mb-1 sm:mb-1.5">Email Address</h3>
                    <p className="text-[10px] min-[375px]:text-[11px] sm:text-sm font-bold font-sans">
                      <span className="inline-block bg-[#070142] text-white px-2 py-0.5 rounded -rotate-1 group-hover:bg-[#070142] transition-colors shadow-sm whitespace-nowrap">
                        {siteConfig.email}
                      </span>
                    </p>
                  </div>
                </a>
              </FadeIn>
            </div>
          </div>

          {/* Right Side: Clean, Compact Green Form */}
          <div className="w-full lg:w-1/2 flex lg:justify-end">
            <FadeIn delay={0.4} className="w-full max-w-[400px]">
              <div className="bg-[#070142] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-[#070142]">

                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                <h3 className="font-display text-2xl font-bold text-white mb-6 text-center">
                  Send a <span className="inline-block bg-white text-neutral-900 px-2 py-0.5 rounded -rotate-2 shadow-sm">Message</span>
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="h-16 w-16 bg-[#070142] rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="h-8 w-8 text-white/50" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-display">Message Sent!</h3>
                    <p className="text-white/90 text-sm font-sans mb-8">
                      Thank you for reaching out. We will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="w-full rounded-xl bg-neutral-900 hover:bg-black px-6 py-3.5 text-sm font-bold text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                    <div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/70 outline-none transition-all hover:bg-white/20 focus:bg-white/20 focus:border-[#070142]/50 focus:ring-1 focus:ring-[#070142]/50 shadow-sm"
                        placeholder="Full Name"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-white/70 font-medium px-1">{errors.name}</p>}
                    </div>

                    <div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/70 outline-none transition-all hover:bg-white/20 focus:bg-white/20 focus:border-[#070142]/50 focus:ring-1 focus:ring-[#070142]/50 shadow-sm"
                        placeholder="Email Address"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-white/70 font-medium px-1">{errors.email}</p>}
                    </div>

                    <div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/70 outline-none transition-all hover:bg-white/20 focus:bg-white/20 focus:border-[#070142]/50 focus:ring-1 focus:ring-[#070142]/50 shadow-sm"
                        placeholder="Phone Number"
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-white/70 font-medium px-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full resize-none rounded-xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-3.5 text-sm font-sans text-white placeholder:text-white/70 outline-none transition-all hover:bg-white/20 focus:bg-white/20 focus:border-[#070142]/50 focus:ring-1 focus:ring-[#070142]/50 shadow-sm"
                        placeholder="Your Message..."
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-white/70 font-medium px-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#070142] bg-[#f2cf07] px-8 py-4 text-[0.95rem] font-bold tracking-wide text-[#070142] transition-all hover:bg-[#070142] hover:text-white hover:border-[#f2cf07] hover:-translate-y-0.5 shadow-md hover:shadow-xl active:translate-y-0 font-sans disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
