import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { User, FileText, ArrowRight } from 'lucide-react';
import img from "../assets/armanmir.jpg"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTypewriter } from '../hooks/useTypewriter';
import CodeSnippet from '../components/CodeSnippet';
import StatsCounter from '../components/StatsCounter';
import TechStackCards from '../components/TechStackCards';
import SkillBadges from '../components/SkillBadges';
import SkillOrbit from '../components/SkillOrbit';
import ScrollIndicator from '../components/ScrollIndicator';
import AvailabilityCard from '../components/AvailabilityCard';
import QuickContact from '../components/QuickContact';
import HeroStatusBar from '../components/HeroStatusBar';

const Hero = () => {
  const roles = ["MERN Stack Developer", "Frontend Specialist", "React Developer", "UI/UX Enthusiast"];
  const displayRole = useTypewriter(roles);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
    >
      {/* Top Status Bar */}
      <HeroStatusBar />

      {/* Content Container */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6"
          >
            <span className="text-primary font-medium tracking-wide text-sm flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building digital
            <span className="block text-gradient">experiences</span>
            that matter.
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm a MERN Stack Developer passionate about crafting beautiful,
            high-performance web applications with modern technologies.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button variant="primary" className="group text-black">
              <FaGithub className=" mr-2" />{" "}
              <a href="https://github.com/ArmanMirDeV" target="_blank" rel="noopener noreferrer">GitHub</a>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              <FaLinkedin className="mr-2 w-4 h-4 text-blue-500" />
              <a href="https://linkedin.com/in/armanmirdev" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline">
              <FaEnvelope className="mr-2 w-4 h-4 text-red-400" />
              <a href="mailto:mirarman8583@gmail.com">
                Email
              </a>
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 w-4 h-4" />
              <a href="https://docs.google.com/document/d/18KcS1P4RPgHqot8UU4R9kP1nRygp9CFPFlCuIh5umBU/edit?tab=t.0" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
          </div>

          
          <StatsCounter />
          <SkillBadges />
          <SkillOrbit />
          
          {/* Availability Card and Code Snippet - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <AvailabilityCard />
            <div className="hidden lg:block mt-8 ">
              <CodeSnippet />
            </div>
          </div>
          
          {/* Code Snippet for Mobile - Full Width */}
          <div className="lg:hidden mt-8">
            <CodeSnippet />
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-[500px] aspect-square">
            {/* Decorative Circles */}
            <div className="absolute inset-0 rounded-full border border-slate-700/50 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-700/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30" />

            {/* Main Image Container (Holographic Glass Card) */}
            <div className="absolute inset-10 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 relative overflow-hidden group">
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                   style={{
                     background: 'linear-gradient(45deg, transparent 30%, rgba(14, 165, 233, 0.3) 50%, transparent 70%)',
                     backgroundSize: '200% 200%',
                     animation: 'holographic 3s linear infinite'
                   }}>
              </div>
              
              {/* Corner Brackets (Cyberpunk Style) */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/50"></div>
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/50"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/50"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/50"></div>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-full h-px bg-primary animate-[scan_3s_linear_infinite]"></div>
              </div>

              <div className="text-center relative z-10">
                {/* Profile Image with Holographic Ring */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow blur-md opacity-75"></div>
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white/10 group/img">
                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-300"></div>
                    <img
                      className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-500"
                      src={img}
                      alt="Arman Mir"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-slate-900 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Al Saidul Arman Mir</h3>
                <div className="h-6 mb-4">
                   <p className="text-sm sm:text-base text-primary font-mono min-h-[1.5em]">{displayRole}<span className="animate-pulse">|</span></p>
                </div>

                {/* 3D Tech Stack Cards */}
                <TechStackCards />
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm font-bold">Open to Work</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
      
      {/* Quick Contact Popup */}
      <QuickContact />
    </section>
  );
};

export default Hero;
