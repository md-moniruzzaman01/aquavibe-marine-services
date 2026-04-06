import ContactSection from "../Home/partials/ContactUs";
import CTABanner from "../Home/partials/CTABanner";

export const metadata = {
  title: "Contact Us | Ship Chandler in Bangladesh",
  description: "Get in touch with Aquavibe Marine Services for 24/7 ship chandling, marine provisions, bunker supply, and emergency vessel repairs in Bangladesh.",
};

export default function ContactUsPage() {
  return (
    <main className="pt-20">
      {/* Custom Page Header */}
      <section className="relative bg-[#060315] py-20 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">24/7 Operations</span>
            <div className="h-px w-8 bg-[#FF3E41]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Contact <span className="text-[#FF3E41]">Our Team</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out via phone, WhatsApp, or the secure form below. Our operations team is always awake and ready to supply your vessel.
          </p>
        </div>
      </section>

      {/* Existing Contact Form */}
      <ContactSection />
      
      {/* Big bold CTA */}
      <CTABanner />
    </main>
  );
}
