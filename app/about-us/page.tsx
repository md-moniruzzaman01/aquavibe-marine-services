"use client";

import { Ship, Wrench, Anchor, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Using 'as const' ensures TypeScript treats the string "easeOut" 
// as a specific Easing type rather than a generic string.
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const staggerContainer: Variants = {
  initial: {},
  whileInView: { 
    transition: { 
      staggerChildren: 0.1 
    } 
  }
};

export default function AboutPage() {
  return (
    <main className="bg-[#fcfcfd] text-[#08214a] overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 bg-[#08214a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#e4a04f] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            transition={fadeInUp.transition}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-[#e4a04f] text-sm font-bold tracking-widest uppercase mb-4">
              Est. in Chattogram
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">
              Sultan <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e4a04f] to-orange-300">Fleet Serve</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-blue-100/80 leading-relaxed font-light">
              Redefining marine logistics across Bangladesh’s major ports with 
              unmatched precision and safety-driven excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black leading-tight">
                    Reliability in Every <br/> <span className="text-[#e4a04f]">Nautical Mile.</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#e4a04f] rounded-full" />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are more than a service provider; we are a strategic partner for vessel owners. 
              Our strength lies in a unified operational framework that combines deep technical 
              expertise with rapid-response deployment.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-[#e4a04f] shrink-0" size={20} />
                    <span className="font-semibold italic">Rapid Deployment Ready</span>
                </div>
                <div className="flex items-start gap-3 text-gray-700">
                    <CheckCircle2 className="text-[#e4a04f] shrink-0" size={20} />
                    <span className="font-semibold italic">Compliance Guaranteed</span>
                </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#08214a] p-12 rounded-[2rem] text-white shadow-2xl relative z-10">
                <Ship className="text-[#e4a04f] mb-6" size={48} />
                <h3 className="text-2xl font-bold mb-4">Strategic Port Presence</h3>
                <p className="text-blue-100/70 leading-relaxed">
                    With an active presence at major anchorages, we bridge the gap between 
                    complex technical demands and time-sensitive maritime operations.
                </p>
            </div>
            <div className="absolute inset-0 bg-[#e4a04f] translate-x-4 translate-y-4 rounded-[2rem] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 bg-gray-100/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black">Core Capabilities</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Integrated solutions designed for heavy-duty marine environments.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#08214a] transition-colors duration-300">
                <Anchor className="text-[#e4a04f]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Marine Equipment Supply</h3>
              <ul className="grid grid-cols-1 gap-4 text-gray-600">
                {[
                    "Yokohama Fenders", 
                    "10 & 12 CBM Remote Control Grabs", 
                    "Manual (Bangla) Grabs", 
                    "Excavators & Payloaders", 
                    "10-Ton Shore Cranes"
                ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e4a04f]" />
                        {item}
                    </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 group transition-all"
            >
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#08214a] transition-colors duration-300">
                <Wrench className="text-[#e4a04f]" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Technical Marine Services</h3>
              <ul className="grid grid-cols-1 gap-4 text-gray-600">
                {[
                    "Hull Cleaning (Inspection Incl.)", 
                    "Cargo Hold & Tank Cleaning", 
                    "Grab Repair & Maintenance", 
                    "Main Engine Repair", 
                    "Crane System Diagnostics"
                ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e4a04f]" />
                        {item}
                    </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE EDGE / WHY CHOOSE US */}
      <section className="py-24 bg-[#08214a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-black mb-4">The Sultan Edge</h2>
            <p className="text-blue-100/60">Why leading vessel operators trust our support infrastructure.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
          >
            {[
              "Port-Wide Coverage",
              "24/7 Rapid Response",
              "Certified Equipment",
              "Expert Engineers",
              "Zero-Downtime Focus",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 }
                }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all text-center"
              >
                <div className="text-[#e4a04f] font-black text-xl mb-2">0{i+1}</div>
                <div className="text-sm font-bold tracking-tight uppercase leading-tight">{item}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-8"
          >
            <ShieldCheck className="text-[#e4a04f]" size={40} />
          </motion.div>
          <h2 className="text-5xl font-black mb-6 tracking-tight text-[#08214a]">Ready to secure your fleet?</h2>
          <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our technical team today for scheduled maintenance or emergency equipment supply. 
            We are standby at all major Bangladesh anchorages.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="group px-10 py-5 bg-[#08214a] text-white font-bold rounded-2xl hover:bg-[#e4a04f] transition-all flex items-center gap-2 shadow-xl shadow-blue-900/20">
              Start Partnership
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-200 text-[#08214a] font-bold rounded-2xl hover:bg-gray-50 transition-all">
              View All Services
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}