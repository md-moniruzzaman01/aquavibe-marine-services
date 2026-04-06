"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DEPTH_MARKS = [
  { pct: 0, label: '0m' },
  { pct: 20, label: '10m' },
  { pct: 40, label: '25m' },
  { pct: 60, label: '50m' },
  { pct: 80, label: '75m' },
  { pct: 100, label: '100m' },
];

export default function DepthIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-0 h-64">
      <div className="relative w-px h-full bg-border">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary origin-top"
          style={{ height: `${progress}%` }}
        />
        {DEPTH_MARKS.map((mark) => (
          <div
            key={mark.label}
            className="absolute left-0 flex items-center gap-2"
            style={{ top: `${mark.pct}%`, transform: 'translateY(-50%)' }}
          >
            <div className={`w-2 h-px ${progress >= mark.pct ? 'bg-primary' : 'bg-white'}`} />
            <span className={`font-mono text-[9px] tracking-wider ${progress >= mark.pct ? 'text-primary' : 'text-gray-400'}`}>
              {mark.label}
            </span>
          </div>
        ))}
        {/* Current depth marker */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-lg shadow-primary/50"
          style={{ top: `${progress}%`, transform: `translate(-50%, -50%)` }}
        />
      </div>
    </div>
  );
}