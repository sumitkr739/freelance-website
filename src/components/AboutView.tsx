import React from 'react';
import { BadgeCheck, Milestone, Compass, Cpu, Clock, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  const values = [
    {
      title: 'Decoupled Engineering Systems',
      desc: 'I avoid monolith dependencies. By decoupling UI, APIs, and databases, we build modules that can expand without bottlenecks.',
      icon: Cpu,
    },
    {
      title: 'Typesafe Compilation Guarantees',
      desc: 'Every file operates on strict types. Zero-compromise compiler flags catch regression bugs long before they hit staging.',
      icon: BadgeCheck,
    },
    {
      title: 'Predictable Communication Milestones',
      desc: 'We map tasks on visible kanban boards. I push code to staging daily, coordinate on Slack, and deliver milestone videos.',
      icon: Clock,
    }
  ];

  return (
    <div className="pt-24 space-y-24 min-h-[85vh]">
      
      {/* Narrative Section splits */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative space-y-4">
          {/* Avatar banner image style */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 overflow-hidden relative max-h-[460px] shadow-xl group">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
              alt="Sumit Sinha Portrait"
              className="w-full h-full object-cover object-center scale-102 group-hover:scale-105 transition duration-500 max-h-[440px]"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">My Background</span>
            <h1 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Senior Full Stack Architect & Strategic Tech Partner
            </h1>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            I spent over 8 years engineering high-concurrency systems, starting as a Senior Front-End architect at elite tech firms like Novus Freight before branching out to support startups as an independent developer partner.
          </p>

          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            I specialize in structuring and optimizing performance-sensitive applications, converting ideas into full, scalable, production-grade SaaS systems within weeks. I cooperate closely with CTOs and founders across the US, UK, and EU, maintaining highly responsive Slack updates and transparent delivery cycles.
          </p>

          {/* Quick Stats list highlight row */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/85">
            <div className="space-y-1">
              <span className="block text-xl font-bold font-sans text-neutral-950 dark:text-neutral-50">6+</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500">Years Consulting</span>
            </div>
            
            <div className="space-y-1">
              <span className="block text-xl font-bold font-sans text-neutral-950 dark:text-neutral-50">40+</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500">Systems Launched</span>
            </div>

            <div className="space-y-1">
              <span className="block text-xl font-bold font-sans text-neutral-950 dark:text-neutral-50">100%</span>
              <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-500">SLA Deliverability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Cards block */}
      <section className="bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-b border-neutral-200/50 dark:border-neutral-850/60 py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-indigo-500 uppercase">My Philosophies</span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-neutral-950 dark:text-neutral-50">Zero-compromise Engineering Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const ValIcon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-4 bg-white/40 dark:bg-neutral-900/10 backdrop-blur-md hover:border-indigo-500/20 transition duration-150">
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800 text-indigo-600 dark:text-indigo-400">
                    <ValIcon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-neutral-100 block mb-2">{v.title}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
