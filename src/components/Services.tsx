import React from 'react';
import { SERVICES_DATA } from '../data';
import { Cpu, Layers, Building2, Sparkles, Network, Database, Zap, Shield, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

// Maps string handles inside database to actual Lucide component instances
const IconMap: { [key: string]: any } = {
  Cpu,
  Layers,
  Building2,
  Sparkles,
  Network,
  Database,
  Zap,
  Shield
};

export default function Services({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <section id="services" className="py-24 px-4 bg-neutral-50/30 dark:bg-neutral-950/20 border-t border-b border-neutral-200/50 dark:border-neutral-800/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
            Engineering Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Premium Full Stack Specialization
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-xl mx-auto">
            I don’t just build code; I map complete user lifecycles, database structures, security schemas, and telemetry logs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => {
            const ActiveIcon = IconMap[srv.icon] || Cpu;
            return (
              <motion.div
                key={srv.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-6 shadow-sm hover:shadow-lg hover:border-indigo-500/40 dark:hover:bg-neutral-900/60 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                {/* Aura hover background */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-indigo-600/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-6">
                  {/* Service Icon Panel */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <ActiveIcon className="h-5.5 w-5.5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-neutral-950 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {srv.description}
                    </p>
                  </div>

                  {/* Bullet specifics checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    {srv.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
                        <Check className="h-3.5 w-3.5 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Card CTA Trigger */}
                <div className="pt-6">
                  <button
                    onClick={() => onNavigate('#contact')}
                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-indigo-600 dark:text-neutral-300 dark:hover:text-indigo-400 transition"
                  >
                    <span>Request Service Integration</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
