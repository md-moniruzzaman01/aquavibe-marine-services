"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Service = {
  title: string;
  image: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "Marine Fender Supply",
    image: "/services/2-min-2.png",
    desc: "High-quality marine fenders ensuring vessel safety during berthing operations.",
  },
  {
    title: "Crane Grab Rental",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
    desc: "Reliable crane and grab equipment for efficient cargo handling operations.",
  },
  {
    title: "Ship Repair & Maintenance",
    image: "/services/1-min-2.png",
    desc: "Comprehensive repair and maintenance services by certified marine engineers.",
  },
  {
    title: "Bunker Supply",
    image: "/services/7-min.png",
    desc: "24/7 bunker fuel and lubricant supply across all major ports.",
  },
  {
    title: "Provision Supply",
    image: "/services/4-min.png",
    desc: "Fresh and preserved provisions meeting global maritime standards.",
  },
  {
    title: "Bond Store Supply",
    image: "/services/5-min.png",
    desc: "Duty-free bonded stores and consumables delivered directly to vessels.",
  },
  {
    title: "Ship Store Supply",
    image: "/services/6-min.png",
    desc: "Complete deck, engine, and cabin store supply solutions.",
  },
  {
    title: "Cleaning Services",
    image: "/services/8-min.png",
    desc: "Professional vessel and tank cleaning with environmental compliance.",
  },
  {
    title: "Security Services",
    image: "/services/10-min.png",
    desc: "Certified maritime security personnel ensuring vessel protection.",
  },
  {
    title: "Repairing Services",
    image: "/services/11.png",
    desc: "Mechanical, electrical, and structural repair solutions.",
  },
  {
    title: "Marine Lube Oil",
    image: "/services/12.png",
    desc: "Premium marine lubricants for optimal engine performance.",
  },
  {
    title: "Crane Spare Parts",
    image: "/services/BOND-STORE-SUPPLY.png",
    desc: "Spare parts and repair solutions for all crane systems.",
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      className="bg-white py-28 lg:py-32"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ===== HEADER (MATCH PREVIOUS SECTION) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-sm text-[#08214a] font-semibold uppercase tracking-[0.3em] mb-3">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1d2128]">
            Comprehensive Maritime
            <br />
            Service Solutions
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-0.5 w-16 bg-[#e4a04f]" />
            <div className="h-0.5 w-6 bg-gray-300" />
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We deliver reliable ship chandling, logistics, and marine support
            services across all major ports in Bangladesh — ensuring efficiency,
            safety, and operational excellence.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

                {/* Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#08214a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-semibold text-[#1d2128] text-sm mb-2 group-hover:text-[#08214a] transition">
                  {service.title}
                </h4>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e4a04f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;