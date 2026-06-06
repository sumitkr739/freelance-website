import React from 'react';
import { WHY_WORK_WITH_ME } from '../data';
import { motion } from 'motion/react';
import { Star, Code2, Globe2, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';

export default function WhyWorkWithMe() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Code2 className="h-5 w-5 text-indigo-400" />;
      case 1: return <Sparkles className="h-5 w-5 text-cyan-400" />;
      case 2: return <MessageCircle className="h-5 w-5 text-amber-400" />;
      case 3: return <Star className="h-5 w-5 text-pink-400" />;
      case 4: return <Globe2 className="h-5 w-5 text-emerald-400" />;
      default: return <ShieldCheck className="h-5 w-5 text-purple-400" />;
    }
  };

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-neutral-100/10 dark:border-neutral-800/40">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text */}
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Technical Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Why Startups Partner With Me
            </h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">
              I treat freelance software development as a high-integrity strategic alliance. I write modular code, communicate actively, and align on business deadlines.
            </p>
          </div>

          <div className="rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-4 space-y-2">
            <span className="text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider block">Integrity Commitment</span>
            <p className="text-xs text-neutral-605 text-neutral-650 dark:text-neutral-400 font-sans leading-relaxed">
              Every system built features 100% test-supported compiler checks, automated continuous deployments, and dedicated staging dashboards.
            </p>
          </div>
        </div>

        {/* Right Column Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <motion.div
              key={item.title}
              className="group relative rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/10 p-6 backdrop-blur-sm shadow-sm hover:border-indigo-500/30 dark:hover:bg-neutral-900/30 transition-all duration-200"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="flex gap-4 items-start">
                {/* Visual Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-indigo-600/10 transition-colors">
                  {getIcon(idx)}
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-neutral-950 dark:text-neutral-100 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
