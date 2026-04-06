"use client"

import { motion } from "framer-motion";
import { MapPin, Ship, Users, BarChart3 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">
            We offer same services in all sea ports
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
            Chittagong • Mongla • Payra
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-gray-800">
            Shipping & Logistics Service Provider in Bangladesh
          </h2>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">

          {/* Left - Service */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ship Manning and Management
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Our ship manning and management services deliver top-tier crewing
              solutions, ensuring your vessels are operated by highly skilled
              professionals. We prioritize optimal maintenance, regulatory
              compliance, and operational safety, guaranteeing efficient and
              reliable marine operations.
            </p>

            <p className="mt-4 text-gray-600">
              Trust us to navigate your fleet’s success.
            </p>

            {/* Feature highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Feature icon={Users} text="Skilled Crew" />
              <Feature icon={Ship} text="Fleet Management" />
              <Feature icon={BarChart3} text="Operational Efficiency" />
              <Feature icon={MapPin} text="All Ports Coverage" />
            </div>
          </div>

          {/* Right - At a Glance */}
          <div className="bg-gray-50 border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              At a Glance
            </h4>

            <ul className="text-sm text-gray-600 space-y-2">
              <li>Container Ship (27%)</li>
              <li>Bulk Carrier (21%)</li>
              <li>Oil / Chemical Tanker (14%)</li>
              <li>General Cargo (12%)</li>
              <li>Oil Products Tanker (7%)</li>
            </ul>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p><strong>Max Vessel Length:</strong> 245 meters</p>
              <p><strong>Max Draught:</strong> 12.1 meters</p>
              <p><strong>Max Deadweight:</strong> 109,280T</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-16 border-t pt-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Location
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Located at East Coast India, Bengal Bay in Bangladesh at coordinates
            N 22° 16′ 22.79″ — E 091° 49′ 55.20″. The official UN/Locode is BDCGP,
            also known as Chattogram.
          </p>

          <p className="mt-4 text-gray-600">
            Many vessels visiting Chittagong Port are our clients. With offices
            in the same city, we ensure fast and efficient service delivery.
          </p>
        </div>

      </div>
    </section>
  );
}

/* Small reusable component */
function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-700">
      <Icon className="w-4 h-4 text-blue-600" />
      {text}
    </div>
  );
}