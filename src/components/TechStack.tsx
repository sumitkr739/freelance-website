import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PanelsTopLeft, ServerCrash, Database, CloudLightning, BadgeCheck } from 'lucide-react';

interface TechItem {
  name: string;
  level: string;
  years: string;
  useCase: string;
}

interface TechGroups {
  [key: string]: {
    label: string;
    icon: any;
    color: string;
    items: TechItem[];
  };
}

const TECH_DATA: TechGroups = {
  frontend: {
    label: 'Frontend System',
    icon: PanelsTopLeft,
    color: 'from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/20',
    items: [
      { name: 'React', level: 'Expert', years: '6 yrs', useCase: 'High-performance visual SPA, virtual infinite scrolls, hooks preloading.' },
      { name: 'Next.js 15', level: 'Expert', years: '4 yrs', useCase: 'Production-ready server components, isomorphic layouts, routing mechanics.' },
      { name: 'TypeScript', level: 'Expert', years: '5 yrs', useCase: 'Strict compiler compliance, cross-file generic typings, schema validation.' },
      { name: 'Tailwind CSS', level: 'Expert', years: '5 yrs', useCase: 'Visual rendering, fluid grids, premium dark palette parameters, layout custom values.' }
    ]
  },
  backend: {
    label: 'Backend & APIs',
    icon: ServerCrash,
    color: 'from-indigo-500/10 to-purple-500/10 text-indigo-400 border-indigo-500/20',
    items: [
      { name: 'Node.js', level: 'Expert', years: '6 yrs', useCase: 'Non-blocking I/O file servers, high-speed micro-services routing.' },
      { name: 'Express', level: 'Expert', years: '6 yrs', useCase: 'Restful JSON architectures, pipeline authorization middlewares, static paths.' },
      { name: 'NestJS', level: 'Advanced', years: '3 yrs', useCase: 'Highly cohesive, dependency-injected monolithic layouts, testing parameters.' }
    ]
  },
  database: {
    label: 'Database Systems',
    icon: Database,
    color: 'from-emerald-500/10 to-teal-500/10 text-emerald-400 border-emerald-500/20',
    items: [
      { name: 'PostgreSQL', level: 'Expert', years: '5 yrs', useCase: 'Complex table joins, custom transactional constraint mappings, index optimization.' },
      { name: 'MongoDB', level: 'Advanced', years: '5 yrs', useCase: 'Unstructured document pipelines, dynamic storage models.' },
      { name: 'MySQL', level: 'Advanced', years: '5 yrs', useCase: 'Relational storage systems, transactional data mapping.' },
      { name: 'Redis', level: 'Expert', years: '4 yrs', useCase: 'Speedy key-expiration loops, in-memory caching layers.' }
    ]
  },
  cloud: {
    label: 'Cloud & DevOps',
    icon: CloudLightning,
    color: 'from-orange-500/10 to-red-500/10 text-orange-400 border-orange-500/20',
    items: [
      { name: 'AWS', level: 'Advanced', years: '4 yrs', useCase: 'Cloud S3 bucket parameters, horizontal virtual structures, route security parameters.' },
      { name: 'Docker', level: 'Advanced', years: '4 yrs', useCase: 'Multi-stage container definitions, local workspace mimicking.' },
      { name: 'Vercel', level: 'Expert', years: '5 yrs', useCase: 'Serverless Edge configurations, dynamic staging branch deployment.' },
      { name: 'GitHub Actions', level: 'Advanced', years: '3 yrs', useCase: 'Continuous lint validation, automated regression builds, delivery pipelines.' }
    ]
  }
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<keyof TechGroups>('frontend');

  const ActiveIcon = TECH_DATA[activeTab].icon;

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column Content */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Technology Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              An Elite Modern Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
              I avoid deprecated tools and fragile frameworks. My choices are strictly biased towards typesafe compiler guarantees, blazing load speeds, and clean scalability.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-2">
            {(Object.keys(TECH_DATA) as Array<keyof TechGroups>).map((key) => {
              const tab = TECH_DATA[key];
              const TabIcon = tab.icon;
              const isSelected = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center gap-3 w-full rounded-2xl border px-4 py-3.5 text-left text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-800 dark:bg-neutral-900 text-white shadow-lg'
                      : 'bg-transparent border-neutral-200/50 hover:bg-neutral-100/50 dark:border-neutral-800/40 dark:hover:bg-neutral-900/10 text-neutral-550 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/5 ${isSelected ? 'text-indigo-400' : 'text-neutral-500'}`}>
                    <TabIcon className="h-4 w-4" />
                  </div>
                  <span className="flex-1">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Grid of Items */}
        <div className="lg:col-span-7 bg-transparent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {TECH_DATA[activeTab].items.map((item, idx) => (
                <div
                  key={item.name}
                  className="rounded-3xl border border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/30 p-5 backdrop-blur-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    {/* Item Heading */}
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-neutral-950 dark:text-neutral-100 flex items-center gap-1.5">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/5 dark:bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/10">
                          {item.level}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                      {item.useCase}
                    </p>
                  </div>

                  {/* Core detail summary info */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 dark:border-neutral-800/50">
                    <span className="text-[10px] font-mono text-neutral-400">Continuous Application duration</span>
                    <span className="text-[11px] font-mono font-semibold text-neutral-800 dark:text-neutral-300 flex items-center gap-1"><BadgeCheck className="h-3 w-3 text-emerald-500 shrink-0" /> {item.years}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
