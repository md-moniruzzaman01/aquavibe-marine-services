"use client";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    bg: "https://aquavibemarineservices.com/wp-content/uploads/slider2/container-ship-6631117_1280.jpg",
    overlay: "rgba(1,2,2,0.75)",
    content: (
      <div className="text-center text-white px-4 max-w-4xl">
        <span className="inline-block bg-[rgba(46,55,95,0.8)] rounded-full px-8 py-1.5 font-[Raleway,sans-serif] text-xl md:text-2xl font-bold tracking-wide mb-5">
          Welcome To
        </span>
        <h1 className="font-[&quot;Noto_Serif&quot;,serif] text-3xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-wide leading-snug">
          Aquavibe Marine Services
        </h1>
        <p className="mt-3 text-lg md:text-xl uppercase tracking-wide font-medium">
          - Leading Ship Chandler In Bangladesh -
        </p>
      </div>
    ),
  },
  {
    bg: "https://aquavibemarineservices.com/wp-content/uploads/slider2/banner1.jpg",
    overlay: "rgba(7,6,6,0.72)",
    bgPos: "30% 40%",
    content: (
      <div className="text-center text-white px-4 max-w-4xl">
        <span className="inline-block bg-[rgba(46,55,95,0.8)] rounded-full px-6 py-1.5 font-[Raleway,sans-serif] text-2xl md:text-4xl font-bold tracking-wide mb-4">
          WE CARE YOUR SHIP
        </span>
        <p className="text-lg md:text-xl uppercase tracking-wide font-medium mt-2">
          - Your One Stop Ship Chandler -
        </p>
        <p className="text-base md:text-lg uppercase tracking-wide mt-1 text-white/80">
          we offer same services in all Sea port
        </p>
      </div>
    ),
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <div className="relative w-full h-[340px] md:h-[480px] lg:h-[600px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover transition-all duration-700"
        style={{
          backgroundImage: `url('${slide.bg}')`,
          backgroundPosition: slide.bgPos ?? "center",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: slide.overlay }} />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {slide.content}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white/80 transition-colors ${
              i === current ? "bg-white/80" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
