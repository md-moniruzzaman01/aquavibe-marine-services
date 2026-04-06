"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Clock, Shield, Award, Users, Ship, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "500+", label: "Vessels Served", icon: Ship },
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "24/7", label: "Support Available", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: Star },
];

const HIGHLIGHTS = [
  "Licensed ship chandler registered with Bangladesh Merchant Shipping Ordinance",
  "Authorized supplier for all 3 major ports: Chittagong, Mongla & Payra",
  "ISO-compliant quality assurance on all marine supplies",
  "Dedicated 24/7 operations team for urgent vessel requirements",
];

export default function AboutModern() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-gray-100 overflow-hidden" ref={ref}>
      {/* Top divider wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF3E41] to-transparent opacity-60" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gray-200 blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-gray-200 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* — Stats row — */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-24 border border-white/10"
        >
          {STATS.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gray-200 hover:bg-white/5 transition-colors duration-300 p-8 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-[#004d95]/20 flex items-center justify-center mb-4 group-hover:border-[#004d95]/50 transition-colors">
                <Icon className="w-5 h-5 text-[#004d95]" />
              </div>
              <div className="text-4xl font-black  mb-1">{value}</div>
              <div className="text-xs font-mono text-[#004d95]/70 tracking-widest uppercase">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* — Main split — */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1000"
                alt="Aquavibe Marine Services - Ship Chandler Bangladesh"
                className="w-full h-[480px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060315]/80 via-transparent to-transparent" />

              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-[#060315]/80 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF3E41] flex items-center justify-center flex-shrink-0">
                    <Ship className="w-5 h-5 " />
                  </div>
                  <div>
                    <div className=" font-bold text-sm">Bangladesh's Leading Ship Chandler</div>
                    <div className="text-[#51CFED]/70 text-xs font-mono tracking-wider">CHITTAGONG • MONGLA • PAYRA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -top-6 -right-6 bg-[#FF3E41] rounded-2xl p-5 shadow-xl hidden lg:block">
              <div className=" font-black text-3xl">3+</div>
              <div className=" text-xs font-mono tracking-widest uppercase mt-1">Active<br />Ports</div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#FF3E41]" />
                <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">About Aquavibe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black  leading-tight">
                Bangladesh's Most{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E41] to-[#51CFED]">
                  Trusted
                </span>{" "}
                Ship Chandler
              </h2>
            </div>

            <p className=" text-base leading-relaxed">
              Aquavibe Marine Services is a premier ship chandling company based in Chittagong, Bangladesh. We deliver world-class marine supplies, spare parts, bunker, provisions, and repair services to vessels operating across all major Bangladeshi ports — available round the clock.
            </p>

            <div className="space-y-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-4 h-4 text-[#51CFED] flex-shrink-0 mt-0.5" />
                  <span className=" text-sm leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FF3E41] hover:bg-[#e63538]  font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#FF3E41]/30"
              >
                About Us
              </Link>
              <a
                href="tel:+8801728841299"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white hover:border-[#51CFED] hover:text-[#51CFED] font-bold text-sm tracking-widest uppercase rounded-lg transition-all duration-300"
              >
                +880 1728 841299
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
}