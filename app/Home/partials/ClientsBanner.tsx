"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Shipping companies & organizations relevant to Bangladesh maritime industry
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

// Double the list for seamless infinite loop
const MARQUEE_ITEMS = [...CLIENTS, ...CLIENTS];

export default function ClientsBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-16 border-y border-gray-100 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Trusted By</span>
            <div className="h-px w-8 bg-[#FF3E41]" />
          </div>
          <p className="text-gray-400 text-sm font-mono tracking-wider">
            Serving vessels from the world's leading shipping lines at Bangladesh ports
          </p>
        </motion.div>
      </div>

      {/* Infinite marquee */}
      <div className="relative">
        {/* Fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {MARQUEE_ITEMS.map((client, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 px-8 py-4 rounded-2xl border border-gray-100 bg-gray-50 hover:border-[#FF3E41]/20 hover:bg-white transition-all duration-300 group"
              >
                {/* Decorative ship anchor dot */}
                <div className="w-2 h-2 rounded-full bg-[#FF3E41]/30 group-hover:bg-[#FF3E41] transition-colors flex-shrink-0" />
                <span className="font-bold text-gray-500 group-hover:text-[#060315] text-sm tracking-wide transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
