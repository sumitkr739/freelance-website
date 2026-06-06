import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="space-y-16">
        
        {/* Caption */}
        <div className="space-y-3 text-center">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Resolving doubts
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Frequently Answered Inquiries
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-401 font-sans leading-relaxed max-w-md mx-auto">
            Review transparent answers about how I structure development milestones, coordinate tasks, manage servers, and calculate contracts.
          </p>
        </div>

        {/* Collapsible Accordions List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-indigo-500/30 bg-neutral-100 shadow-md dark:border-indigo-500 dark:bg-neutral-900/10'
                    : 'border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-transparent hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {/* Header Trigger */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-neutral-950 dark:text-neutral-100 focus:outline-none"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 mt-0.5 ${isOpen ? 'text-indigo-600 dark:text-indigo-400' : 'text-neutral-400'}`} />
                    <span className="text-sm font-bold sm:text-base leading-tight">{faq.question}</span>
                  </div>
                  <ChevronDown className={`h-4.5 w-4.5 shrink-0 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                {/* Transitions block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-neutral-100 dark:border-neutral-850/60 text-xs sm:text-sm text-neutral-550 dark:text-neutral-400 leading-relaxed font-sans">
                        <p className="whitespace-pre-line">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
