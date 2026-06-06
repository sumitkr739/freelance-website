import React from 'react';
import { ShieldCheck, Lock, Landmark, EyeOff } from 'lucide-react';

export default function PrivacyView() {
  return (
    <div className="pt-28 pb-16 px-4 max-w-4xl mx-auto space-y-12 min-h-[80vh]">
      
      {/* Title */}
      <div className="space-y-3 border-b border-neutral-100 dark:border-neutral-800 pb-6">
        <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-indigo-500" /> Privacy & Terms of Collaboration
        </h1>
        <p className="text-xs font-mono text-neutral-500 uppercase">Effective Date: June 6, 2026 | Version 1.1</p>
      </div>

      {/* Grid segments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-neutral-200/50 dark:border-neutral-800 p-5 space-y-3 bg-neutral-50/20 dark:bg-neutral-900/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/5 text-indigo-500">
            <Lock className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-neutral-950 dark:text-neutral-50">NDA & Intellectual Property</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            All code repositories, deployment credentials, strategic architectures, and project specification papers are covered by absolute, automatic non-disclosure procedures upon signing our kickoff retainers. Your data is strictly yours.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200/50 dark:border-neutral-800 p-5 space-y-3 bg-neutral-50/20 dark:bg-neutral-900/10">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/5 text-cyan-500">
            <EyeOff className="h-5 w-5" />
          </div>
          <h3 className="text-sm font-bold text-neutral-950 dark:text-neutral-50">GDPR Compliance & Telemetry</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
            Lead records, emails, or project parameters submitted via the Contact or Scoping systems are saved in encrypted databases. We do not use pixel tracking tools or transfer listings to external marketing platforms.
          </p>
        </div>
      </div>

      {/* Structured Legal Content block */}
      <div className="space-y-6 font-sans text-neutral-600 dark:text-neutral-400 prose prose-neutral dark:prose-invert prose-xs sm:prose-sm leading-relaxed text-xs sm:text-sm">
        
        <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-2">1. Collected Information Parameters</h3>
        <p>I strictly collection client details when you use the scoping analysis sheet or schedules. This includes:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-neutral-500 dark:text-neutral-400">
          <li><strong>Identity inputs</strong>: Name, Company, Email Coordinates.</li>
          <li><strong>Technical specifications</strong>: Sprints targets, Budget tiers, Project details.</li>
          <li><strong>Scheduling markers</strong>: Appended calendar times and meeting summaries.</li>
        </ul>

        <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-2">2. Processing Principles</h3>
        <p>Your details are evaluated to generate personalized scope guidelines, schedule meet schedules, send invoice indicators, and manage secure staging branches. I never lease, sell or swap information with broker firms.</p>

        <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-50 border-b border-neutral-100 dark:border-neutral-800 pb-2">3. Retaining Data Codes</h3>
        <p>Scoping logs are archived safely within protected containers. Clients are free to request total purge of their inquiries or correspondence files at any time by emailing: <strong className="text-neutral-900 dark:text-neutral-50">privacy@sumit.dev</strong>.</p>

      </div>

    </div>
  );
}
