"use client";

import { Ship, MapPin, Anchor, Wrench, Package } from "lucide-react";

export default function ShippingSection() {
  return (
    <section className="relative  py-28 px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== TOP HEADING (CENTERED - PREMIUM) ===== */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-[#08214a] font-semibold uppercase tracking-[0.3em] mb-3">
            Shipping & Logistics
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-[#1d2128]">
            End-to-End Maritime
            <br />
            Service Solutions
          </h2>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-0.5 w-16 bg-[#e4a04f]" />
            <div className="h-0.5 w-6 bg-gray-300" />
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            We provide comprehensive shipping, logistics, and vessel support
            services across Bangladesh, ensuring operational efficiency,
            compliance, and reliability at every stage.
          </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* ===== IMAGE WITH FLOATING CARD ===== */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
              alt="Shipping Bangladesh"
              className="rounded-2xl shadow-xl h-[520px] w-full object-cover"
            />

            {/* Floating Info Card */}
            <div className="absolute -bottom-10 right-6 bg-white border border-gray-200 shadow-xl rounded-xl p-6 w-[280px]">
              <div className="flex items-center gap-3 mb-3">
                <Ship className="text-[#08214a]" />
                <p className="font-semibold text-sm text-[#1d2128]">
                  Port Coverage
                </p>
              </div>

              <p className="text-xs text-gray-500 mb-3">
                Operating across all major ports in Bangladesh
              </p>

              <div className="flex flex-wrap gap-2">
                {["Chittagong", "Mongla", "Payra"].map((port) => (
                  <span
                    key={port}
                    className="text-xs px-3 py-1 bg-[#F8F2F0] rounded-full text-gray-700"
                  >
                    {port}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ===== RIGHT SIDE CONTENT ===== */}
          <div className="space-y-8">
            
            {/* Service Block */}
            <div>
              <h3 className="text-xl font-semibold text-[#08214a] flex items-center gap-2 mb-3">
                <Anchor size={18} /> Ship Manning & Management
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Professional crew management and vessel operations with strict
                compliance to international maritime standards, ensuring safety,
                efficiency, and reliability.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
                <Package className="text-[#e4a04f] mb-3" />
                <h4 className="font-semibold text-[#1d2128] mb-1">
                  Marine Supplies
                </h4>
                <p className="text-sm text-gray-500">
                  Provision, bonded stores, and technical equipment supply.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
                <Wrench className="text-[#e4a04f] mb-3" />
                <h4 className="font-semibold text-[#1d2128] mb-1">
                  Ship Repair
                </h4>
                <p className="text-sm text-gray-500">
                  On-demand maintenance and technical repair solutions.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
                <Ship className="text-[#e4a04f] mb-3" />
                <h4 className="font-semibold text-[#1d2128] mb-1">
                  Import & Export
                </h4>
                <p className="text-sm text-gray-500">
                  Oil, food, and cargo logistics handled efficiently.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
                <Anchor className="text-[#e4a04f] mb-3" />
                <h4 className="font-semibold text-[#1d2128] mb-1">
                  Spare Parts
                </h4>
                <p className="text-sm text-gray-500">
                  Fast delivery of essential marine spare components.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-3 items-start pt-4 border-t border-gray-200">
              <MapPin className="text-[#08214a] mt-1" size={18} />
              <p className="text-sm text-gray-600">
                Based in Chattogram, Bangladesh — enabling fast response and
                efficient vessel servicing across all major seaports.
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="px-6 py-3 bg-[#08214a] text-white font-semibold rounded-md hover:bg-[#0a2a63] transition-all duration-300 shadow">
                Explore All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}