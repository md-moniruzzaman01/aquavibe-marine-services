"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, CheckCircle, Globe, Anchor } from "lucide-react";

const CERTIFICATIONS = [
  {
    icon: Shield,
    title: "Bangladesh Merchant Shipping Ordinance",
    body: "Fully registered and licensed under Bangladesh Merchant Shipping Ordinance, 1983 — authorizing operations across all national seaports.",
    badge: "GOVT. REGISTERED",
    color: "text-[#FF3E41]",
    bg: "bg-[#FF3E41]/10",
    border: "border-[#FF3E41]/20",
  },
  {
    icon: Award,
    title: "ISO Quality Management",
    body: "Our procurement and supply processes follow ISO 9001-compliant quality management principles ensuring consistency and reliability.",
    badge: "ISO COMPLIANT",
    color: "text-[#51CFED]",
    bg: "bg-[#51CFED]/10",
    border: "border-[#51CFED]/20",
  },
  {
    icon: Globe,
    title: "BIMCO Associate Member",
    body: "Associated with the Baltic and International Maritime Council (BIMCO), the world's largest international shipping association.",
    badge: "BIMCO ASSOCIATE",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
  },
  {
    icon: Anchor,
    title: "Port Authority Approved",
    body: "Approved and accredited service provider at the Port of Chittagong (BDCGP), Port of Mongla (BDMGL), and Port of Payra (BDPYR).",
    badge: "PORT APPROVED",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
];

const COMPLIANCE_POINTS = [
  "All marine spare parts sourced from OEM-approved global suppliers",
  "Bunker and lube oil supply meets MARPOL Annex VI requirements",
  "Provisions sourced from HACCP-certified food suppliers",
  "Safety equipment compliant with SOLAS and IMO standards",
  "24/7 documentation support for customs clearance",
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Accreditations</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-[#060315] leading-tight max-w-xl">
              Certified &{" "}
              <span className="text-[#FF3E41]">Compliant</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-mono">
              Our operations meet international maritime regulations and quality standards so your vessels always receive compliant, certified supplies.
            </p>
          </div>
          <div className="mt-8 h-px bg-gray-100" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Certification cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-white border ${cert.border} rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${cert.bg.replace("/10", "")} opacity-60 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />

                <div className={`w-11 h-11 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center mb-4 transition-colors`}>
                  <cert.icon className={`w-5 h-5 ${cert.color}`} />
                </div>

                <div className={`inline-block px-2.5 py-1 rounded-full ${cert.bg} border ${cert.border} mb-3`}>
                  <span className={`font-mono text-[9px] ${cert.color} tracking-widest uppercase`}>{cert.badge}</span>
                </div>

                <h4 className="font-bold text-[#060315] text-sm leading-snug mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{cert.body}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Compliance checklist + visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?auto=format&fit=crop&q=80&w=800"
                alt="Maritime compliance and certification"
                className="w-full h-52 object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060315]/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-mono text-[10px] text-[#51CFED] tracking-widest uppercase">International Maritime Compliance</span>
              </div>
            </div>

            <div className=" rounded-2xl p-7 border border-white/5">
              <div className="flex items-center gap-2 mb-5">
                <Shield className="w-4 h-4 text-[#FF3E41]" />
                <span className="font-mono text-xs text-[#51CFED] tracking-widest uppercase">Compliance Standards Met</span>
              </div>
              <div className="space-y-3.5">
                {COMPLIANCE_POINTS.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-4 h-4 text-[#51CFED] flex-shrink-0 mt-0.5" />
                    <span className=" text-sm leading-relaxed">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* IMO / MARPOL compliance badge strip */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { code: "SOLAS", label: "Safety Standard" },
                { code: "MARPOL", label: "Environmental" },
                { code: "STCW", label: "Crew Standard" },
              ].map(({ code, label }) => (
                <div key={code} className="text-center py-4 rounded-xl border border-gray-100 bg-gray-50">
                  <div className="font-black text-[#060315] text-sm">{code}</div>
                  <div className="font-mono text-[9px] text-gray-400 tracking-widest uppercase mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
