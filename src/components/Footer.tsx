import React from 'react';
import { Mail, Github, Linkedin, MessageSquare, ArrowUpRight, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Services Architecture', hash: '#services' },
    { name: 'Audited Projects', hash: '#projects' },
    { name: 'Technical Studies', hash: '#casestudies' },
    { name: 'The Scalable Stack', hash: '#blog' },
    { name: 'Request Scoping Assessment', hash: '#contact' },
    { name: 'Privacy Policy', hash: '#privacy' }
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 grid grid-cols-1 select-none">
      
      {/* High-fidelity Lead Banner banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full border-b border-neutral-900 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
        <div className="lg:col-span-8 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400">Available starting this month</span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white leading-tight">
            Ready to engineer your next scalability growth spike?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl font-sans leading-relaxed mx-auto lg:mx-0">
            Let's coordinate on structural designs, validate budgets, map APIs, and launch a fast, typesafe system constructed specifically for business monetization.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-end w-full">
          <button
            onClick={() => onNavigate('#book')}
            className="flex items-center justify-center gap-1.5 rounded-2xl bg-white text-black text-xs font-bold px-6 py-4 hover:bg-neutral-200 transition duration-150 shadow-xl"
          >
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </button>
          
          <button
            onClick={() => onNavigate('#contact')}
            className="flex items-center justify-center gap-1.5 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-6 py-4 text-xs font-bold text-white hover:bg-neutral-850 transition duration-150"
          >
            <span>Ask for AI Analysis</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 w-full grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand signature */}
        <div className="md:col-span-5 space-y-4">
          <button 
            onClick={() => onNavigate('#home')}
            className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white hover:opacity-90"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <span>S</span>
            </div>
            <span>sumit<span className="text-indigo-400">.dev</span></span>
          </button>
          <p className="text-xs text-neutral-500 font-sans max-w-sm leading-relaxed">
            World-class technical partner specializing in Next-gen frontend, high-concurrency Node APIs, database normalization and optimization metrics.
          </p>

          {/* Social icons */}
          <div className="flex gap-2.5 pt-2">
            <a
              href="mailto:sumit@sumit.dev"
              className="rounded-xl bg-neutral-900 border border-neutral-850/80 hover:bg-neutral-800 p-2 text-neutral-400 hover:text-white transition"
              aria-label="Send direct email"
            >
              <Mail className="h-4 w-4" />
            </a>
            
            <a
              href="https://github.com/sumitsinha"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-neutral-900 border border-neutral-850/80 hover:bg-neutral-800 p-2 text-neutral-400 hover:text-white transition"
              aria-label="Github hub"
            >
              <Github className="h-4 w-4" />
            </a>

            <a
              href="https://linkedin.com/in/sumitsinha"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-neutral-900 border border-neutral-850/80 hover:bg-neutral-800 p-2 text-neutral-400 hover:text-white transition"
              aria-label="Linkedin profile"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Links directory layout */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 md:justify-end">
          
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">Navigation Directory</span>
            <ul className="space-y-2.5">
              {footerLinks.slice(0, 3).map(lnk => (
                <li key={lnk.name}>
                  <button
                    onClick={() => onNavigate(lnk.hash)}
                    className="text-xs text-neutral-500 hover:text-white transition text-left"
                  >
                    {lnk.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 block">Technical Ledger</span>
            <ul className="space-y-2.5">
              {footerLinks.slice(3).map(lnk => (
                <li key={lnk.name}>
                  <button
                    onClick={() => onNavigate(lnk.hash)}
                    className="text-xs text-neutral-500 hover:text-white transition text-left"
                  >
                    {lnk.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      {/* Ground terms strip */}
      <div className="bg-neutral-950 py-6 border-t border-neutral-900 text-[10px] text-neutral-600 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between gap-4 items-center">
          <p>© {currentYear} Sumit Sinha Software Engineering. All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => onNavigate('#privacy')} className="hover:text-neutral-400">Privacy & Terms Policy</button>
          </div>
        </div>
      </div>

    </footer>
  );
}
