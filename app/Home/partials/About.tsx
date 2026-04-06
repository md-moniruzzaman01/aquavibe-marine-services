"use client"

import { motion } from "framer-motion";
import { MapPin, Ship, Users, BarChart3, Phone, Globe, Truck, Star } from "lucide-react";

export default function AboutModern() {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* UPPER SECTION: Split Image & Text */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left: Professional Image with Overlay */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              alt="Shipping Logistics" 
              className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
          </div>

          {/* Right: Modern Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase">
              Chittagong • Mongla • Payra
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Quick Transport and <br/> 
              <span className="text-red-600">Logistics Solutions</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our ship manning and management services deliver top-tier crewing solutions, 
              ensuring your vessels are operated by highly skilled professionals across all major ports in Bangladesh.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="flex gap-4">
                <div className="bg-red-100 p-3 rounded-lg h-fit">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Global Coverage</h4>
                  <p className="text-sm text-gray-500">Skilled crew & management for international waters.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-red-100 p-3 rounded-lg h-fit">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">On Time Delivery</h4>
                  <p className="text-sm text-gray-500">Prioritizing maintenance and operational safety.</p>
                </div>
              </div>
            </div>

            <button className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md transition-all shadow-lg hover:shadow-red-200 uppercase tracking-wider text-sm">
              Explore More
            </button>
          </div>
        </div>

        {/* LOWER SECTION: Stats & Location */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Location Facts */}
          <div className="space-y-6">
            <span className="text-red-600 font-bold text-sm tracking-widest uppercase">Some Facts</span>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
              #1 Place To Manage All Of <br/> Your Shipments
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Located at coordinates N 22° 16′ 22.79″ — E 091° 49′ 55.20″. 
              The official UN/Locode is BDCGP, ensuring fast and efficient service delivery for vessels visiting Chittagong.
            </p>
            
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border-l-4 border-red-600 w-fit">
              <div className="bg-red-600 p-3 rounded-full text-white">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Call for any query!</p>
                <p className="text-xl font-bold text-slate-900">+880 123 456 789</p>
              </div>
            </div>
          </div>

          {/* Right: Colored Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <StatCard count="1234" label="Happy Clients" icon={Users} color="bg-red-500" />
            <div className="space-y-4">
              <StatCard count="100%" label="Customer Reviews" icon={Star} color="bg-emerald-600" />
              <StatCard count="245m" label="Max Vessel Length" icon={Ship} color="bg-sky-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatCard({ count, label, icon: Icon, color }) {
  return (
    <div className={`${color} p-8 rounded-lg text-white shadow-lg flex flex-col justify-end min-h-[160px] transform transition-transform hover:-translate-y-1`}>
      <Icon className="w-8 h-8 mb-4 opacity-80" />
      <h2 className="text-3xl font-bold">{count}</h2>
      <p className="text-sm font-medium opacity-90">{label}</p>
    </div>
  );
}