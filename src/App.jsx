import React, { useState, useEffect, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FloatingIcons from './components/FloatingIcons';
import ErrorBoundary from './components/ErrorBoundary';
import MobileNav from './components/MobileNav';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import TechMarquee from './components/TechMarquee';
import Testimonials from './components/Testimonials';
import { AnimatePresence } from 'framer-motion';

const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Achievements = lazy(() => import('./sections/Achievements'));
const EducationExperience = lazy(() => import('./sections/EducationExperience'));
const Contact = lazy(() => import('./sections/Contact'));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-32">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" />
        ) : (
          <div className="bg-background-dark min-h-screen text-white font-sans">
            <ScrollProgress />
            <Sidebar />
            <MobileNav />
            <main className="lg:ml-64 relative z-0 overflow-hidden">
              {/* Background decoration */}
              <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/8 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-cyan-500/8 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-blue-500/8 rounded-full blur-[120px] animate-blob animation-delay-4000" />
              </div>

              <Suspense fallback={<SectionLoader />}>
                <Hero />
                <About />
                <Services />
                <TechMarquee />
                <Skills />
                <Projects />
                <Achievements />
                <EducationExperience />
                <Testimonials />
                <Contact />
              </Suspense>

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
