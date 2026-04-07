"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Clock,
  Award,
  Headphones,
  CheckCircle,
  Zap,
} from "lucide-react";

const WHY_US = [
  { icon: Clock, title: "24/7 Operations", desc: "Round-the-clock service team ready to respond to any vessel requirement at any hour." },
  { icon: Shield, title: "Quality Assured", desc: "ISO-compliant processes ensuring every product and service meets international maritime standards." },
  { icon: Award, title: "Licensed & Certified", desc: "Fully registered with Bangladesh Merchant Shipping Ordinance and port authorities." },
  { icon: Headphones, title: "Dedicated Support", desc: "A personal account manager assigned to every vessel for seamless coordination." },
  { icon: Zap, title: "Fast Turnaround", desc: "Express delivery to berth even for last-minute urgent requirements across all ports." },
  { icon: CheckCircle, title: "Competitive Pricing", desc: "Best market prices with full transparency — no hidden charges or surcharges." },
];

const FAQS = [
  {
    q: "What types of ship repair services do you offer?",
    a: "We offer a comprehensive range of ship repair services including main engine overhauling, hull and underwater repairs, electrical system repairs, crane and winch repairs, piping works, and structural steel repairs — all performed by certified marine engineers.",
  },
  {
    q: "Do you offer emergency ship repair services?",
    a: "Yes. Our emergency response team is available 24/7 and can mobilize within hours to handle unexpected breakdown or damage repair needs at any Bangladesh port.",
  },
  {
    q: "What types of ship supply services do you offer?",
    a: "Our supply services cover provisions, ship stores, bunker, lube oil, marine spare parts, safety equipment, ropes and deck supplies, bond store items, and cleaning chemicals — all sourced from certified suppliers.",
  },
  {
    q: "What certifications and qualifications do your technicians hold?",
    a: "Our team includes class-approved welders, certified electrical engineers, marine fitters, and experienced superintendents, all with relevant maritime qualifications and continuous training programs.",
  },
  {
    q: "Which ports do you operate in?",
    a: "We currently operate full service at all three major Bangladesh seaports: Port of Chittagong (BDCGP), Port of Mongla (BDMGL), and the new Port of Payra (BDPYR).",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative  overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-700/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-700/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Why Aquavibe</span>
            <div className="h-px w-8 bg-[#FF3E41]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black  leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E41] to-[#51CFED]">
              Aquavibe?
            </span>
          </h2>
          <p className="mt-4  text-base max-w-xl mx-auto leading-relaxed">
            We have built a proven track record of excellence, reliability, and speed across Bangladesh's maritime industry.
          </p>
        </motion.div>

        {/* Why Us cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {WHY_US.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-black/5 hover:bg-black/8 border border-white/10 hover:border-[#004d95]/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#004d95]/10 border border-[#004d95]/20 flex items-center justify-center mb-4 group-hover:border-[#004d95]/50 transition-colors">
                <Icon className="w-5 h-5 text-[#51CFED]" />
              </div>
              <h4 className="font-bold  text-sm mb-2">{title}</h4>
              <p className=" text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl">
              <img
                src="https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/64be7a998_generated_de20fd18.png"
                alt="Ship engineering excellence"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060315]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="font-mono text-[10px] text-[#51CFED] tracking-widest uppercase">Engineering Excellence</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-[#FF3E41]/10 border border-[#FF3E41]/20 rounded-xl p-5">
                <div className="text-3xl font-black text-[#FF3E41] mb-1">500+</div>
                <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase">Vessels Served</div>
              </div>
              <div className="bg-[#004d95]/10 border border-[#51CFED]/20 rounded-xl p-5">
                <div className="text-3xl font-black text-[#51CFED] mb-1">3</div>
                <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase">Active Ports</div>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#FF3E41]" />
              <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h3 className="text-2xl font-black  mb-8">Frequently Asked Questions</h3>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ${
                    openIndex === i
                      ? "border-[#FF3E41]/40 bg-black/8"
                      : "border-white/10 bg-black/5"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#FF3E41] flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-sm ">{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF3E41] flex-shrink-0 transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pl-16">
                          <p className="text-sm text-white/50 leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}