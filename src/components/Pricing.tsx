import React from 'react';
import { PRICING_PLANS } from '../data';
import { Badge, Check, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section id="pricing" className="py-24 px-4 bg-neutral-50/30 dark:bg-neutral-950/20 border-t border-b border-neutral-200/50 dark:border-neutral-800/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Fair Pricing structures
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Transparent Milestone Investment Plans
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto font-sans leading-relaxed">
            Simple fixed scopes, structured invoices, no unexpected fees. Choose the roadmap matching your development lifecycle targets.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`rounded-3xl border p-6 sm:p-8 relative flex flex-col justify-between h-full bg-white dark:bg-neutral-900/40 ${
                plan.popular
                  ? 'border-indigo-600 shadow-xl shadow-indigo-600/5 ring-1 ring-indigo-600/30'
                  : 'border-neutral-200/60 dark:border-neutral-800 shadow-sm'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-[50%]">
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6 flex-1">
                {/* Header name */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-neutral-50">{plan.name}</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="py-2 flex items-baseline gap-1 bg-neutral-100/50 dark:bg-neutral-950/40 rounded-2xl px-4 py-3 border border-neutral-100 dark:border-neutral-850">
                  <span className="text-3xl sm:text-4xl font-sans font-bold text-neutral-950 dark:text-neutral-50">{plan.price}</span>
                  <span className="text-xs font-mono text-neutral-500">/ {plan.period}</span>
                </div>

                {/* Features checklists */}
                <div className="space-y-4 pt-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block border-b border-neutral-100 dark:border-neutral-800 pb-2">What is included</span>
                  <ul className="space-y-3">
                    {plan.features.map(feat => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-400">
                        <Check className="h-4 w-4 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action trigger */}
              <div className="pt-8">
                <button
                  onClick={() => onNavigate('#contact')}
                  className={`w-full rounded-2xl py-3.5 text-xs font-bold tracking-wide transition active:scale-95 ${
                    plan.popular
                      ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/15 hover:bg-indigo-500'
                      : 'border border-neutral-200 text-neutral-800 bg-neutral-100 hover:bg-neutral-200/55 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:bg-transparent'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Note info footer block */}
        <div className="flex gap-3 max-w-md mx-auto items-center p-4 rounded-2xl border border-neutral-200/50 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/10 backdrop-blur-sm text-neutral-500 text-xs">
          <AlertCircle className="h-5 w-5 text-indigo-500 shrink-0" />
          <p className="font-sans leading-relaxed">
            Need custom pricing scope guidelines? I construct customized milestones following active business model specifications. Let's arrange a call.
          </p>
        </div>

      </div>
    </section>
  );
}
