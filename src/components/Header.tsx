import React from 'react';
import { Menu, X, Command, Sun, Moon, Sparkles, FolderGit2, BookOpen } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenSearch: () => void;
  onOpenChat: () => void;
}

export default function Header({ currentView, onNavigate, onOpenSearch, onOpenChat }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', hash: '#home' },
    { name: 'Services', hash: '#services' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Blog', hash: '#blog' },
    { name: 'Contact', hash: '#contact' }
  ];

  const handleLinkClick = (hash: string) => {
    setMobileMenuOpen(false);
    onNavigate(hash);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-neutral-100/10 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => handleLinkClick('#home')}
              className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                <span>S</span>
              </div>
              <span>sumit<span className="text-indigo-500">.dev</span></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = currentView === link.hash || (link.hash === '#home' && currentView === '#/');
                return (
                  <button
                    key={link.name}
                    onClick={() => handleLinkClick(link.hash)}
                    className={`relative text-sm font-medium transition duration-150 focus:outline-none ${
                      isActive 
                        ? 'text-indigo-600 dark:text-indigo-400' 
                        : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-indigo-600 dark:bg-indigo-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Toolbar Utilities */}
          <div className="hidden md:flex items-center gap-3">
            {/* Search Launcher */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 rounded-lg border border-neutral-200/60 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/50 px-3 py-1.5 text-xs text-neutral-500 hover:border-neutral-300 dark:hover:border-neutral-700 transition"
            >
              <Command className="h-3.5 w-3.5" />
              <span>Search</span>
              <kbd className="rounded bg-neutral-200 dark:bg-neutral-800 px-1 font-sans text-[10px]">⌘K</kbd>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Virtual Assistant CTA */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-1.8 text-xs font-semibold text-white shadow-lg shadow-indigo-600/15 hover:bg-indigo-500 hover:shadow-indigo-600/25 active:scale-95 transition"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Ask AI Agent</span>
            </button>
          </div>

          {/* Mobile Right Block */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Search */}
            <button
              onClick={onOpenSearch}
              className="rounded-lg p-1.5 text-neutral-500 dark:text-neutral-400"
            >
              <Command className="h-4.5 w-4.5" />
            </button>

            {/* Mobile Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-1.5 text-neutral-500 dark:text-neutral-400"
            >
              {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100/10 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-4 space-y-3 animate-[slideDown_0.2s_ease-out]">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentView === link.hash || (link.hash === '#home' && currentView === '#/');
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.hash)}
                  className={`block w-full rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition ${
                    isActive 
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-600/10 dark:text-indigo-400' 
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900/60'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
          
          <div className="border-t border-neutral-100/10 dark:border-neutral-800 pt-3 flex w-full">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-lg shadow-indigo-600/10"
            >
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Ask AI Chatbot Assistant</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
