import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Lightbulb, TrendingUp, Tags } from 'lucide-react';

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStudy = CASE_STUDIES[activeIdx];

  return (
    <section id="casestudies" className="py-24 px-4 bg-neutral-950/60 dark:bg-neutral-950 border-t border-b border-neutral-100/10 dark:border-neutral-800/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
            Deep-Dive Audits
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-50 dark:text-neutral-50">
            Client Success Case Studies
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 dark:text-neutral-405 max-w-lg mx-auto font-sans leading-relaxed">
            Detailed breakdowns outlining the precise business obstacles, custom solutions engineered, and financial returns achieved.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex justify-center gap-3 max-w-xl mx-auto">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              onClick={() => setActiveIdx(idx)}
              className={`flex-1 rounded-2xl border px-4 py-3 text-xs sm:text-sm font-semibold transition ${
                activeIdx === idx
                  ? 'bg-neutral-900 border-neutral-700 text-white shadow-xl dark:bg-white dark:text-black dark:border-white'
                  : 'bg-transparent border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {study.clientName}
            </button>
          ))}
        </div>

        {/* Interactive Breakdown Core */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-neutral-900/40 rounded-3xl border border-neutral-800 p-6 sm:p-10 backdrop-blur-md"
          >
            {/* Left Frame: Detailed Text */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-indigo-400 uppercase">
                  Project Narrative
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                  {activeStudy.title}
                </h3>
              </div>

              {/* Problem Statement Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-red-150">
                <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-red-400 uppercase tracking-wide">The Challenge</span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">{activeStudy.problem}</p>
                </div>
              </div>

              {/* Solution Card */}
              <div className="flex gap-4 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-150">
                <Lightbulb className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-indigo-400 uppercase tracking-wide">The Engineering Solution</span>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">{activeStudy.solution}</p>
                </div>
              </div>

              {/* Technologies row */}
              <div className="space-y-2.5">
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 uppercase">
                  <Tags className="h-3.5 w-3.5 text-neutral-500" /> Technology Frameworks Mounted
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeStudy.techUsed.map(t => (
                    <span key={t} className="rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-1 text-xs text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Frame: Outcomes & stats cards grids */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="rounded-3xl bg-neutral-900 border border-neutral-800 p-6 space-y-6">
                
                <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-indigo-400 border-b border-neutral-800 pb-3">
                  <TrendingUp className="h-4 w-4" /> Business Outcomes
                </span>

                <div className="grid grid-cols-2 gap-4">
                  {activeStudy.metrics.map((met) => (
                    <div key={met.label} className="space-y-1 rounded-2xl bg-neutral-950/40 border border-neutral-800 p-4">
                      <span className="block text-2xl font-bold font-sans text-white">{met.value}</span>
                      <span className="block text-[10px] font-mono text-neutral-500 uppercase leading-tight">{met.label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="block text-[10px] font-mono text-neutral-400 uppercase">Global Strategic impact value</span>
                  <p className="text-xs text-neutral-300 italic font-medium leading-relaxed font-sans">
                    "{activeStudy.impact}"
                  </p>
                </div>

              </div>
              
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
