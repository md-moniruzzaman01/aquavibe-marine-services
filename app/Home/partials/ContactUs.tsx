"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from "lucide-react";

const CONTACT_CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "24/7 Available",
    action: "tel:+8801624434052",
    label: "+880 1624 434052",
    color: "from-secondary to-orange-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "We reply within 2 hours",
    action: "mailto:sultanfleetserve@gmail.com",
    label: "sultanfleetserve@gmail.com",
    color: "from-primary to-blue-800",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Quick messaging support",
    action: "https://wa.me/+8801624434052",
    label: "+880 1624 434052",
    color: "from-green-500 to-green-600",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    port: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", phone: "", port: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-mono text-xs tracking-[0.3em] uppercase">Contact Us</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
              Get In{" "}
              <span className="text-secondary">Touch</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-mono">
              Our team is available 24 hours a day, 7 days a week to assist with all your vessel requirements.
            </p>
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.action}
              target={card.action.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient bar at top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />

              <div className="w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 shadow-lg text-white">
                <card.icon className="w-5 h-5 " />
              </div>
              <div className="font-bold text-primary text-sm mb-1">{card.title}</div>
              <div className="font-mono text-[10px] text-gray-400 tracking-wider mb-3 uppercase">{card.desc}</div>
              <div className="text-secondary text-sm font-semibold group-hover:underline">{card.label}</div>
            </motion.a>
          ))}
        </div>

        {/* Form + Info grid */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className=" rounded-2xl p-8 border border-white/5 shadow-2xl">
              <div className="font-mono text-[10px] text-primary tracking-widest uppercase mb-1">Send Message</div>
              <h3 className="font-bold text-xl mb-6">Request a Service</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-black/40 tracking-wider mb-1.5 block uppercase">Your Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 focus:border-secondary/50 text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-black/20"
                      placeholder="Full Name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-black/40 tracking-wider mb-1.5 block uppercase">Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 focus:border-secondary/50 text-black text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-black/20"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-black/40 tracking-wider mb-1.5 block uppercase">Phone Number</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 focus:border-secondary/50 text-black text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-black/20"
                      placeholder="+880..."
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-black/40 tracking-wider mb-1.5 block uppercase">Arrival Port</label>
                    <input
                      value={form.port}
                      onChange={(e) => setForm({ ...form, port: e.target.value })}
                      className="w-full bg-black/5 border border-black/10 focus:border-secondary/50 text-black text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-black/20"
                      placeholder="Chattogram / Mongla / Payra"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[10px] text-white/40 tracking-wider mb-1.5 block uppercase">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/5 border border-black/10 focus:border-secondary/50 text-black text-sm rounded-xl px-4 py-3 outline-none transition-colors placeholder:text-black/20 min-h-[110px] resize-none"
                    placeholder="Describe your vessel requirements..."
                    maxLength={300}
                  />
                  <div className="font-mono text-[9px] text-black/20 mt-1 text-right">{form.message.length} / 300</div>
                </div>

                <button
                  type="submit"
                  disabled={sending || sent}
                  className="w-full py-4 bg-secondary hover:bg-secondary/90 disabled:opacity-60 text-white font-bold text-sm tracking-widest uppercase rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-secondary/25 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <div className="w-4 h-4 border-2 border-black/30 border-t-white rounded-full animate-spin" />
                  ) : sent ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Office Info */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
              <div className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-4">Head Office</div>
              <div className="flex items-start gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-dark text-sm mb-1">Sultan Fleet Serve</div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Oriyent Building, 3 No. Fakirhat<br />
                    Bandar, Chattogram – 4100,<br />
                    Bangladesh
                  </p>
                </div>
              </div>
              <div className="space-y-2.5">
                {[
                  { label: "Phone 1", value: "+880 1624 434052" },
                  { label: "Phone 2", value: "+880 1974 434052" },
                  { label: "Email 1", value: "sultanfleetserve@gmail.com" },
                  { label: "Email 2", value: "smturzo@gmail.com" },
                  { label: "WhatsApp", value: "+880 1624 434052" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="font-mono text-[10px] text-gray-400 tracking-wider uppercase">{label}</span>
                    <span className="text-dark text-xs font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-4">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Operating Hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <div className="text-dark font-bold text-sm">24 Hours / 7 Days a Week</div>
              </div>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                Our operations team never sleeps. Emergency support always available for urgent vessel requirements.
              </p>
            </div>

            {/* Port coverage */}
            <div className="border border-secondary/20 bg-primary/5 rounded-2xl p-5">
              <div className="font-mono text-[10px] text-secondary tracking-widest uppercase mb-3">Service Ports</div>
              <div className="grid grid-cols-3 gap-2">
                {["Chattogram", "Mongla", "Payra"].map((port) => (
                  <div key={port} className="text-center py-2.5 rounded-xl bg-white border border-primary/10">
                    <div className="font-bold text-dark text-[11px]">{port}</div>
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