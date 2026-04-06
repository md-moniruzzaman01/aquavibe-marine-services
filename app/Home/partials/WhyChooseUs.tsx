"use client"

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What types of ship repair services do you offer?',
    a: 'We offer a variety of ship repair services, including Main engine Overhauling, hull repairs, electrical repairs, and more.',
  },
  {
    q: 'Do you offer emergency ship repair services?',
    a: 'Yes, we offer 24/7 emergency ship repair services to assist with any unexpected repairs that may arise.',
  },
  {
    q: 'What types of ship supply services do you offer?',
    a: 'We offer a variety of ship supply services, including Provision Supply, Ship Store supply, and Marine Spare Parts Supply.',
  },
  {
    q: 'What certifications and qualifications do your technicians hold?',
    a: 'Our technicians are class-approved and qualified in welding, electrical, and more. We ensure that all of our team members are fully trained and qualified to perform the services we offer.',
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="relative py-32 lg:py-40 bg-gray-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Image + Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-primary text-xs tracking-[0.3em] mb-4">TECHNICAL BRIEF</div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-foreground tracking-tight uppercase leading-tight">
              WHY CHOOSE<br />AQUAVIBE?
            </h2>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              We have developed a track record of excellent service, efficiency and reliability. Our experienced maritime professionals understand the demands of the shipping industry.
            </p>

            <div className="mt-10 relative rounded-xl overflow-hidden border border-border">
              <img
                src="https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/64be7a998_generated_de20fd18.png"
                alt="Ship propeller engineering detail"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="font-mono text-[10px] text-primary tracking-widest">ENGINEERING EXCELLENCE</div>
              </div>
            </div>
          </motion.div>

          {/* Right: FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="font-mono text-[10px] text-muted-foreground tracking-widest mb-6">
              FREQUENTLY ASKED — {String(FAQS.length).padStart(2, '0')} ENTRIES
            </div>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-colors duration-300 ${
                  openIndex === i ? 'border-primary/30 bg-card' : 'border-border bg-card/50'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 p-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-xs text-primary mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display font-semibold text-sm text-foreground">{faq.q}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-primary mt-1 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-14">
                        <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}