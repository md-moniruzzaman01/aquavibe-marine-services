import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-secondary/30">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[65vh] min-h-[600px] w-full flex items-end pb-20 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover scale-105"
          priority
        />
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-8 transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Portfolio
          </Link>

          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light border-l-4 border-secondary pl-6">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT AREA ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFORMATION ARCHITECTURE */}
          <div className="lg:col-span-8">
            
            {/* 1. HIGHLIGHTS GRID */}
            <div className="mb-24">
              <div className="flex items-center gap-4 mb-10">
                <span className="h-px w-12 bg-secondary" />
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest">Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {service.bulletPoints?.map((item: string, i: number) => (
                  <div key={i} className="group p-8 bg-white border border-slate-200 rounded-xl hover:border-primary transition-all duration-300 shadow-sm">
                    <div className="w-10 h-10 mb-4 rounded-lg bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="font-bold text-slate-800 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. PROGRESS ROADMAP (HORIZONTAL DESIGN) */}
            <div className="mb-24">
               <h2 className="text-3xl font-bold text-slate-900 mb-12">Operational Process</h2>
               <div className="relative">
                 {/* Decorative Line */}
                 <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 hidden md:block" />
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                   {service.process?.slice(0, 3).map((step: string, i: number) => (
                     <div key={i} className="flex flex-col">
                       <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-6 ring-8 ring-slate-50">
                         0{i + 1}
                       </div>
                       <p className="text-slate-600 font-medium text-[15px] leading-relaxed pr-4">
                         {step}
                       </p>
                     </div>
                   ))}
                 </div>
               </div>
            </div>

            {/* 3. VALUE PROPOSITION */}
            <div className="bg-slate-900 rounded-[2rem] p-12 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
               <h3 className="text-3xl font-bold mb-10 relative z-10">Why Sultan Fleet Serve?</h3>
               <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                 {service.whyUs?.map((item: string, i: number) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="mt-1.5 w-4 h-4 rounded-full border-2 border-secondary flex-shrink-0" />
                     <p className="text-slate-300 text-sm leading-relaxed">{item}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* RIGHT: FLOATING CONVERSION COLUMN */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              
              {/* MAIN CTA CARD */}
              <div className="relative group overflow-hidden bg-primary p-10 rounded-[2rem] shadow-2xl shadow-primary/20 transition-transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45z"/></svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Request Expertise</h3>
                <p className="text-blue-100/70 mb-8 text-sm leading-relaxed">
                  Tailored maritime solutions for your specific vessel requirements at {service.coverage?.[0] || 'all ports'}.
                </p>

                <Link
                  href="/contact-us"
                  className="flex items-center justify-center w-full bg-secondary text-white py-5 rounded-xl font-black uppercase tracking-tighter hover:bg-white hover:text-primary transition-all active:scale-95"
                >
                  Initiate Inquiry
                </Link>
                
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                   <div className="text-center">
                     <p className="text-xs text-blue-200/50 uppercase">Response Time</p>
                     <p className="text-white font-bold">&lt; 2 Hours</p>
                   </div>
                   <div className="w-px h-8 bg-white/10" />
                   <div className="text-center">
                     <p className="text-xs text-blue-200/50 uppercase">Availability</p>
                     <p className="text-white font-bold">24 / 7</p>
                   </div>
                </div>
              </div>

              {/* COVERAGE MINI-MAP/LIST */}
              <div className="bg-white border border-slate-200 p-8 rounded-[2rem]">
                <h4 className="text-slate-900 font-bold mb-6 flex items-center gap-2">
                   <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                   Service Coverage
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.coverage?.map((port: string) => (
                    <span key={port} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 rounded-lg text-xs font-bold uppercase tracking-tight">
                      {port}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}