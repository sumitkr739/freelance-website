import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeReview = TESTIMONIALS[current];

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/10 p-6 sm:p-12 relative overflow-hidden backdrop-blur-md">
        
        {/* Quote Accent graphic */}
        <Quote className="absolute right-8 top-8 h-20 w-20 text-neutral-200/35 dark:text-neutral-800/25 pointer-events-none -z-10" />

        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Endorsements
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Approved By Technical Directors
            </h2>
          </div>

          <div className="min-h-[170px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {/* Five star symbols */}
                <div className="flex gap-1">
                  {Array.from({ length: activeReview.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base leading-relaxed text-neutral-800 dark:text-neutral-300 font-sans italic">
                  "{activeReview.review}"
                </p>

                {/* Profile Card Info */}
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={activeReview.avatar}
                    alt={activeReview.name}
                    referrerPolicy="no-referrer"
                    className="h-10 w-10 rounded-full border border-neutral-200 object-cover object-center dark:border-neutral-800"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-neutral-50">{activeReview.name}</h4>
                    <span className="block text-[11px] font-mono text-neutral-500">{activeReview.role} @ {activeReview.company}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Navigation Button Row */}
          <div className="flex justify-between items-center pt-6 border-t border-neutral-200 dark:border-neutral-800/60">
            <div className="flex gap-1 font-mono text-xs text-neutral-400">
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">0{current + 1}</span>
              <span>/</span>
              <span>0{TESTIMONIALS.length}</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-90 transition"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4.5 w-4.5" />
              </button>
              
              <button
                onClick={handleNext}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-2 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 active:scale-90 transition"
                aria-label="Next review"
              >
                <ChevronRight className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
