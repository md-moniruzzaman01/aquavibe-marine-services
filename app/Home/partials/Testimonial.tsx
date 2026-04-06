"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
  port: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Capt. Rahman Al-Farouq",
    role: "Master",
    company: "MV Sea Pioneer",
    initials: "RF",
    quote:
      "Aquavibe Marine Services has been our go-to ship chandler in Chittagong for over two years. Their provisions arrive fresh, their spare parts are genuine, and their response time is unmatched. Highly recommended for all visiting vessels.",
    rating: 5,
    port: "Chittagong",
  },
  {
    id: 2,
    name: "Mr. Kim Sung-Jin",
    role: "Fleet Superintendent",
    company: "Korea Shipping Co.",
    initials: "KS",
    quote:
      "We coordinate all our vessel supplies in Bangladesh through Aquavibe. Their professionalism and ability to handle last-minute requirements 24/7 has saved us enormous time and cost. A truly reliable partner.",
    rating: 5,
    port: "All Ports",
  },
  {
    id: 3,
    name: "Mr. Sanjay Verma",
    role: "Ship Manager",
    company: "IndoShip Management",
    initials: "SV",
    quote:
      "From bunker supply to emergency engine repairs — Aquavibe delivers on every front. Their certified engineers resolved our main engine issue within hours of arrival at Mongla Port. Exceptional service.",
    rating: 5,
    port: "Mongla",
  },
  {
    id: 4,
    name: "Capt. Ahmed Al-Rashidi",
    role: "Technical Manager",
    company: "Gulf Maritime LLC",
    initials: "AR",
    quote:
      "The team at Aquavibe is knowledgeable, efficient and always available. They understand the maritime industry's demands and consistently go above and beyond. Our vessels always leave Bangladesh well-provisioned.",
    rating: 5,
    port: "Payra",
  },
];

export default function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#060315] overflow-hidden py-24 lg:py-32" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF3E41]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#51CFED]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#FF3E41]" />
            <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-px w-8 bg-[#FF3E41]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E41] to-[#51CFED]">
              Clients Say
            </span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-lg mx-auto leading-relaxed">
            Trusted by ship masters, fleet managers and maritime companies from around the world.
          </p>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white/5 hover:bg-white/8 border border-white/10 hover:border-[#FF3E41]/30 rounded-2xl p-7 transition-all duration-300 overflow-hidden"
            >
              {/* Large quote icon bg */}
              <Quote className="absolute top-4 right-5 w-16 h-16 text-white/3 rotate-180" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#FF3E41] text-[#FF3E41]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/70 text-sm leading-relaxed italic mb-6">
                "{item.quote}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4">
                {/* Avatar with initials */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#FF3E41] to-[#51CFED] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xs">{item.initials}</span>
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.name}</div>
                  <div className="font-mono text-[10px] text-white/40 tracking-wider">
                    {item.role} — {item.company}
                  </div>
                </div>
                <div className="ml-auto">
                  <div className="text-right px-3 py-1 rounded-full bg-[#51CFED]/10 border border-[#51CFED]/20">
                    <span className="font-mono text-[9px] text-[#51CFED] tracking-widest uppercase">{item.port}</span>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF3E41] to-[#51CFED] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-6 text-center"
        >
          {[
            { value: "500+", label: "Vessels Served" },
            { value: "3", label: "Active Ports" },
            { value: "24/7", label: "Operations" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map(({ value, label }) => (
            <div key={label} className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-2xl font-black text-white mb-1">{value}</div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}