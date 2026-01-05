import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Portfolio from './sections/Portfolio';
import EducationExperience from './sections/EducationExperience';
import Contact from './sections/Contact';
import FloatingIcons from "./components/FloatingIcons";
import ErrorBoundary from './components/ErrorBoundary';
import ModernCursor from './components/ModernCursor';
import MobileNav from './components/MobileNav';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div className="bg-background-dark min-h-screen text-white font-sans selection:bg-cyan-500/30">
            <ModernCursor />
            <Sidebar />
            <MobileNav />
            <main className="lg:ml-64 relative z-0 overflow-hidden">
              {/* Background decoration */}
              <div className="fixed inset-0 z-[-1] pointer-events-none">
                 <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-blob" />
                 <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                 <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
              </div>

               <Hero />
               <About />
               <Services />
               <Skills />
               <Projects />
               {/* <Portfolio />c */}
               <EducationExperience />
               <Contact />
              <FloatingIcons />
               <Footer />
            </main>
          </div>
        )}
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
