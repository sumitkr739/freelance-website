import React from 'react';
import { Sparkles, Calendar, ArrowUpRight, ArrowRight, ShieldCheck, Cpu, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (view: string) => void;
  onOpenChat: () => void;
}

export default function Hero({ onNavigate, onOpenChat }: HeroProps) {
  // Floating technology tags
  const techTags = [
    { name: 'React', color: 'border-cyan-500/30 text-cyan-400 bg-cyan-950/20', position: 'top-12 left-[10%]', delay: 0 },
    { name: 'TypeScript', color: 'border-blue-500/30 text-blue-400 bg-blue-950/20', position: 'bottom-20 left-[15%]', delay: 0.5 },
    { name: 'Next.js 15', color: 'border-neutral-500/30 text-neutral-300 bg-neutral-950/20', position: 'top-20 right-[15%]', delay: 1 },
    { name: 'PostgreSQL', color: 'border-indigo-500/30 text-indigo-400 bg-indigo-950/20', position: 'bottom-24 right-[10%]', delay: 1.5 },
    { name: 'Gemini AI', color: 'border-purple-500/30 text-purple-400 bg-purple-950/20', position: 'top-[45%] right-[5%]', delay: 2 }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 pt-24 sm:pt-28 md:pt-32">
      {/* Glow Backdrops */}
      <div className="absolute top-[10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-indigo-600/10 blur-[130px] animate-pulse dark:block hidden" />
      <div className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-600/10 blur-[130px] animate-pulse dark:block hidden" />
      
      {/* Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Elements (Desktop only) */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block overflow-hidden pointer-events-none">
        {techTags.map((tech) => (
          <motion.div
            key={tech.name}
            className={`absolute border px-3.5 py-1.5 rounded-2xl text-xs font-mono font-medium flex items-center gap-1.5 backdrop-blur-md shadow-lg ${tech.color}`}
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: tech.delay,
            }}
            style={{ 
              top: tech.position.includes('top') ? tech.position.split(' ')[0].replace('top-', '') + '%' : undefined,
              bottom: tech.position.includes('bottom') ? tech.position.split(' ')[0].replace('bottom-', '') + '%' : undefined,
              left: tech.position.includes('left') ? tech.position.split(' ')[1].replace('left-[', '').replace('%]', '') + '%' : undefined,
              right: tech.position.includes('right') ? tech.position.split(' ')[1].replace('right-[', '').replace('%]', '') + '%' : undefined,
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            {tech.name}
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-5xl text-center space-y-8 z-10">
        
        {/* Status Bubble */}
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200/50 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-300">
            Accepting Q3 MVPs & Retainers
          </span>
        </motion.div>

        {/* Catchy headline */}
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.1]"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">Scalable Web Apps</span> <br className="hidden sm:inline" />That Grow Businesses.
          </motion.h1>

          <motion.p 
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Senior freelance developer specializing in modern React, heavy-duty Node.js/Express architectures, database optimizations, and cutting-edge Google GenAI integrations. 
          </motion.p>
        </div>

        {/* CTA triggers */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            onClick={() => onNavigate('#book')}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 hover:shadow-indigo-600/30 active:scale-[0.98] transition-all"
          >
            <Calendar className="h-4.5 w-4.5" />
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </button>
          
          <button
            onClick={() => onNavigate('#projects')}
            className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md px-6 py-4 text-sm font-semibold text-neutral-800 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all"
          >
            <span>View Active Projects</span>
            <ArrowRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 transition" />
          </button>
        </motion.div>

        {/* Trust factors */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-8 border-t border-neutral-100/10 dark:border-neutral-800 max-w-3xl mx-auto text-neutral-500 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
        >
          <div className="flex items-center gap-1.5">
            <Cpu className="h-4 w-4 text-indigo-500" />
            <span>Production-Grade Architecture</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-cyan-500" />
            <span>100/100 Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-yellow-500" />
            <span>Highly Secure & Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
            <span className="font-semibold text-neutral-700 dark:text-neutral-300">5.0 Star</span> Rating Index
          </div>
        </motion.div>

      </div>
    </section>
  );
}
