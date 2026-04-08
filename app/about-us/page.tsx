"use client";
import AboutModern from "../Home/partials/About";
import WhyChooseUs from "../Home/partials/WhyChooseUs";
import Certifications from "../Home/partials/Certifications";
import TestimonialSection from "../Home/partials/Testimonial";
import { Anchor, Shield, Globe, Ship } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// export const metadata = {
//   title: "About Us | Sultan Fleet Serve - Bangladesh Marine Experts",
//   description: "Discover Sultan Fleet Serve, the premier provider of Yokohama Fenders and comprehensive marine services across Chittagong, Mongla, and Payra ports.",
// };

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      {/* HERO SECTION 
          Using the professional Navy (#08214a) and Gold (#e4a04f) palette
      */}
      <section className="relative pt-32 pb-24 bg-[#08214a] overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#e4a04f]/10 blur-[100px] rounded-full" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e4a04f] animate-pulse" />
              <span className="text-white/80 font-mono text-[10px] tracking-widest uppercase">Legacy of Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
              Reliability in Every <br />
              <span className="text-[#e4a04f]">Nautical Mile.</span>
            </h1>
            
            <p className="text-blue-100/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Sultan Fleet Serve is Bangladesh's premier maritime partner, bridging the gap between global shipping standards and local port efficiency. Specialized in Yokohama Fenders and full-scale vessel support.
            </p>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 pt-10">
              {[
                { label: "Ports Covered", val: "All 3" },
                { label: "Fender Experts", val: "Yokohama" },
                { label: "Availability", val: "24/7" },
                { label: "Team", val: "Expert" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-white font-black text-2xl">{stat.val}</div>
                  <div className="text-[#e4a04f] font-mono text-[10px] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION SPLIT 
          Adds professional depth beyond just a standard text block
      */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
               <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516514104262-9599d1461993?auto=format&fit=crop&w=1000" 
                    alt="Port Operations" 
                    className="w-full h-full object-cover"
                  />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-[#08214a] p-8 rounded-2xl hidden md:block">
                  <Ship className="text-[#e4a04f] w-10 h-10" />
               </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-[#08214a] mb-4">Our Core Philosophy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We don’t just supply equipment; we ensure continuity. At Sultan Fleet Serve, we understand that every hour a vessel spends at berth is critical. Our mission is to minimize downtime through rapid response and premium equipment supply.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <Globe className="text-[#e4a04f] mb-3" size={24} />
                  <h4 className="font-bold text-[#08214a] mb-2">Our Vision</h4>
                  <p className="text-sm text-gray-500">To be the most trusted name for Yokohama Fender systems and marine support in South Asia.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100">
                  <Shield className="text-[#e4a04f] mb-3" size={24} />
                  <h4 className="font-bold text-[#08214a] mb-2">Our Quality</h4>
                  <p className="text-sm text-gray-500">Every product delivered meets ISO standards, ensuring maximum safety for both crew and cargo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT BLOCKS 
          Integrating your updated components
      */}
      <div className="relative z-10 -mt-10">
        <AboutModern />
      </div>

      <WhyChooseUs />

      {/* PORT LOGISTICS STRIP */}
      <section className="bg-[#08214a] py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-white font-black text-xl tracking-tighter">PORT OF CHITTAGONG</span>
            <span className="text-white font-black text-xl tracking-tighter">PORT OF MONGLA</span>
            <span className="text-white font-black text-xl tracking-tighter">PORT OF PAYRA</span>
          </div>
        </div>
      </section>

      <Certifications />
      <TestimonialSection />

      {/* FINAL CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Anchor className="mx-auto text-[#e4a04f] mb-6" size={48} />
          <h2 className="text-4xl font-black text-[#08214a] mb-6">Ready to Secure Your Vessel?</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Whether you need urgent Yokohama Fender servicing or routine ship stores, Sultan Fleet Serve is ready to mobilize across all Bangladesh ports.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <button className="px-10 py-4 bg-[#08214a] text-white font-bold rounded-xl hover:bg-[#e4a04f] transition-all shadow-xl">
               Contact Our Port Office
             </button>
          </div>
        </div>
      </section>
    </main>
  );
}