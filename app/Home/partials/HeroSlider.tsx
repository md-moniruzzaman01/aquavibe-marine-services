"use client";

// import { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const SLIDES = [
//   {
//     image: 'https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/76fe6c591_generated_2f1bc46b.png',
//     subtitle: 'WELCOME TO',
//     title: 'AQUAVIBE MARINE\nSERVICES',
//     desc: '— Leading Ship Chandler In Bangladesh —',
//     coords: 'N 22° 16\' 22.79" — E 091° 49\' 55.20"',
//   },
//   {
//     image: 'https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/d3912ff28_generated_453e21ae.png',
//     subtitle: 'WE CARE YOUR SHIP',
//     title: 'YOUR ONE STOP\nSHIP CHANDLER',
//     desc: 'We offer same services in all Sea ports',
//     coords: 'CHITTAGONG || MONGLA || PAYRA',
//   },
//   {
//     image: 'https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/a1bf43f7c_generated_cdefa220.png',
//     subtitle: 'EXCELLENCE BELOW THE SURFACE',
//     title: 'SHIPPING &\nLOGISTICS',
//     desc: 'Service Provider in Bangladesh',
//     coords: 'OPERATIONAL SINCE 2023',
//   },
// ];

// export default function HeroCarousel() {
//   const [current, setCurrent] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const advance = useCallback((dir:any) => {
//     setDirection(dir);
//     setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => advance(1), 6000);
//     return () => clearInterval(timer);
//   }, [advance]);

//   const slide = SLIDES[current];

//   return (
//     <section id="hero" className="relative h-[80vh] w-full overflow-hidden">
//       {/* Background Images */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={current}
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.95, opacity: 0 }}
//           transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slide.image}
//             alt="Maritime vessel"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
//           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Grid overlay */}
//       <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={current}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -40 }}
//               transition={{ duration: 0.8, ease: 'easeOut' }}
//               className="max-w-3xl"
//             >
//               <div className="font-mono text-primary text-xs tracking-[0.3em] mb-4">
//                 {slide.subtitle}
//               </div>
//               <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] tracking-tight whitespace-pre-line">
//                 {slide.title}
//               </h1>
//               <div className="mt-6 h-px w-24 bg-primary" />
//               <p className="mt-6 font-display text-base md:text-lg text-foreground/70 max-w-xl">
//                 {slide.desc}
//               </p>
//               <div className="mt-4 font-mono text-[11px] text-primary/70 tracking-widest">
//                 {slide.coords}
//               </div>
//               <div className="mt-10 flex gap-4">
//                 <button
//                   onClick={() => {
//                     const el = document.querySelector('#services');
//                     if (el) el.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="px-8 py-3.5 bg-primary text-primary-foreground font-display font-semibold text-sm tracking-widest uppercase rounded sonar-pulse hover:shadow-lg hover:shadow-primary/25 transition-all"
//                 >
//                   OUR SERVICES
//                 </button>
//                 <button
//                   onClick={() => {
//                     const el = document.querySelector('#contact');
//                     if (el) el.scrollIntoView({ behavior: 'smooth' });
//                   }}
//                   className="px-8 py-3.5 border border-foreground/20 text-foreground font-display font-semibold text-sm tracking-widest uppercase rounded hover:border-primary hover:text-primary transition-all"
//                 >
//                   CONTACT US
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Slide Controls */}
//       <div className="absolute bottom-12 left-6 lg:left-8 z-20 flex items-center gap-6">
//         <div className="flex gap-2">
//           <button
//             onClick={() => advance(-1)}
//             className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
//           >
//             <ChevronLeft className="w-4 h-4" />
//           </button>
//           <button
//             onClick={() => advance(1)}
//             className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="flex items-center gap-3">
//           {SLIDES.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
//               className="relative"
//             >
//               <div className={`w-8 h-0.5 rounded-full transition-all duration-500 ${
//                 i === current ? 'bg-primary w-12' : 'bg-foreground/20'
//               }`} />
//             </button>
//           ))}
//         </div>
//         <span className="font-mono text-xs text-muted-foreground">
//           {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
//         </span>
//       </div>

//       {/* Coordinate overlays */}
//       <div className="absolute top-24 right-8 font-mono text-[10px] text-primary/30 tracking-wider hidden lg:block">
//         LAT N 22°16'22.79"
//       </div>
//       <div className="absolute bottom-8 right-8 font-mono text-[10px] text-primary/30 tracking-wider hidden lg:block">
//         LON E 091°49'55.20"
//       </div>
//     </section>
//   );
// }
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: 'https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/76fe6c591_generated_2f1bc46b.png',
    subtitle: 'WELCOME TO',
    title: 'AQUAVIBE MARINE\nSERVICES',
    desc: 'Leading Ship Chandler In Bangladesh — serving Chittagong, Mongla & Payra ports.',
    badge: 'TRUSTED SINCE 2023',
  },
  {
    image: 'https://media.base44.com/images/public/69d33c7a3f79b23a0b421b4c/d3912ff28_generated_453e21ae.png',
    subtitle: 'WE CARE YOUR SHIP',
    title: 'YOUR ONE STOP\nSHIP CHANDLER',
    desc: 'We offer the same high-quality services across all sea ports in Bangladesh.',
    badge: 'ALL PORTS COVERED',
  },
  {
    image: 'https://aquavibemarineservices.com/wp-content/uploads/slider2/container-ship-6631117_1280.jpg',
    subtitle: 'EXCELLENCE IN MARITIME',
    title: 'SHIPPING &\nLOGISTICS',
    desc: 'Comprehensive shipping and maritime service provider across Bangladesh waters.',
    badge: 'ISO CERTIFIED',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const advance = useCallback((dir:any) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => advance(1), 6000);
    return () => clearInterval(timer);
  }, [advance]);

  // Preload images (removes flicker)
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
      className="relative h-[75vh] w-full overflow-hidden"
      style={{ paddingTop: '128px' }}
    >
      {/* Dark base layer (prevents white flash) */}
      <div className="absolute inset-0 bg-black" />

      {/* Background Images */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.02, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.01, filter: 'blur(6px)' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt="Maritime vessel"
            className="w-full h-full object-cover will-change-transform"
          />

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-display text-white/90 text-xs tracking-[0.2em]">
                  {slide.badge}
                </span>
              </div>

              <div className="font-display text-white/70 text-sm tracking-[0.25em] mb-3 uppercase">
                {slide.subtitle}
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] tracking-tight whitespace-pre-line drop-shadow-2xl">
                {slide.title}
              </h1>

              <div className="mt-6 flex items-center gap-3">
                <div className="h-0.5 w-16 bg-primary" />
                <div className="h-0.5 w-4 bg-white/40" />
              </div>

              <p className="mt-5 font-display text-base md:text-lg text-white/85 max-w-xl leading-relaxed">
                {slide.desc}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => {
                    const el = document.querySelector('#services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 bg-primary text-white font-display font-bold text-sm tracking-widest uppercase rounded hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  OUR SERVICES
                </button>

                <button
                  onClick={() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 border-2 border-white/50 text-white font-display font-bold text-sm tracking-widest uppercase rounded hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  CONTACT US
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
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 6, ease: 'linear' }}
          className="h-full bg-primary"
        />
      </div>

      {/* Controls */}
      <div className="absolute bottom-14 left-6 lg:left-8 z-20 flex items-center gap-6">
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
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <span className="font-mono text-xs text-white/60">
          {String(current + 1).padStart(2, '0')} /{' '}
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}