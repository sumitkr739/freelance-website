import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientResults from './components/ClientResults';
import Stats from './components/Stats';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Calendly from './components/Calendly';
import BlogGrid from './components/BlogGrid';
import BlogModal from './components/BlogModal';
import AboutView from './components/AboutView';
import PrivacyView from './components/PrivacyView';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import AIChatbot from './components/AIChatbot';
import { Blog } from './types';
import { motion, useScroll, useSpring } from 'motion/react';

function AppContent() {
  const [currentView, setCurrentView] = useState<string>('#home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Blog | null>(null);

  // Read scroll progress for indicator line
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentView(hash);

      // Scroll smoothly to hashes if on home dashboard view
      if (['#home', '#services', '#projects', '#blog', '#contact', '#book', '#casestudies'].includes(hash)) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (view: string) => {
    window.location.hash = view;
    setCurrentView(view);
  };

  const handleOpenArticle = (blog: Blog) => {
    setSelectedArticle(blog);
  };

  const isHomeView = ['#home', '#services', '#projects', '#blog', '#contact', '#book', '#casestudies', '#pricing'].includes(currentView);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 relative flex flex-col font-sans">
      
      {/* Scroll progress banner bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Floating global gradient orb backdrops */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Primary Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Pages Content Router */}
      <main className="flex-grow pt-16">
        {isHomeView && (
          <div id="home">
            <Hero onNavigate={handleNavigate} onOpenChat={() => setChatOpen(true)} />
            <ClientResults />
            <Stats />
            <Services onNavigate={handleNavigate} />
            <TechStack />
            <Projects />
            <CaseStudies />
            <BlogGrid onOpenArticle={handleOpenArticle} />
            <Process />
            <WhyWorkWithMe />
            <Testimonials />
            <Pricing onNavigate={handleNavigate} />
            <FAQ />
            <Contact />
            <Calendly />
          </div>
        )}

        {currentView === '#about' && <AboutView />}
        {currentView === '#privacy' && <PrivacyView />}
      </main>

      {/* General Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Command dialog palettes */}
      <CommandMenu
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenChat={() => {
          setSearchOpen(false);
          setChatOpen(true);
        }}
      />

      {/* Dynamic Floating Conversational assistant bottom sliding sheet */}
      <AIChatbot
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Blog modal paper reading card */}
      <BlogModal
        blog={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
