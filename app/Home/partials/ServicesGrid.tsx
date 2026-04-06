"use client"

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const SERVICES = [
  { title: "Marine Fender Suppoly", image: "/services/2-min-2.png" },
  { title: "Crane grab rental service", image: "services/2-min-2.png" },
  { title: "Ship reparing & maintenance", image: "services/1-min-2.png" },
  { title: "Bunker Supply", image: "services/7-min.png" },
  { title: "Provision supply", image: "services/4-min.png" },
  { title: "Bond store supply", image: "services/5-min.png" },
  { title: "Store Supply", image: "services/6-min.png" },
  { title: "Cleaning Service", image: "services/8-min.png" },
  { title: "Security serice", image: "services/10-min.png" },
  { title: "Repaing serivces", image: "services/11.png" },
  { title: "Marine Lube oil", image: "services/12.png" },
  { title: "Ship Crane Repair & Crane spare parts supply services", image: "services/BOND-STORE-SUPPLY.png" },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-gray-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground tracking-tight uppercase">
            OUR SERVICES
          </h2>
          <div className="mt-6 h-px w-16 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-xl overflow-hidden bg-[#004d95] transition-all duration-500 cursor-pointer"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
       <div className="absolute inset-0 bg-gradient-to-t from-[#004d95]/30 via-[#004d95]/20 to-transparent" />
        {/* Glassmorphism overlay on hover */}
        <div className="absolute inset-0 bg-[#004d95]/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
     
      <div className="p-2.5 pb-3.5 ">
        <div className="font-mono text-[9px] text-white tracking-widest mb-2">
          SRV—{String(index + 1).padStart(3, '0')}
        </div>
        <h3 className="font-display font-bold text-sm text-white tracking-wider uppercase group-hover:text-primary transition-colors">
          {service.title}
        </h3>
      </div>
        
    </motion.div>
  );
}