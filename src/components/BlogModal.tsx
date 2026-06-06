import React from 'react';
import { Blog } from '../types';
import { X, Calendar, Clock, Share2, Tag, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface BlogModalProps {
  blog: Blog | null;
  onClose: () => void;
}

export default function BlogModal({ blog, onClose }: BlogModalProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (blog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [blog]);

  if (!blog) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop blur */}
      <div 
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Reader Panel box */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl flex flex-col scrollbar-thin scrollbar-thumb-neutral-800">
        
        {/* Banner thumb */}
        <div className="relative h-64 sm:h-80 shrink-0 bg-neutral-950/20">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
          {/* Dismiss button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-neutral-950/80 backdrop-blur-md p-2 text-white hover:bg-neutral-800 transition"
            aria-label="Close article"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Content reader core */}
        <div className="p-6 sm:p-10 space-y-6 flex-1">
          
          <div className="space-y-4">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 shrink-0" /> {blog.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5 shrink-0" /> {blog.readTime}</span>
              <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest">{blog.category}</span>
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-3xl font-sans font-bold tracking-tight text-neutral-950 dark:text-neutral-50 leading-tight">
              {blog.title}
            </h2>

            {/* Tag bubbles */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {blog.tags.map(t => (
                <span key={t} className="rounded-md border border-neutral-200/30 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 px-2 py-0.8 text-[10px] font-mono text-neutral-500">
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Author Board */}
          <div className="pt-4 pb-6 border-t border-b border-neutral-100 dark:border-neutral-800/80 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="h-9 w-9 rounded-full object-cover"
              />
              <div>
                <span className="block text-xs font-bold text-neutral-955 dark:text-neutral-105 dark:text-white leading-none">{blog.author.name}</span>
                <span className="block text-[10px] font-mono text-neutral-455 text-neutral-400 mt-1">{blog.author.role}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                className="rounded-xl border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100/50 dark:hover:bg-neutral-800 px-3 py-1.8 text-xs text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5 transition"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Link Copied' : 'Copy Article Link'}</span>
              </button>
            </div>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-sm sm:prose-base font-sans text-neutral-750 dark:text-neutral-300 leading-relaxed whitespace-pre-wrap">
            {blog.content}
          </div>

          {/* Footer close */}
          <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800/80 flex justify-end">
            <button
              onClick={onClose}
              className="rounded-xl bg-neutral-900 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 active:scale-95 transition dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Close Reader
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
