
"use client"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Anchor, Settings, Droplets, Fuel, Ship, UtensilsCrossed } from 'lucide-react';

const PRODUCTS = [
  {
    icon: Anchor,
    title: 'Marine Fender Supply',
    desc: 'We are a reputed ship spare parts supplier in Bangladesh. We supply ship spare parts to the global market from our base in Bangladesh.',
  },
  {
    icon: Settings,
    title: 'Ship Spare Parts',
    desc: 'We are a reputed ship spare parts supplier in Bangladesh. We supply ship spare parts to the global market from our base in Bangladesh.',
  },
  {
    icon: Droplets,
    title: 'Marine Lube Oil',
    desc: 'We have a team of experts who are well-versed with all aspects of this industry and they provide our clients with the best quality lub oil.',
  },
  {
    icon: Fuel,
    title: 'Physical Bunker & Lubricant Supply',
    desc: 'We have a team of experts who are well-versed with all aspects of this industry and they provide our clients with the best quality lub oil.',
  },
  {
    icon: Ship,
    title: 'Ship Stores Supply',
    desc: 'We are the largest ship store supplier in south Asia. We have a large variety of products and we make sure that our clients get the best quality.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Provision Supply',
    desc: 'We are one of the leading provision suppliers in Bangladeshi ports. We are always on top of our game, providing the best services.',
  },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="products" className="relative py-24 lg:py-32 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono text-primary text-xs tracking-[0.3em] mb-4">SUPPLY CATALOG</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground tracking-tight uppercase">
            OUR PRODUCTS
          </h2>
          <div className="mt-6 h-px w-16 bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-8 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/3 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/40 transition-colors">
                  <product.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-mono text-[9px] text-primary/50 tracking-widest mb-2">
                  PRD—{String(i + 1).padStart(3, '0')}
                </div>
                <h3 className="font-display font-bold text-base text-foreground tracking-wider uppercase mb-3">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}