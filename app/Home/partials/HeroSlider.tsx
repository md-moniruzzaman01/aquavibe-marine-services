"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/banner1.jpg",
    subtitle: "WELCOME TO",
    title: "SULTAN FLEET\nSERVICES",
    desc: "A leading ship chandler in Bangladesh, delivering reliable marine supplies and services across Chittagong, Mongla, and Payra ports.",
    badge: "TRUSTED SINCE 2020",
  },
  {
    image: "/container-ship-6631117_1280.jpg",
    subtitle: "COMPLETE MARITIME SUPPORT",
    title: "YOUR ONE-STOP\nSHIP CHANDLER",
    desc: "From provisions and technical stores to ship repair and spare parts supply — we ensure consistent, high-quality service at every major seaport.",
    badge: "ALL PORTS COVERED",
  },
  {
    image: "/Ship-Supplies_Stock-min.jpg",
    subtitle: "GLOBAL TRADE & LOGISTICS",
    title: "SHIPPING, IMPORT\n& EXPORT",
    desc: "Specialized in oil, food, and marine logistics, we provide efficient import-export solutions alongside comprehensive vessel support services.",
    badge: "ISO CERTIFIED",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const advance = useCallback((dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => advance(1), 6000);
    return () => clearInterval(timer);
  }, [advance]);

  // Preload images
  useEffect(() => {
    SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      id="hero"
      className="relative h-[80vh] w-full overflow-hidden"
      style={{ paddingTop: "120px" }}
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-black" />

      {/* Background Image */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.02, filter: "blur(6px)" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Maritime vessel"
            className="w-full h-full object-cover"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/90 text-xs tracking-[0.25em] uppercase">
                  {slide.badge}
                </span>
              </div>

              {/* Subtitle */}
              <div className="text-white/70 text-sm md:text-base tracking-[0.3em] mb-3 uppercase">
                {slide.subtitle}
              </div>

              {/* Title */}
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight whitespace-pre-line drop-shadow-2xl">
                {slide.title}
              </h1>

              {/* Divider */}
              <div className="mt-6 mb-6 flex items-center gap-3">
                <div className="h-0.5 w-16 bg-primary" />
                <div className="h-0.5 w-6 bg-white/40" />
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">
                {slide.desc}
              </p>

              {/* CTA */}
              <div className="mt-8">
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/90 transition-all duration-300">
                  Request Service
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-primary"
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-14 left-6 lg:left-8 z-20 flex items-center gap-6">
        {/* Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => advance(-1)}
            className="w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:border-white hover:bg-white/20 transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={() => advance(1)}
            className="w-10 h-10 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:border-white hover:bg-white/20 transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="text-xs text-white/60 font-mono">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}