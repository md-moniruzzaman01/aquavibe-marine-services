"use client";

import { Ship, MapPin, Anchor, Wrench, Package, ShieldCheck, DollarSign, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutUsSection() {
  const offerings = [
    {
      icon: <ShieldCheck className="text-[#e4a04f]" />,
      title: "Reliable Equipment",
      desc: "Premium Yokohama Fenders and marine gear sourced for durability and safety.",
    },
    {
      icon: <DollarSign className="text-[#e4a04f]" />,
      title: "Competitive Pricing",
      desc: "Flexible rates that help manage operational costs without sacrificing quality.",
    },
    {
      icon: <Users className="text-[#e4a04f]" />,
      title: "Professional Service",
      desc: "Expert guidance from equipment selection to chipping, painting, and cargo support.",
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-16 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: Content */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-bold tracking-widest text-[#e4a04f] uppercase">
                Established Excellence
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl font-black leading-tight text-[#08214a]">
                Sultan Fleet Serve: <br />
                Your Marine Partner
              </h2>
              <div className="mt-6 h-1 w-20 bg-[#e4a04f]" />
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Based in Chattogram, we are a premier one-stop solution for marine services in Bangladesh. 
              We specialize in **Yokohama Fender** supply and a comprehensive range of ship support 
              operations, driven by a team of experienced maritime professionals.
            </p>

            {/* Value Grid */}
            <div className="grid gap-6">
              {offerings.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-white shadow-sm border border-gray-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1d2128]">{item.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-[#08214a] text-white font-bold rounded-lg hover:bg-[#e4a04f] transition-all duration-300 shadow-lg hover:shadow-xl">
                Our Full Fleet Support
              </button>
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin size={18} className="text-[#e4a04f]" />
                <span className="text-sm font-medium">Chattogram • Mongla • Payra</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Visuals */}
          <div className="relative pt-12 lg:pt-0">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
                alt="Container Ship and Fenders"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
              />
              
              {/* Floating Experience Card */}
              <div className="absolute -top-6 -left-6 md:-left-12 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 hidden sm:block">
                <div className="text-4xl font-black text-[#08214a]">24/7</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-tighter">Support Available</div>
                <div className="mt-4 flex -space-x-2">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">
                        {i === 4 ? "+" : "US"}
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Bottom Overlay Info */}
            <div className="absolute -bottom-8 right-8 z-20 bg-[#e4a04f] text-white p-6 rounded-2xl shadow-xl max-w-xs">
               <div className="flex items-center gap-3 mb-2">
                 <Ship size={24} />
                 <span className="font-bold">Port Logistics</span>
               </div>
               <p className="text-xs text-orange-50/80 leading-relaxed">
                 Expert vessel cleaning, chipping, painting, and cargo support at all major Bangladesh seaports.
               </p>
            </div>

            {/* Decorative Grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] border-2 border-dashed border-gray-100 rounded-[3rem] -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}