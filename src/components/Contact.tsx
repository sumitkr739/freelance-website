import React, { useState } from 'react';
import { Send, Sparkles, CheckCircle2, RotateCcw, AlertTriangle, Cpu, CalendarClock, DollarSign } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  projectDetails: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    budget: '$5,000 - $10,000',
    projectType: 'SaaS Platform Development',
    projectDetails: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ success: boolean; message: string; analysis: string } | null>(null);

  // Quick Client side validations
  const [validationErrors, setValidationErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const errors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      errors.email = 'A valid email is required';
    }
    if (!formData.projectDetails.trim()) {
      errors.projectDetails = 'Please provide detailed expectations of your project';
    } else if (formData.projectDetails.length < 20) {
      errors.projectDetails = 'Project goals details must be at least 20 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (validationErrors[name as keyof ContactFormData]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Server returned internal validation error');
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError('Form submission issue. Please check your data connectivity and retry.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '$5,000 - $10,000',
      projectType: 'SaaS Platform Development',
      projectDetails: ''
    });
    setResult(null);
    setError(null);
    setValidationErrors({});
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column Description */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono font-bold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              Lead Initiation
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
              Let's Co-Engineer Your Next Product
            </h2>
            <p className="text-sm sm:text-base text-neutral-505 text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Complete the detailed scoping sheet to submit your request. This coordinates with our grounded AI engine to deliver an instantaneous technical architecture breakdown outlining proposed tech structures and milestones.
            </p>
          </div>

          <div className="border border-neutral-200/50 dark:border-neutral-800 rounded-2xl bg-neutral-50/40 dark:bg-neutral-900/10 p-5 space-y-4 font-sans text-xs">
            <span className="text-xs font-bold block uppercase tracking-wider text-neutral-700 dark:text-neutral-300">Technical Brief Guidelines</span>
            <ul className="space-y-3 text-neutral-500 dark:text-neutral-400">
              <li className="flex gap-2 leading-relaxed">
                <span className="font-mono text-indigo-500 text-sm">01</span>
                <span>Explain your target business audience and critical monetization objectives.</span>
              </li>
              <li className="flex gap-2 leading-relaxed">
                <span className="font-mono text-indigo-500 text-sm">02</span>
                <span>Select budget allocations reflecting realistic project duration targets.</span>
              </li>
              <li className="flex gap-2 leading-relaxed">
                <span className="font-mono text-indigo-500 text-sm">03</span>
                <span>Get a direct email summary detailing proposed database schemas and APIs within 12 hours.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Dynamic Form / Output Terminal Panel */}
        <div className="lg:col-span-7 bg-transparent rounded-3xl border border-neutral-250 border-neutral-200/60 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/10 p-6 sm:p-8 backdrop-blur-md shadow-sm relative">
          
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Sumit Sinha"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-4 py-3 text-xs outline-none focus:ring-1 ${
                        validationErrors.name
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-neutral-200 focus:border-indigo-600 focus:ring-indigo-600/30 dark:border-neutral-800 dark:bg-neutral-950/20 dark:text-white dark:focus:border-indigo-500'
                      }`}
                    />
                    {validationErrors.name && (
                      <span className="text-[10px] text-red-500 block">{validationErrors.name}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Email Address *</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="sumit@company.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full rounded-xl border px-4 py-3 text-xs outline-none focus:ring-1 ${
                        validationErrors.email
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-neutral-200 focus:border-indigo-600 focus:ring-indigo-600/30 dark:border-neutral-850 dark:border-neutral-800 dark:bg-neutral-950/20 dark:text-white dark:focus:border-indigo-500'
                      }`}
                    />
                    {validationErrors.email && (
                      <span className="text-[10px] text-red-500 block">{validationErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Company / Startup</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Stripe Inc (Optional)"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 dark:bg-neutral-950/20 dark:text-white"
                    />
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Budget Allocation</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 dark:bg-neutral-950/20 dark:text-white text-neutral-800 dark:text-neutral-300"
                    >
                      <option className="dark:bg-neutral-900">$3,000 - $5,000</option>
                      <option className="dark:bg-neutral-900">$5,000 - $10,000</option>
                      <option className="dark:bg-neutral-900">$10,000 - $20,050</option>
                      <option className="dark:bg-neutral-900">$20,000+ (Enterprise Retainers)</option>
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Project Category</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-neutral-200 dark:border-neutral-800 px-4 py-3 text-xs outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600/30 dark:bg-neutral-950/20 dark:text-white text-neutral-800 dark:text-neutral-300"
                  >
                    <option className="dark:bg-neutral-900">SaaS Platform Development</option>
                    <option className="dark:bg-neutral-900">Integrative AI LLM Core</option>
                    <option className="dark:bg-neutral-900">Internal Enterprise Business Flow Portal</option>
                    <option className="dark:bg-neutral-900">E-Commerce store Headless system</option>
                    <option className="dark:bg-neutral-900">Fractional CTO Retainer Consulting</option>
                  </select>
                </div>

                {/* Project Details textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-800 dark:text-neutral-350">Functional Scope Specifications *</label>
                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="Provide details about what you'd like to build, any key integrations, or deadline constraints..."
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    className={`w-full rounded-xl border px-4 py-3 text-xs outline-none resize-none focus:ring-1 ${
                      validationErrors.projectDetails
                        ? 'border-red-500 focus:ring-red-500/30'
                        : 'border-neutral-200 focus:border-indigo-600 focus:ring-indigo-600/30 dark:border-neutral-800 dark:bg-neutral-950/20 dark:text-white'
                    }`}
                  />
                  {validationErrors.projectDetails && (
                    <span className="text-[10px] text-red-500 block">{validationErrors.projectDetails}</span>
                  )}
                  <span className="text-[10px] text-neutral-500 font-mono tracking-wide block text-right mt-1">Min 20 characters</span>
                </div>

                {error && (
                  <div className="flex gap-2 p-3 rounded-xl border border-red-500/20 bg-red-500/5 text-red-500 text-xs items-center justify-center">
                    <AlertTriangle className="h-4.5 w-4.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit Trigger */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-indigo-600 py-3.5 text-xs font-bold text-white shadow-xl shadow-indigo-600/15 hover:bg-indigo-500 active:scale-95 disabled:opacity-40 flex items-center justify-center gap-2 transition"
                >
                  {loading ? (
                    <>
                      <span className="h-4.5 w-4.5 rounded-full border-2 border-white/30 border-t-white animate-spin shrink-0" />
                      <span>Coordinating with AI Architect Engine...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Submit Sheet & Scans</span>
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Success Terminal Display */
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-6"
              >
                <div className="flex gap-3 items-center border-b border-neutral-100 dark:border-neutral-800 pb-4">
                  <div className="h-9 w-9 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-950 dark:text-neutral-100">Scoping Inquiry Logged</h3>
                    <span className="text-[10px] font-mono text-neutral-505 dark:text-emerald-400">Proposal receipt: #{Math.floor(Math.random() * 90050) + 10000}</span>
                  </div>
                </div>

                {/* Scrollable markdown analysis feedback */}
                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/40 p-5 font-sans space-y-4 max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-850">
                  <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-indigo-555 text-indigo-600 dark:text-indigo-400 border-b border-neutral-200 dark:border-neutral-850 pb-2">
                    <Cpu className="h-3.5 w-3.5 animate-pulse" />
                    Interactive Real-Time Feasibility Report
                  </div>
                  
                  <div className="prose prose-neutral dark:prose-invert prose-xs leading-relaxed text-xs text-neutral-745 dark:text-neutral-350 whitespace-pre-line">
                    {result.analysis}
                  </div>
                </div>

                <div className="flex gap-3">
                  {/* Reset form to send more */}
                  <button
                    onClick={handleResetForm}
                    className="flex-1 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 px-4 py-3 text-xs font-semibold text-neutral-700 dark:text-neutral-300 flex items-center justify-center gap-1.5 active:scale-95 transition"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    <span>Scrutinize Another Project</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
