"use client"

import { motion } from "framer-motion";
import { MapPin, CheckCircle2, Anchor } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fafd] rounded-l-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#fffcf8] rounded-r-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-[1222px] mx-auto px-4">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:max-w-none max-w-lg mx-auto w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] w-full border border-gray-100">
              <Image 
                src="/container-ship-6631117_1280.jpg"
                alt="Container Ship in Chittagong Port"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08214a]/70 via-transparent to-transparent" />
            </div>

            {/* Glassmorphism Stat Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl border border-white/50 hidden sm:block max-w-[280px] sm:max-w-sm z-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#e4a04f]/10 rounded-full flex items-center justify-center flex-shrink-0 border border-[#e4a04f]/20">
                  <Anchor className="w-5 h-5 text-[#e4a04f]" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-[#08214a] text-lg sm:text-xl">Chittagong Port</h4>
                  <p className="text-[#e4a04f] text-[13px] font-semibold uppercase tracking-wider mt-0.5">Strategic Hub</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Max Vessel Length</span>
                  <span className="font-bold text-[#08214a]">245m</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Max Draught</span>
                  <span className="font-bold text-[#08214a]">12.1m</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#e4a04f] font-mono text-xs tracking-[0.3em] uppercase font-bold">About Sultan Fleet Serve</span>
              <div className="h-[2px] w-12 bg-[#e4a04f]/50" />
            </div>

            <h2 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08214a] leading-[1.2] mb-6">
              Premium Shipping & Logistics in Bangladesh
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-[15px] sm:text-base">
               Sultan Fleet Serve delivers top-tier crewing and management solutions, ensuring your vessels are operated by highly skilled professionals. Based in Chittagong with coverage across Mongla and Payra, we prioritize optimal maintenance, regulatory compliance, and operational safety.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-10">
              {[
                "Highly Skilled Crew",
                "Strict Compliance",
                "All Sea Ports Coverage",
                "Advanced Fleet Management",
                "Round-the-clock Services",
                "Operational Efficiency"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-[#08214a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e4a04f]/20 transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#08214a] group-hover:text-[#e4a04f] transition-colors" />
                  </div>
                  <span className="text-gray-700 text-[14px] font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-5 sm:p-6 flex items-start gap-4 hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#e4a04f]" />
              <MapPin className="w-7 h-7 text-[#08214a] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-poppins font-bold text-[#08214a] mb-2">Strategic Location</h4>
                <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed">
                  Located at East Coast India, Bengal Bay in Bangladesh. 
                  With offices in Chattogram, we ensure fast and efficient service delivery to all vessels 24/7.
                </p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}