import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import CausesSection from "@/components/home/CausesSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TrainingProgramSection from "@/components/home/TrainingProgramSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/home/FAQSection";
import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/lib/data/faq";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <CausesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Training Program Section */}
      <TrainingProgramSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />


      {/* Unified Contact Section */}
      <ContactSection />
    </>
  );
}
