"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: 'CALL US',
    desc: '24/7 Available customer service',
    action: 'tel:+8801728841299',
    label: '+880 1728 841299',
  },
  {
    icon: Mail,
    title: 'EMAIL US',
    desc: "Don't hesitate to reach out",
    action: 'mailto:aquavibe2023@gmail.com',
    label: 'aquavibe2023@gmail.com',
  },
  {
    icon: MessageCircle,
    title: 'WHATSAPP',
    desc: 'Quick messaging support',
    action: 'https://wa.me/+8801728841299',
    label: '+880 1728 841299',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', port: '', message: '' });
  const [sending, setSending] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setForm({ name: '', email: '', phone: '', port: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="font-mono text-primary text-xs tracking-[0.3em] mb-4">COMMAND PORTAL</div>
          <h2 className="font-display font-black text-3xl md:text-5xl text-foreground tracking-tight uppercase">
            GET IN TOUCH
          </h2>
          <div className="mt-6 h-px w-16 bg-primary mx-auto" />
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.action}
              target={card.action.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="font-display font-bold text-sm text-foreground tracking-wider mb-1">{card.title}</div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-wider mb-3">{card.desc}</div>
              <div className="font-mono text-xs text-primary">{card.label}</div>
            </motion.a>
          ))}
        </div>

        {/* Form + Location */}
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="p-6 lg:p-8 rounded-xl border border-border bg-card/50">
              <div className="font-mono text-[10px] text-primary tracking-widest mb-1">TRANSMISSION FORM</div>
              <h3 className="font-display font-bold text-lg text-foreground tracking-wider uppercase mb-6">NEED HELP?</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5 block">YOUR NAME *</label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground font-display"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5 block">EMAIL *</label>
                    <Input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground font-display"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5 block">CONTACT NUMBER</label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground font-display"
                      placeholder="+880..."
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5 block">ARRIVAL PORT</label>
                    <Input
                      value={form.port}
                      onChange={(e) => setForm({ ...form, port: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary text-foreground font-display"
                      placeholder="Country / Port"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-muted-foreground tracking-wider mb-1.5 block">MESSAGE</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary/50 border-border focus:border-primary text-foreground font-display min-h-[120px]"
                    placeholder="Your message..."
                    maxLength={180}
                  />
                  <div className="font-mono text-[9px] text-muted-foreground mt-1 text-right">{form.message.length} / 180</div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-widest uppercase rounded sonar-pulse hover:shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-6 lg:p-8 rounded-xl border border-border bg-card/50">
              <div className="font-mono text-[10px] text-primary tracking-widest mb-4">OFFICE COORDINATES</div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground mb-1">HEAD OFFICE</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    6th floor, 146/A Simla House,<br />
                    Agrabad, Chittagong 4100,<br />
                    Bangladesh
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <ContactRow label="PHONE LINE 1" value="+880 1728 841299" />
                <ContactRow label="PHONE LINE 2" value="+880 1521 387459" />
                <ContactRow label="EMAIL" value="aquavibe2023@gmail.com" />
                <ContactRow label="WHATSAPP" value="+880 1728 841299" />
              </div>
            </div>

            {/* Ports served */}
            <div className="p-6 rounded-xl border border-border bg-card/50">
              <div className="font-mono text-[10px] text-primary tracking-widest mb-4">SERVICE COVERAGE</div>
              <div className="grid grid-cols-3 gap-3">
                {['CHITTAGONG', 'MONGLA', 'PAYRA'].map((port, i) => (
                  <div key={port} className="text-center p-3 rounded-lg bg-secondary/50 border border-border">
                    <div className="font-mono text-[9px] text-primary tracking-widest mb-1">PORT—{String(i + 1).padStart(2, '0')}</div>
                    <div className="font-display font-bold text-xs text-foreground tracking-wider">{port}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
      <span className="font-mono text-[10px] text-muted-foreground tracking-wider">{label}</span>
      <span className="font-mono text-xs text-foreground">{value}</span>
    </div>
  );
}