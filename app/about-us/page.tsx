import AboutModern from "../Home/partials/About";
import WhyChooseUs from "../Home/partials/WhyChooseUs";
import Certifications from "../Home/partials/Certifications";
import TestimonialSection from "../Home/partials/Testimonial";

export const metadata = {
  title: "About Us | Ship Chandler in Bangladesh",
  description: "Learn more about Aquavibe Marine Services, your trusted maritime partner and ship chandler in Bangladesh, serving Chittagong, Mongla, and Payra ports.",
};

export default function AboutUsPage() {
  return (
    <main className="pt-20">
      {/* Custom Page Header */}
      <section className="relative bg-[#060315] py-24 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF3E41]/5 blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Who We Are</span>
            <div className="h-px w-8 bg-[#FF3E41]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
            About <span className="text-[#FF3E41]">Aquavibe</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We are Bangladesh's leading ship chandler and marine operations partner, committed to delivering excellence, speed, and reliability to vessels arriving at our national seaports.
          </p>
        </div>
      </section>

      {/* Existing Sections */}
      <AboutModern />
      <WhyChooseUs />
      <Certifications />
      <TestimonialSection />
    </main>
  );
}
