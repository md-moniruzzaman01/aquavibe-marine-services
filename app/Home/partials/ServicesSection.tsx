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
    title: "Yokohama Fender",
    image: "/services/marine-fender-supply.jfif",
    desc: "High-quality pneumatic rubber fenders designed to protect vessels during berthing operations sts operation at outer anchor",
  },
  {
    title: "Remote Control Grab (10 CBM / 12 CBM)",
    image: "/services/remote control grab.jpg",
    desc: "Advanced automatic grabs for bulk cargo handling.",
  },
  {
    title: "Manual / Bangla Grab",
    image: "/services/manual grab.png",
    desc: "Reliable manual grabs for general cargo handling",
  },
  // {
  //   title: "Spare Parts Supply",
  //   image: "/services/spare parts.png",
  //   desc: "We supply all kinds of marine and industrial spare parts.",
  // },
  {
    title: "Excavator Supply",
    image: "/services/escavetor.jpg",
    desc: "Heavy-duty excavators for port and construction operations.",
  },
  {
    title: "Payloader (Wheel Loader) Supply",
    image: "/services/payloader.jpg",
    desc: "Efficient loading equipment for bulk materials.",
  },
  {
    title: "Shore Crane",
    image: "/services/shore.jpg",
    desc: "Heavy lifting solutions for port operations.",
  },
  {
    title: "Bolt Seal & Wire Seal",
    image: "/services/seal.jpg",
    desc: "Security seals for cargo and containers.",
  },
  {
    title: "Hull cleaning services",
    image: "/services/hull cleaning.jpg",
    desc: "Professional underwater hull cleaning services",
  },
  {
    title: "Cargo Hold Cleaning",
    image: "/services/Hold Cleaning.jpg",
    desc: "Complete cleaning solutions for cargo holds.",
  },
  {
    title: "Tank Cleaning Service",
    image: "/services/tank cleaning.jpg",
    desc: "Complete cleaning solutions for cargo holds.",
  },
  {
    title: "Chipping, Painting & Surface Treatment",
    image: "/services/surface preparation.jpg",
    desc: "Expert Surface preparation and coating services.",
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-white py-28 lg:py-32" ref={ref}>
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
            Sultan Fleet Serve
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-0.5 w-16 bg-[#e4a04f]" />
            <div className="h-0.5 w-6 bg-gray-300" />
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            Sultan Fleet Serve delivers a full spectrum of marine, logistics,
            and vessel support services across all major seaports of Bangladesh,
            including Chattogram, Mongla, and Payra. With a strong operational
            presence and experienced workforce, we ensure that every service is
            executed with precision, safety, and efficiency to meet
            international maritime standards.
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
