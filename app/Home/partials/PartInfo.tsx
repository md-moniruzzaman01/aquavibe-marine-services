"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation, Ruler, Weight, Anchor } from "lucide-react";

const PORT_SPECS = [
  { label: "MAX VESSEL LENGTH", value: "245 meters" },
  { label: "MAX DRAUGHT", value: "12.1 meters" },
  { label: "MAX DEADWEIGHT", value: "109,280 tonnes" },
  { label: "IMPORT / EXPORT SHARE", value: "92% of Bangladesh" },
  { label: "UN / LOCODE", value: "BDCGP" },
  { label: "ESTABLISHED", value: "4th Century BCE" },
];

const PORTS = [
  {
    name: "Chittagong",
    code: "BDCGP",
    desc: "Main seaport — handles 92% of Bangladesh's international trade",
    active: true,
  },
  {
    name: "Mongla",
    code: "BDMGL",
    desc: "Second largest seaport located in the Sundarbans mangrove region",
    active: true,
  },
  {
    name: "Payra",
    code: "BDPYR",
    desc: "Bangladesh's newest deep-sea port in southern Patuakhali district",
    active: true,
  },
];

export default function PortInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="port" className="bg-white py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 hidden lg:block" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gray-100" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Service Coverage</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#060315] leading-tight max-w-2xl">
            Ports We{" "}
            <span className="text-[#FF3E41]">Operate In</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-xl leading-relaxed">
            Our operations span all three major seaports in Bangladesh with dedicated teams on ground for fast, efficient vessel turnaround.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Port image + specs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Port image */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
              <img
                src="https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/c1a0b0a5f_generated_308c52d6.png"
                alt="Port of Chittagong Bangladesh"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060315]/80 via-transparent to-transparent" />

              {/* Coordinate pills */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {[
                  { icon: MapPin, label: `N 22° 16' 22.79"` },
                  { icon: Navigation, label: `E 091° 49' 55.20"` },
                  { icon: Ruler, label: "245m Max" },
                  { icon: Weight, label: "109,280t DWT" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10"
                  >
                    <Icon className="w-3 h-3 text-[#51CFED]" />
                    <span className="font-mono text-[10px] text-white">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications table */}
            <div className="bg-[#060315] rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-2 mb-5">
                <Anchor className="w-4 h-4 text-[#FF3E41]" />
                <span className="font-mono text-xs text-[#51CFED] tracking-widest uppercase">Port Specifications</span>
              </div>
              <div className="space-y-3">
                {PORT_SPECS.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2.5 border-b border-white/5 last:border-0">
                    <span className="font-mono text-[10px] text-white/40 tracking-wider">{label}</span>
                    <span className="font-mono text-xs text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Port cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5"
          >
            <div className="text-gray-500 text-sm leading-relaxed mb-8">
              Aquavibe Marine Services has boots on the ground at each major port. Our Chittagong head office coordinates vessel requirements with speed and precision, while satellite teams manage Mongla and Payra operations.
            </div>

            {PORTS.map((port, i) => (
              <motion.div
                key={port.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-[#FF3E41]/20 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Number */}
                <div className="absolute top-4 right-5 font-black text-7xl text-gray-50 leading-none select-none group-hover:text-[#FF3E41]/5 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-black text-xl text-[#060315] group-hover:text-[#FF3E41] transition-colors">
                        {port.name}
                      </div>
                      <div className="font-mono text-[10px] text-[#51CFED] tracking-widest mt-0.5">{port.code}</div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="font-mono text-[9px] text-green-700 tracking-widest uppercase">Active</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{port.desc}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF3E41] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
              </motion.div>
            ))}

            {/* Coordinates highlight */}
            <div className="bg-gradient-to-r from-[#FF3E41]/10 to-[#51CFED]/10 border border-[#FF3E41]/20 rounded-2xl p-5">
              <div className="font-mono text-[10px] text-[#FF3E41] tracking-widest uppercase mb-2">Chittagong HQ Coordinates</div>
              <div className="font-black text-[#060315] text-sm">N 22° 16′ 22.79″ — E 091° 49′ 55.20″</div>
              <div className="text-gray-500 text-xs mt-1">6th Floor, 146/A Simla House, Agrabad, Chittagong 4100, Bangladesh</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}