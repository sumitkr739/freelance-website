import React, { useState, useEffect, useRef } from 'react';
import { Search, CornerDownLeft, Command, Sparkles, FolderGit2, BookOpen, CreditCard, CalendarDays, KeyRound } from 'lucide-react';
import { SEARCH_COMMANDS } from '../data';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (hash: string) => void;
  onOpenChat: () => void;
}

export default function CommandMenu({ isOpen, onClose, onNavigate, onOpenChat }: CommandMenuProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Filter commands
  const filteredCommands = SEARCH_COMMANDS.filter(cmd =>
    cmd.name.toLowerCase().includes(search.toLowerCase()) ||
    cmd.trigger.toLowerCase().includes(search.toLowerCase())
  );

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setSelectedIndex(0);
      setSearch('');
    }
  }, [isOpen]);

  // Navigate with keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleExecute(filteredCommands[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex]);

  const handleExecute = (cmd: typeof SEARCH_COMMANDS[0]) => {
    onClose();
    if (cmd.target === 'chatbot') {
      onOpenChat();
    } else {
      onNavigate(cmd.target);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Palette Body */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]">
        {/* Input area */}
        <div className="flex items-center gap-3 border-b border-neutral-800 px-4 py-3.5">
          <Search className="h-5 w-5 text-neutral-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-sm text-neutral-100 placeholder-neutral-500 outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <div className="flex items-center gap-1 rounded bg-neutral-800 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400">
            <span className="text-xs">ESC</span>
          </div>
        </div>

        {/* Command list */}
        <div ref={listRef} className="max-h-[300px] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            <div className="space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                Suggestions
              </div>
              {filteredCommands.map((cmd, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={cmd.trigger}
                    onClick={() => handleExecute(cmd)}
                    className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-left text-sm transition-all duration-150 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                        : 'text-neutral-300 hover:bg-neutral-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {cmd.target === 'chatbot' ? (
                        <Sparkles className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-indigo-400'}`} />
                      ) : cmd.target === '#projects' ? (
                        <FolderGit2 className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                      ) : cmd.target === '#blog' ? (
                        <BookOpen className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-purple-400'}`} />
                      ) : cmd.target === '#pricing' ? (
                        <CreditCard className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-emerald-400'}`} />
                      ) : cmd.target === '#book' ? (
                        <CalendarDays className={`h-4 w-4 ${isSelected ? 'text-white' : 'text-amber-400'}`} />
                      ) : (
                        <Command className="h-4 w-4 text-neutral-400" />
                      )}
                      <span>{cmd.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] font-mono ${isSelected ? 'text-indigo-200' : 'text-neutral-500'}`}>
                        {cmd.trigger}
                      </span>
                      {isSelected && <CornerDownLeft className="h-3.5 w-3.5 opacity-80" />}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-sm text-neutral-500">
              No matching commands or actions found. Try typing <span className="font-mono text-indigo-400">go</span>.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/40 px-4 py-2.5 text-[10px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-neutral-800 px-1 py-0.5 font-sans">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded bg-neutral-800 px-1 py-0.5 font-sans">Enter</kbd> Select
            </span>
          </div>
          <span className="font-mono text-indigo-500/80">Command Hub</span>
        </div>
      </div>
    </div>
  );
}
