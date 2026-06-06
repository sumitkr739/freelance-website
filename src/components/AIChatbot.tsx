import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, Sparkles, MessageSquare, RefreshCw, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CHAT_SUGGESTIONS = [
  'What are your rates and pricing?',
  'What tech stack do you prefer?',
  'Are you available for freelance mvps?',
  'How do you handle database scaling?'
];

export default function AIChatbot({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I am Sumit Sinha\'s AI technical agent. Ask me anything about my freelance services, pricing packages, technical choices, or upcoming availability!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    setError(null);
    const userMessage: Message = { role: 'user', content: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('API server returned error status.');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.text }]);
    } catch (err: any) {
      console.error(err);
      setError('Connection interrupted. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mb-3 w-[min(420px,90vw)] h-[550px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/95 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3.5 bg-neutral-950/40">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/20">
                <Bot className="h-4.5 w-4.5 animate-pulse" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-neutral-900 bg-emerald-500" />
              </div>
              <div>
                <div className="text-sm font-semibold text-neutral-100 flex items-center gap-1.5">
                  AI Tech Partner <Sparkles className="h-3 w-3 text-indigo-400" />
                </div>
                <div className="text-[10px] font-mono text-emerald-400">Online & Grounded</div>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="rounded-lg p-1 text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef} 
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-800"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role !== 'user' && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-neutral-800 border border-neutral-700 text-indigo-400">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}
                <div 
                  className={`max-w-[78%] rounded-xl px-3.5 py-2.5 text-xs font-sans leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-neutral-800/80 text-neutral-200 border border-neutral-800 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-neutral-800 border border-neutral-700 text-indigo-400">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="flex items-center gap-1.5 rounded-xl border border-neutral-800 bg-neutral-800/40 px-3.5 py-3">
                  <span className="block h-2 w-2 animate-bounce rounded-full bg-indigo-400" />
                  <span className="block h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:0.2s]" />
                  <span className="block h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-red-400 text-xs text-center justify-center">
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
                <button 
                  onClick={() => {
                    const lastUser = [...messages].reverse().find(m => m.role === 'user');
                    if (lastUser) handleSendMessage(lastUser.content);
                  }}
                  className="ml-1 hover:underline flex items-center gap-1 focus:outline-none"
                >
                  <RefreshCw className="h-3 w-3 inline" /> Retry
                </button>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-neutral-800/40 bg-neutral-950/20 space-y-1.5">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Quick Prompts</span>
              <div className="flex flex-wrap gap-1.5">
                {CHAT_SUGGESTIONS.map((sug) => (
                  <button
                    key={sug}
                    onClick={() => handleSendMessage(sug)}
                    className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-[11px] text-neutral-300 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 active:scale-95"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Panel */}
          <div className="border-t border-neutral-800 p-3 bg-neutral-950/20">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex items-center gap-2 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600/30"
            >
              <input
                type="text"
                placeholder="Ask about rates, stack, timing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                className="flex-1 bg-transparent py-2 text-xs text-neutral-200 outline-none placeholder-neutral-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="rounded-lg p-1.5 text-indigo-400 transition hover:bg-neutral-800 hover:text-indigo-300 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
