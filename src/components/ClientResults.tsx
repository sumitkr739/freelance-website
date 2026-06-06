import React from 'react';
import { CLIENT_RESULTS } from '../data';
import { BarChart3, TrendingUp, Clock, Server } from 'lucide-react';
import { motion } from 'motion/react';

export default function ClientResults() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Clock className="h-5 w-5 text-indigo-500" />;
      case 1: return <TrendingUp className="h-5 w-5 text-emerald-500" />;
      case 2: return <Server className="h-5 w-5 text-cyan-500" />;
      default: return <BarChart3 className="h-5 w-5 text-purple-500" />;
    }
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto border-t border-neutral-200/10 dark:border-neutral-800">
      <div className="space-y-4 mb-14 text-center md:text-left md:flex md:items-end md:justify-between md:space-y-0">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Quantifiable Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Engineered For Business Impact
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Client relationships are built on cold, hard metrics. Here are the average visual, financial, and structural gains clients realize.
          </p>
        </div>
        <div className="hidden lg:block text-xs font-mono text-neutral-500">
          Source: Audited client deployment logs (2024-2026)
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CLIENT_RESULTS.map((res, idx) => (
          <motion.div
            key={res.title}
            className="group relative rounded-2xl border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-lg dark:hover:bg-neutral-900/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Top Row icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 mb-6 group-hover:bg-indigo-600/10 group-hover:text-indigo-400 transition-colors">
              {getIcon(idx)}
            </div>

            {/* Metric Accent font display */}
            <div className="space-y-1 mb-4">
              <span className="block text-4xl font-sans font-bold text-neutral-900 dark:text-neutral-50 first-letter:text-indigo-600">
                {res.metric}
              </span>
              <span className="block text-[11px] font-mono tracking-wider text-neutral-500 dark:text-neutral-500 uppercase">
                {res.sub}
              </span>
            </div>

            {/* Title / Description */}
            <div className="space-y-1.5">
              <h3 className="text-sm font-semibold text-neutral-950 dark:text-neutral-100">
                {res.title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed fn-sans">
                {res.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
