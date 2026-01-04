import React from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Portfolio from './sections/Portfolio';
import EducationExperience from './sections/EducationExperience';
import Contact from './sections/Contact';
import FloatingIcons from "./components/FloatingIcons";
import ErrorBoundary from './components/ErrorBoundary';
import ModernCursor from './components/ModernCursor';

function App() {
  return (
    <ErrorBoundary>
      <div className="bg-background-dark min-h-screen text-white font-sans selection:bg-cyan-500/30">
        <ModernCursor />
        <Sidebar />
        <main className="lg:ml-64 relative z-0 overflow-hidden">
          {/* Background decoration */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-blob" />
             <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000" />
             <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
          </div>

           <Hero />
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
    </ErrorBoundary>
  );
}

export default App;
