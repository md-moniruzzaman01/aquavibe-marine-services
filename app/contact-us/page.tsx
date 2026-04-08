"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Anchor,
  Globe,
  ArrowRight
} from "lucide-react";
import ContactSection from "../Home/partials/ContactUs";
import CTABanner from "../Home/partials/CTABanner";

// export const metadata = {
//   title: "Contact Us | Sultan Fleet Serve - Bangladesh Marine Support",
//   description: "Contact Sultan Fleet Serve 24/7 for Yokohama fenders, marine provisions, and emergency vessel repairs in Chattogram, Mongla, and Payra ports.",
// };

export default function ContactUsPage() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+880 1624 434052", "+880 1974 434052"],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Inquiries",
      details: ["sultanfleetserve@gmail.com", "smturzo@gmail.com"],
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: MapPin,
      title: "Head Office",
      details: ["Oriyent Building, 3 No. Fakirhat", "Bandar, Chattogram – 4100"],
      color: "bg-gray-50 text-gray-600"
    }
  ];

  return (
    <main className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 bg-[#08214a] overflow-hidden">
        {/* Abstract Background Texture */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e4a04f] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e4a04f]"></span>
              </span>
              <span className="text-white/80 font-mono text-[10px] tracking-[0.2em] uppercase">24/7 Global Vessel Support</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Contact <span className="text-[#e4a04f]">Sultan Fleet</span>
            </h1>
            <p className="text-blue-100/60 text-lg max-w-2xl mx-auto">
              Available around the clock for Yokohama fender supply, emergency repairs, 
              and cargo handling across all Bangladesh seaports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT QUICK CARDS --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {contactDetails.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:border-[#e4a04f]/30 transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#08214a] mb-4">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((line, i) => (
                  <p key={i} className="text-gray-500 font-medium">{line}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECONDARY INFO SECTION --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Service Locations */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black text-[#08214a] mb-6">Service Locations</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Strategically positioned to respond to inquiries at all major maritime gateways in Bangladesh. 
                Our team handles mobilization and logistics internally.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Chattogram Port", "Mongla Port", "Payra Port"].map((port) => (
                  <div key={port} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    <Anchor size={16} className="text-[#e4a04f]" />
                    <span className="text-sm font-bold text-[#08214a]">{port}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Support Box */}
            <div className="p-8 bg-[#08214a] rounded-[2rem] text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="text-[#e4a04f]" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">WhatsApp Support</h4>
                </div>
                <p className="text-blue-100/70 text-sm mb-6">
                  For instant coordination and rapid emergency quotations, message our duty officer.
                </p>
                <a 
                  href="https://wa.me/8801624434052" 
                  className="inline-flex items-center gap-2 bg-[#e4a04f] hover:bg-white text-[#08214a] px-6 py-3 rounded-xl font-black text-xs transition-all"
                >
                  MESSAGE NOW <ArrowRight size={14} />
                </a>
              </div>
              <Globe className="absolute -bottom-10 -right-10 text-white/5 w-40 h-40" />
            </div>
          </div>

          {/* Working Hours & Prompt */}
          <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                <Clock className="text-[#e4a04f]" />
              </div>
              <div>
                <h4 className="font-bold text-[#08214a]">Working Hours</h4>
                <p className="text-sm text-gray-500">24 Hours / 7 Days a Week</p>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm mb-8">
              Whether you need specialized **Yokohama fender** supply, underwater hull cleaning, or technical spare parts — we are ready to mobilize. Fill out the form or reach us via our direct lines for immediate assistance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm font-bold text-[#08214a]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e4a04f]" />
                Direct Response within 15 Minutes
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-[#08214a]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e4a04f]" />
                Technical Quotations within 2 Hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Sections */}
      <div className="border-t border-gray-100">
        <ContactSection />
      </div>
      
      <CTABanner />
    </main>
  );
}