"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Navigation, Ruler, Weight } from 'lucide-react';

export default function PortInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="port" className="relative py-32 lg:py-40">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono text-primary text-xs tracking-[0.3em] mb-4">PORTS WE SERVE IN</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground tracking-tight uppercase">
            PORT OF CHITTAGONG
          </h2>
          <p className="mt-2 font-mono text-sm text-primary tracking-wider">BANGLADESH</p>
          <div className="mt-6 h-px w-16 bg-primary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden border border-border">
              <img
                src="https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/c1a0b0a5f_generated_308c52d6.png"
                alt="Chittagong Port panoramic view"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex gap-3 flex-wrap">
                  <StatPill icon={MapPin} value={`N 22° 16' 22.79"`} />
                  <StatPill icon={Navigation} value={`E 091° 49' 55.20"`} />
                  <StatPill icon={Ruler} value="245m Max Length" />
                  <StatPill icon={Weight} value="109,280t DWT" />
                </div>
              </div>
            </div>

            {/* Port Codes */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {['CHITTAGONG', 'MONGLA', 'PAYRA'].map((port) => (
                <div key={port} className="p-4 rounded-lg border border-border bg-card/50 text-center group hover:border-primary/30 transition-colors">
                  <div className="font-display font-bold text-sm text-foreground tracking-wider">{port}</div>
                  <div className="font-mono text-[9px] text-primary/50 mt-1">ACTIVE PORT</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="font-mono text-[10px] text-primary tracking-widest mb-4">UN/LOCODE: BDCGP</div>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              The heart of Bangladesh's economy relies on the Chittagong Port. It is the most significant port area that handles 92% of import and export deliveries of this country. Due to the geographical location, natural harbor, and sufficient resources, this port has become a promising regional seaport for trade and businesses all over Asia.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              This is one of the oldest ports in Asia that has a history from the 4th century BCE. Located at East Coast India, Bengal Bay in Bangladesh, it is also known as Chattogram.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Many vessels visiting Chittagong Port are our client. As we have offices in the same city, we can allocate our best resources here. Our services are not just in port, we also extend them offshore, in any location in Bangladesh water area.
            </p>

            {/* Technical specs card */}
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <div className="font-mono text-[10px] text-primary tracking-widest mb-4">PORT SPECIFICATIONS</div>
              <div className="space-y-3">
                <SpecRow label="MAX VESSEL LENGTH" value="245 meters" />
                <SpecRow label="MAX DRAUGHT" value="12.1 meters" />
                <SpecRow label="MAX DEADWEIGHT" value="109,280 tonnes" />
                <SpecRow label="IMPORT/EXPORT SHARE" value="92%" />
                <SpecRow label="HISTORY" value="4th Century BCE" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatPill({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border">
      <Icon className="w-3 h-3 text-primary" />
      <span className="font-mono text-[10px] text-foreground">{value}</span>
    </div>
  );
}

function SpecRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{label}</span>
      <span className="font-mono text-xs text-foreground font-semibold">{value}</span>
    </div>
  );
}