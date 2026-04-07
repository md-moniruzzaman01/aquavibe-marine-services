"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react";
import CTABanner from "@/app/Home/partials/CTABanner";

interface ProductPageProps {
  title: string;
  subtitle: string;
  tag: string;
  imageSrc: string;
  description: string;
  features: string[];
}

export default function ProductPageTemplate({
  title,
  subtitle,
  tag,
  imageSrc,
  description,
  features,
}: ProductPageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <main className="pt-20 bg-gray-50">
      {/* Dynamic Header */}
      <section className="relative bg-[#060315] pt-24 pb-32 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #51CFED 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#FF3E41]/5 blur-3xl pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Go Back Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#FF3E41]" />
                <span className="text-[#FF3E41] font-mono text-xs tracking-[0.3em] uppercase">{tag}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                {title}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                {subtitle}
              </p>
            </div>
            
            {/* Quick Contact Box floating right */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm self-start">
              <div className="font-mono text-[10px] text-[#51CFED] tracking-widest uppercase mb-4">Immediate Order</div>
              <a href="tel:+8801728841299" className="flex items-center gap-3 mb-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#FF3E41]/10 border border-[#FF3E41]/20 flex items-center justify-center transition-colors group-hover:bg-[#FF3E41]">
                  <Phone className="w-4 h-4 text-[#FF3E41] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Call 24/7</div>
                  <div className="text-white/60 text-xs">+880 1728 841299</div>
                </div>
              </a>
              <a href="mailto:aquavibe2023@gmail.com" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-[#51CFED]/10 border border-[#51CFED]/20 flex items-center justify-center transition-colors group-hover:bg-[#51CFED]">
                  <Mail className="w-4 h-4 text-[#51CFED] group-hover:text-[#060315] transition-colors" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">Email Inquiry</div>
                  <div className="text-white/60 text-xs">aquavibe2023@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative -mt-16 pb-24" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-md h-[500px]"
              >
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right: Content details */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-4"
              >
                <h3 className="text-2xl font-black text-[#060315] mb-6">Service Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-10 whitespace-pre-line">
                  {description}
                </p>

                <h3 className="text-xl font-bold text-[#060315] mb-6">Key Specifications & Benefits</h3>
                <div className="space-y-4 mb-10">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-[#51CFED]" />
                      </div>
                      <p className="text-gray-600 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <span className="font-mono text-xs text-gray-400 tracking-widest uppercase block mb-3">Service Availability</span>
                  <div className="flex gap-2">
                    {["CHITTAGONG", "MONGLA", "PAYRA"].map((port) => (
                      <div key={port} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-[10px] font-bold text-[#060315]">
                        {port}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
