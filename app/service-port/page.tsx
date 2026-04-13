"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Navigation, 
  Anchor, 
  CheckCircle2, 
  ArrowUpRight, 
  Clock, 
  Shield 
} from "lucide-react";

const PORTS = [
  {
    id: "BDCGP",
    name: "Port of Chittagong",
    fullTitle: "Chattogram Seaport (Principal Hub)",
    description: "The primary gateway for Bangladesh's international trade. We maintain a full-scale warehouse and technical team here for 24-hour response.",
    coordinates: "22.23° N, 91.82° E",
    services: ["Yokohama Fender Supply", "Hull Cleaning", "Emergency Repair", "Provisions"],
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: "BDMGL",
    name: "Port of Mongla",
    fullTitle: "Mongla River Port",
    description: "Strategically located for inland distribution. We provide specialized shallow-water fendering and jetty support services.",
    coordinates: "22.48° N, 89.59° E",
    services: ["Ship Stores", "Bunker Supply", "Spare Parts Delivery", "Cargo Support"],
    color: "from-emerald-600 to-teal-700"
  },
  {
    id: "BDPYR",
    name: "Port of Payra",
    fullTitle: "Payra Deep Sea Port",
    description: "Bangladesh’s newest maritime gateway. Our mobile teams are fully equipped to handle deep-water vessel requirements and off-shore fendering.",
    coordinates: "22.01° N, 90.27° E",
    services: ["Offshore Support", "Equipment Rental", "Fresh Water Supply", "Safety Inspections"],
    color: "from-orange-500 to-red-600"
  }
];

export default function ServicePorts() {
  return (
    <main className="bg-white pt-24 pb-20">
      {/* Header Section */}
      <section className="relative py-20 bg-[#08214a] overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#e4a04f] font-mono text-xs tracking-widest uppercase">Strategic Presence</span>
            <h1 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
              Port Coverage & <br /><span className="text-[#e4a04f]">Logistics Hubs</span>
            </h1>
            <p className="text-blue-100/60 max-w-2xl mx-auto text-lg">
              Sultan Fleet Serve operates 24/7 across all major Bangladesh seaports, ensuring your vessel is protected and supplied regardless of the berth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Port Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {PORTS.map((port, idx) => (
            <motion.div
              key={port.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className={`h-3 bg-gradient-to-r ${port.color}`} />
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-50 rounded-2xl text-[#08214a]">
                    <Anchor size={24} />
                  </div>
                  <span className="text-[10px] font-black bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                    {port.id}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#08214a] mb-2">{port.name}</h3>
                <div className="flex items-center gap-2 text-[#e4a04f] text-xs font-mono mb-4">
                  <Navigation size={12} /> {port.coordinates}
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {port.description}
                </p>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Available Services</p>
                  {port.services.map((service) => (
                    <div key={service} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-green-500 flex-shrink-0" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="w-full py-4 bg-gray-50 hover:bg-[#08214a] hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 border-t border-gray-100">
                Contact Port Agent <ArrowUpRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logistics Advantages */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#08214a] text-[#e4a04f] rounded-2xl flex items-center justify-center shadow-lg">
              <Clock size={24} />
            </div>
            <h4 className="text-xl font-bold text-[#08214a]">Express Mobilization</h4>
            <p className="text-gray-500 text-sm">Our teams are stationed within 15km of each port entrance, allowing for mobilization within 2 hours of inquiry.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#08214a] text-[#e4a04f] rounded-2xl flex items-center justify-center shadow-lg">
              <Shield size={24} />
            </div>
            <h4 className="text-xl font-bold text-[#08214a]">On-Shore Warehousing</h4>
            <p className="text-gray-500 text-sm">We maintain dedicated inventory of Yokohama Fenders and critical engine spares at our Chittagong facility.</p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 bg-[#08214a] text-[#e4a04f] rounded-2xl flex items-center justify-center shadow-lg">
              <MapPin size={24} />
            </div>
            <h4 className="text-xl font-bold text-[#08214a]">Inter-Port Logistics</h4>
            <p className="text-gray-500 text-sm">If a vessel changes its calling port from Chittagong to Mongla, our logistics network handles the cargo transfer seamlessly.</p>
          </div>
        </div>
      </section>

      {/* Local Support Section */}
      <section className="bg-gray-50 py-20 rounded-[3rem] mx-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#08214a] mb-6">Navigating Bangladesh Waters?</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our local expertise ensures that your vessel complies with port-specific regulations at BDCGP, BDMGL, and BDPYR. We handle the paperwork, customs, and delivery so your crew can focus on the voyage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <div className="px-8 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Central Operations</p>
                <p className="text-[#08214a] font-bold">+880 (Port Office Number)</p>
             </div>
             <div className="px-8 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm">
                <p className="text-[10px] uppercase text-gray-400 font-bold mb-1">Email Support</p>
                <p className="text-[#08214a] font-bold">sultanfleetserve@gmail.com</p>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}