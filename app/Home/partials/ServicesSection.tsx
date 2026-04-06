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
    desc: "Premium quality marine fenders for vessel protection during berthing and mooring operations.",
  },
  {
    title: "Crane Grab Rental",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=600",
    desc: "Professional crane and grab equipment rental services for port and vessel cargo operations.",
  },
  {
    title: "Ship Repair & Maintenance",
    image: "/services/1-min-2.png",
    desc: "Comprehensive ship repair, hull maintenance and overhaul services by certified marine engineers.",
  },
  {
    title: "Bunker Supply",
    image: "/services/7-min.png",
    desc: "Reliable physical bunker and lubricant supply across all major Bangladesh ports 24/7.",
  },
  {
    title: "Provision Supply",
    image: "/services/4-min.png",
    desc: "Fresh and preserved food provision supply meeting international maritime health standards.",
  },
  {
    title: "Bond Store Supply",
    image: "/services/5-min.png",
    desc: "Customs-bonded ship store supply including duty-free goods and consumables for vessels.",
  },
  {
    title: "Ship Store Supply",
    image: "/services/6-min.png",
    desc: "Full range of deck, engine room and cabin stores delivered directly to your vessel.",
  },
  {
    title: "Cleaning Services",
    image: "/services/8-min.png",
    desc: "Professional vessel cleaning, tank cleaning and environmental compliance services.",
  },
  {
    title: "Security Services",
    image: "/services/10-min.png",
    desc: "Trained maritime security personnel and port security services for vessel protection.",
  },
  {
    title: "Repairing Services",
    image: "/services/11.png",
    desc: "Expert repair services for mechanical, electrical and structural vessel components.",
  },
  {
    title: "Marine Lube Oil",
    image: "/services/12.png",
    desc: "Genuine marine lubricants from top brands ensuring optimal engine performance.",
  },
  {
    title: "Crane Spare Parts",
    image: "/services/BOND-STORE-SUPPLY.png",
    desc: "Ship crane repair and comprehensive spare parts supply for all crane types and brands.",
  },
];

const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-blue-700" />
            <span className="text-blue-700 font-mono text-xs tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#060315] leading-tight max-w-xl">
              OUR {" "}
              <span className="text-blue-700">SERVICES</span>
            </h2>
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              Comprehensive ship chandling and maritime services delivered across all major ports in Bangladesh — 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gray-100" />
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#FF3E41]/20 transition-all duration-400 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&q=80&w=600";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060315]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Hover icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#FF3E41] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="font-bold text-[#060315] text-sm leading-snug mb-2 group-hover:text-[#FF3E41] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF3E41] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
