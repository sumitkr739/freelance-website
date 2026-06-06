import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatItemProps {
  targetValue: number;
  suffix?: string;
  label: string;
  sub: string;
}

function StatCounter({ targetValue, suffix = '', label, sub }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds animation duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Quartic out easing function for a premium, fast-then-slow feel
      const easedProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easedProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, targetValue]);

  return (
    <div ref={ref} className="text-center space-y-2 p-4 sm:p-6 rounded-2xl border border-neutral-100/40 dark:border-neutral-800/20 bg-white/10 dark:bg-neutral-900/10 backdrop-blur-md">
      <div className="text-4xl sm:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
        {count}
        {suffix}
      </div>
      <div>
        <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 leading-tight">
          {label}
        </div>
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mt-1">
          {sub}
        </div>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-neutral-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter 
            targetValue={45} 
            suffix="+" 
            label="Projects Completed" 
            sub="Launched Production Core" 
          />
          <StatCounter 
            targetValue={18} 
            suffix="+" 
            label="Technologies Mastered" 
            sub="Full Stack Proficiency" 
          />
          <StatCounter 
            targetValue={40} 
            suffix="+" 
            label="Happy Clients" 
            sub="Global Startups & SMEs" 
          />
          <StatCounter 
            targetValue={8} 
            suffix="+" 
            label="Years Experience" 
            sub="Continuous Industry Level" 
          />
        </div>
      </div>
    </section>
  );
}
