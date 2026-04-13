"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const QUICK_POINTS = [
  "24/7 Emergency Response",
  "All Bangladesh Ports Covered",
  "Genuine Parts & Certified Products",
];

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative overflow-hidden" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/banner1.jpg"
          alt="Ship at sea"
          className="w-full h-full object-cover"
        />
        {/* Dual overlay: brand color + dark */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/60" />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main CTA text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase">Ready to Supply?</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Your Vessel.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">
                Our Priority.
              </span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-lg mb-8">
              Whether your vessel arrives in Chittagong, Mongla, or Payra — our operations team is on standby round the clock to fulfill any supply, repair, or provisioning requirement within hours.
            </p>

            <div className="space-y-3 mb-8">
              {QUICK_POINTS.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-white/80 text-sm">{pt}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:aquavibe2023@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary hover:bg-secondary/90 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/40 group"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/+8801624434052"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-secondary text-white hover:text-secondary font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* Right: Contact box */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:flex lg:justify-end"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 max-w-sm w-full">
              {/* Live status */}
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping opacity-60" />
                </div>
                <span className="text-white font-semibold text-sm">Operations Online — 24/7</span>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-1">Emergency Hotline</div>
                  <a href="tel:+8801728841299" className="text-white font-black text-2xl hover:text-secondary transition-colors">
                    +880 1624 434052
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-1">Secondary Line</div>
                  <a href="tel:+8801521387459" className="text-white font-bold text-lg hover:text-secondary transition-colors">
                    +880 1622 221919
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-white/50 tracking-widest uppercase mb-1">Email</div>
                  <a href="mailto:aquavibe2023@gmail.com" className="text-white/80 text-sm hover:text-secondary transition-colors">
                   sultanfleetserve@gmail.com
                  </a>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {["Chittagong", "Mongla", "Payra"].map((port) => (
                      <div key={port} className="rounded-xl bg-white/5 border border-white/10 py-2">
                        <div className="text-white text-[11px] font-bold">{port}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
