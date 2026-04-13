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
    title: "Yokohama Fender",
    desc: "High-performance Yokohama fenders designed for safe ship-to-ship and ship-to-berth operations with excellent energy absorption and durability.",
    tag: "SPECIALIZATION",
    features: ["Pneumatic Rubber", "High Durability", "ISO Standard"]
  },
  {
    icon: Box,
    title: "Remote Control Grab (10/12 CBM)",
    desc: "Heavy-duty remote control grabs available in 10 CBM and 12 CBM capacities for efficient bulk cargo handling with reduced manpower.",
    tag: "CARGO HANDLING",
    features: ["10/12 CBM", "Remote Operation", "High Efficiency"]
  },
  {
    icon: Wrench,
    title: "Manual Grab (Bangla)",
    desc: "Cost-effective manual grab buckets widely used in local port operations for reliable and simple bulk material handling.",
    tag: "CARGO HANDLING",
    features: ["Manual Operation", "Durable Build", "Easy Maintenance"]
  },
  {
    icon: Settings,
    title: "Marine Spare Parts",
    desc: "Wide range of high-quality marine spare parts ensuring smooth vessel operation with fast sourcing and delivery.",
    tag: "TECHNICAL",
    features: ["OEM Quality", "All Machinery", "Fast Delivery"]
  },
  {
    icon: Layers,
    title: "Excavator Supply",
    desc: "Robust excavators suitable for port and heavy-duty marine operations, delivering strong performance and reliability.",
    tag: "HEAVY EQUIPMENT",
    features: ["High Performance", "Durable", "Port Use"]
  },
  {
    icon: ShieldCheck,
    title: "Peludar Supply",
    desc: "Efficient peludar equipment designed for bulk cargo unloading with consistent and reliable performance.",
    tag: "CARGO HANDLING",
    features: ["Bulk Handling", "Reliable", "Heavy Duty"]
  },
  {
    icon: Anchor,
    title: "Shore Crane",
    desc: "Heavy-duty shore cranes built for safe and efficient cargo lifting operations at ports with high load capacity.",
    tag: "PORT EQUIPMENT",
    features: ["High Capacity", "Stable", "Long Service Life"]
  },
  {
    icon: ShieldCheck,
    title: "Bolt Seal",
    desc: "High-security bolt seals designed for cargo container protection with tamper-evident locking system.",
    tag: "SECURITY",
    features: ["Tamper Proof", "High Security", "ISO Compliant"]
  },
  {
    icon: Box,
    title: "12 Inch Wire Seal",
    desc: "Durable 12-inch wire seals for secure cargo and container locking with strong resistance against tampering.",
    tag: "SECURITY",
    features: ["12 Inch", "Flexible", "Strong Lock"]
  },
  {
    icon: Box,
    title: "32 Inch Wire Seal",
    desc: "Flexible 32-inch wire seals ideal for various cargo securing applications ensuring reliable protection.",
    tag: "SECURITY",
    features: ["32 Inch", "Durable", "Easy Use"]
  },
  {
    icon: Box,
    title: "62 Inch Wire Seal",
    desc: "Extra-long 62-inch wire seals suitable for large or specialized cargo securing needs with dependable strength.",
    tag: "SECURITY",
    features: ["62 Inch", "Heavy Duty", "Reliable"]
  }
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
                href="mailto:sultanfleetserve@gmail.com"
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