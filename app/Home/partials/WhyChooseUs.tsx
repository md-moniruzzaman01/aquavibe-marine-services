"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Zap,
  Anchor,
  Settings,
} from "lucide-react";

const WHY_US = [
  { 
    icon: Anchor, 
    title: "Yokohama Fender Experts", 
    desc: "Specialized providers of high-quality Yokohama Fenders suitable for heavy-duty marine and port applications." 
  },
  { 
    icon: Settings, 
    title: "Comprehensive Services", 
    desc: "From underwater hull cleaning to cargo handling, we cover the full spectrum of marine service needs." 
  },
  { 
    icon: Zap, 
    title: "Flexible Solutions", 
    desc: "We tailor our services to meet the specific operational requirements of every unique vessel and project." 
  },
  { 
    icon: Shield, 
    title: "Commitment to Safety", 
    desc: "Safety is our priority. All equipment and operations meet strict international marine safety standards." 
  },
  { 
    icon: Clock, 
    title: "24/7 Operations", 
    desc: "Round-the-clock service team ready to respond to any vessel requirement at any hour across all ports." 
  },
  { 
    icon: CheckCircle, 
    title: "Competitive Pricing", 
    desc: "Best market prices with full transparency — ensuring quality without hidden charges or surcharges." 
  },
];

const FAQS = [
  {
    q: "Do you specialize in Yokohama Fenders?",
    a: "Yes, we are specialists in Yokohama Fenders. We provide high-quality fenders designed to protect vessels and port infrastructure during berthing and ship-to-ship operations.",
  },
  {
    q: "What comprehensive marine services do you offer?",
    a: "Our range includes underwater hull cleaning, cargo handling, equipment supply, main engine overhauling, and structural repairs performed by certified marine engineers.",
  },
  {
    q: "How do you handle specific project requirements?",
    a: "We understand that every vessel is different. We offer flexible, tailored solutions that adapt to your specific operational needs and project timelines.",
  },
  {
    q: "Which ports do you operate in?",
    a: "We currently operate at all major Bangladesh seaports: Port of Chittagong (BDCGP), Port of Mongla (BDMGL), and the Port of Payra (BDPYR).",
  },
  {
    q: "Are your safety standards certified?",
    a: "Absolutely. All our equipment and operational procedures are maintained to meet international maritime safety standards and ISO-compliant processes.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase">Why Sultan Fleet</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Why Choose Sultan Fleet Serve?
          </h2>
          <p className="mt-4 text-base max-w-xl mx-auto leading-relaxed">
           We provide the Best Service Guarantee.
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
              className="group bg-gray-50 hover:bg-gray-100 border border-gray-100 hover:border-primary/20 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:border-primary/50 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-bold text-sm mb-2">{title}</h4>
              <p className="text-xs leading-relaxed text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stats & Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-2xl">
              <img
                src="https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/64be7a998_generated_de20fd18.png"
                alt="Marine Excellence"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="font-mono text-[10px] text-white tracking-widest uppercase">Maritime Excellence</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-5">
                <div className="text-3xl font-black text-secondary mb-1">500+</div>
                <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Vessels Served</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
                <div className="text-3xl font-black text-primary mb-1">3</div>
                <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Active Ports</div>
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
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h3 className="text-2xl font-black mb-8">Frequently Asked Questions</h3>

            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className={`rounded-xl border transition-all duration-300 ${
                    openIndex === i
                      ? "border-secondary/40 bg-gray-50"
                      : "border-gray-200 bg-gray-50/50 hover:bg-gray-50"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-secondary flex-shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-sm">{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-secondary flex-shrink-0 transition-transform duration-300 ${
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
                          <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
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