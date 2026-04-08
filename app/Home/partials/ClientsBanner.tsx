"use client";

import { motion } from "framer-motion";

const CLIENTS = [
  "Maersk Line",
  "MSC",
  "CMA CGM",
  "COSCO Shipping",
  "Evergreen Marine",
  "ONE (Ocean Network)",
  "PIL",
  "Yang Ming",
  "Emirates Shipping",
  "MISC Berhad",
  "Hapag-Lloyd",
  "Bengal Shipping",
];

const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

export default function ClientsBanner() {
  return (
    <section className="relative -mt-24 py-20 overflow-hidden">
      
      {/* ===== BACKGROUND (BLEND WITH HERO) ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f3d] via-[#2c3e5a] to-[#f5f5f5]" />

      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#e4a04f]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#08214a]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#e4a04f]" />
            <span className="text-xs tracking-[0.4em] text-gray-300 uppercase font-semibold">
              Trusted By
            </span>
            <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#e4a04f]" />
          </div>

          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Supporting global shipping leaders across Bangladesh ports
          </p>
        </div>

        {/* ===== GLASS MARQUEE CONTAINER ===== */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl py-6 overflow-hidden">

          {/* Edge fade */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a1f3d] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a1f3d] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-10 whitespace-nowrap px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 50,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {MARQUEE_ITEMS.map((client, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300"
                >
                  {/* Gold dot */}
                  <div className="w-1.5 h-1.5 rounded-full bg-[#e4a04f] opacity-70 group-hover:opacity-100 transition" />

                  {/* Client Name */}
                  <span className="text-sm tracking-wide font-medium relative">
                    {client}

                    {/* subtle hover underline */}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#e4a04f] transition-all duration-300 group-hover:w-full" />
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}