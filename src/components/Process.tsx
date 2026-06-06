import React from 'react';
import { DEV_PROCESS } from '../data';
import { motion } from 'motion/react';
import { Compass, FileCode, Landmark, Terminal, HeartHandshake } from 'lucide-react';

export default function Process() {
  return (
    <section className="py-24 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Caption */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase">
            Work Methodologies
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            The Product Engineering Blueprint
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-lg mx-auto font-sans leading-relaxed">
            Building premium, robust products requires execution. This is my structured path to guide MVP concepts to secure, optimized web systems.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          
          {DEV_PROCESS.map((proc, idx) => (
            <motion.div
              key={proc.step}
              className="group relative rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-neutral-900/90 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="space-y-4">
                {/* Step indicator displays */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-mono font-extrabold text-indigo-500/35 group-hover:text-indigo-400/80 transition-colors">
                    {proc.step}
                  </span>
                  
                  {/* Subtle graphical path anchor */}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-950 border border-neutral-850 text-indigo-400 text-xs">
                    {idx === 0 ? <Compass className="h-4 w-4" /> : idx === 3 ? <Terminal className="h-4 w-4" /> : idx === 6 ? <HeartHandshake className="h-4 w-4" />  : <FileCode className="h-4 w-4" />}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-neutral-100 group-hover:text-indigo-400 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {proc.desc}
                  </p>
                </div>
              </div>

              {/* Connecting tail line display indicator */}
              <div className="hidden xl:block absolute top-[50%] -right-3 h-[1px] w-6 bg-neutral-800 -z-10 group-last:hidden" />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
