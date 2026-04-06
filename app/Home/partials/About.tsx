"use client";

import { Ship, MapPin, Anchor } from "lucide-react";

export default function ShippingSection() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* ===== LEFT IMAGE ===== */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
            alt="Shipping Bangladesh"
            className="rounded-2xl shadow-xl h-[500px] w-full object-cover"
          />

          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white shadow-lg rounded-xl p-4 flex items-center gap-3">
            <Ship className="text-blue-600" />
            <div>
              <div className="font-bold text-sm">All Major Ports Covered</div>
              <div className="text-xs text-gray-500">
                Chittagong • Mongla • Payra
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div className="space-y-6">
          {/* Small label */}
          <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
            Shipping & Logistics
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
            Service Provider in Bangladesh
          </h2>

          {/* Subheading */}
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <Anchor size={18} /> Ship Manning & Management
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            We deliver top-tier ship manning and management services, ensuring
            vessels are operated by highly skilled professionals. Our focus on
            maintenance, regulatory compliance, and operational safety guarantees
            efficient and reliable marine operations.
          </p>

          {/* Ports */}
          <div className="flex flex-wrap gap-3">
            {["Chittagong", "Mongla", "Payra"].map((port) => (
              <span
                key={port}
                className="px-4 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-full"
              >
                {port}
              </span>
            ))}
          </div>

          {/* ===== AT A GLANCE ===== */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Top Vessel</p>
              <p className="font-bold">Container (27%)</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Bulk Carrier</p>
              <p className="font-bold">21%</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Max Length</p>
              <p className="font-bold">245m</p>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Max Draught</p>
              <p className="font-bold">12.1m</p>
            </div>
          </div>

          {/* Extra Info */}
          <p className="text-sm text-gray-500">
            Fleet includes Bulk Carriers, Oil & Chemical Tankers, General Cargo,
            and Oil Product Tankers. Maximum Deadweight: <b>109,280 DWT</b>.
          </p>

          {/* Location */}
          <div className="border-t pt-4 flex gap-3 items-start">
            <MapPin className="text-blue-700 mt-1" size={18} />
            <p className="text-sm text-gray-600">
              Located in Chattogram (BDCGP), Bay of Bengal, Bangladesh — enabling
              fast response and efficient vessel servicing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}