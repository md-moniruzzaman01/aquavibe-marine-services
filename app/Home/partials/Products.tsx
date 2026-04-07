"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Anchor, Settings, Droplets, Fuel, Ship, UtensilsCrossed, ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    icon: Anchor,
    title: "Marine Fender Supply",
    desc: "Premium rubber and foam fenders for all vessel types. Trusted by ship operators across Bangladesh ports for durability and reliability.",
    tag: "FENDERING",
  },
  {
    icon: Settings,
    title: "Ship Spare Parts",
    desc: "Genuine OEM and high-quality replacement parts for main engines, auxiliary machinery, deck equipment and more.",
    tag: "SPARE PARTS",
  },
  {
    icon: Droplets,
    title: "Marine Lube Oil",
    desc: "Authorized distributor of leading marine lubricant brands. Engine oil, hydraulic oil and gear oil for all vessel types.",
    tag: "LUBRICANTS",
  },
  {
    icon: Fuel,
    title: "Physical Bunker Supply",
    desc: "Reliable VLSFO, LSMGO and HFO bunker supply at competitive prices across all major Bangladesh ports.",
    tag: "BUNKER",
  },
  {
    icon: Ship,
    title: "Ship Stores Supply",
    desc: "Complete range of deck, engine room and cabin stores — paint, ropes, safety equipment and consumables delivered to berth.",
    tag: "SHIP STORES",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Provision Supply",
    desc: "Fresh, refrigerated and dry provision supply meeting international standards. Sourced from certified suppliers in Bangladesh.",
    tag: "PROVISIONS",
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      className="relative bg-gray-50 overflow-hidden py-24 lg:py-32"
      ref={ref}
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#004d95]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#51CFED]/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#004d95]" />
              <span className="text-[#004d95] font-mono text-xs tracking-[0.3em] uppercase">Supply Catalog</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black  leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#004d95] to-[#51CFED]">
                Products
              </span>
            </h2>
          </div>
          <p className=" text-gray-700 text-sm max-w-sm leading-relaxed font-mono">
            World-class marine supplies delivered to your vessel — anywhere in Bangladesh waters.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-[#004d95]/5 hover:bg-[#004d95]/8 border border-[#004d95]/10 hover:border-[#004d95]/40 rounded-2xl p-7 transition-all duration-400 overflow-hidden cursor-pointer"
            >
              {/* Glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF3E41]/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                {/* Tag */}
                <div className="font-mono text-[9px] text-blue-700 tracking-[0.3em] mb-5 uppercase">
                  {product.tag}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#004d95]/10 border border-[#004d95]/20 flex items-center justify-center mb-5 group-hover:bg-[#004d95]/20 group-hover:border-[#004d95]/50 transition-all duration-300">
                  <product.icon className="w-5 h-5 text-[#004d95]" />
                </div>

                <h3 className="font-bold  text-base leading-snug mb-3 group-hover:text-[#51CFED] transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.desc}
                </p>

                {/* Arrow on hover */}
                <div className="mt-5 flex items-center gap-2 text-[#004d95] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="font-mono text-[10px] tracking-widest uppercase">Learn More</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#004d95] to-[#51CFED] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:aquavibe2023@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#004d95] hover:bg-[#004d95] text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF3E41]/30"
          >
            Request a Quotation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}