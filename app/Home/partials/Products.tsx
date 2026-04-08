"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Anchor, 
  Settings, 
  ShieldCheck, 
  Box, 
  Wrench, 
  Layers, 
  ArrowRight 
} from "lucide-react";

const PRODUCTS = [
  {
    icon: Anchor,
    title: "Marine Yokohama Fenders",
    desc: "Specialized high-pressure Yokohama Fenders designed for maximum energy absorption. Ideal for ship-to-ship and ship-to-dock operations in all weather conditions.",
    tag: "SPECIALIZATION",
    features: ["Pneumatic Rubber", "High Durability", "ISO 17357 Certified"]
  },
  {
    icon: Box,
    title: "Ship Equipment Supply",
    desc: "Comprehensive deck and engine room equipment. From mooring ropes and safety gear to specialized navigation tools and cabin stores.",
    tag: "FLEET SUPPORT",
    features: ["Deck & Engine", "Safety Gear", "Navigation Tools"]
  },
  {
    icon: Wrench,
    title: "Marine Spare Parts",
    desc: "Genuine OEM and high-quality alternative spare parts for main engines, pumps, and auxiliary machinery. Fast delivery to all Bangladesh ports.",
    tag: "TECHNICAL",
    features: ["OEM Quality", "Engine Spares", "Express Delivery"]
  },
  {
    icon: ShieldCheck,
    title: "Fender Accessories",
    desc: "Heavy-duty chains, shackles, and mounting hardware specifically designed to support Yokohama fender installations.",
    tag: "ACCESSORIES",
    features: ["Load Testing", "Galvanized Steel", "Quick Install"]
  },
  {
    icon: Layers,
    title: "Hull Protection Gear",
    desc: "Advanced rubber fendering and foam-filled protection systems to prevent vessel damage during berthing and cargo handling.",
    tag: "PROTECTION",
    features: ["Foam Filled", "Non-Marking", "Custom Sizes"]
  },
  {
    icon: Settings,
    title: "Structural Components",
    desc: "Provision of critical marine structural parts, piping materials, and specialized shipboarding equipment.",
    tag: "HARDWARE",
    features: ["Marine Grade", "Corrosion Resistant", "Class Approved"]
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="products"
      className="relative bg-white overflow-hidden py-24 lg:py-32"
      ref={ref}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-25" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
     
          <h2 className="text-4xl md:text-6xl font-black text-[#08214a] leading-tight tracking-tight">
           Our Products
          </h2>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From world-class Yokohama Fenders to critical engine spares, we provide 
            everything your vessel needs to stay operational and safe.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(8,33,74,0.1)] hover:-translate-y-2"
            >
              {/* Icon & Tag */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <product.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-[10px] font-bold tracking-widest text-gray-400 group-hover:text-primary transition-colors">
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#08214a] mb-4 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.desc}
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.features.map((feature) => (
                  <span key={feature} className="text-[9px] font-bold px-2 py-1 rounded-md bg-gray-50 text-gray-400 border border-gray-100">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More link */}
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-xs font-bold text-[#08214a] group-hover:text-primary transition-colors">View Details</span>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 bg-[#08214a] rounded-[2rem] p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><rect width="100%" height="100%" fill="url(#grid)" /></svg>
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Need Custom Marine Equipment?</h3>
            <p className="text-blue-100/70 mb-8 max-w-xl mx-auto">
              We provide sourcing and delivery for hard-to-find vessel components across all major ports in Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:aquavibe2023@gmail.com"
                className="px-8 py-4 bg-[#e4a04f] hover:bg-white text-[#08214a] font-black text-sm tracking-widest uppercase rounded-xl transition-all duration-300 shadow-lg"
              >
                Inquire Now
              </a>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all border border-white/10 backdrop-blur-md">
                Download Catalog
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}