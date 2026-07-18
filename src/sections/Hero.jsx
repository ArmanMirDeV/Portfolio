import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import img2 from '../assets/img2.jpg';
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
import MagneticButton from '../components/MagneticButton';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const roles = ['MERN Stack Developer', 'Frontend Specialist (Next.js)', 'TypeScript Developer', 'React Developer'];
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
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Status Badge */}
          <motion.div variants={fadeUp} className="inline-block mb-6">
            <div className="px-5 py-2.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
              <span className="text-primary font-medium tracking-wide text-sm flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
                </span>
                Available for new projects
              </span>
            </div>
          </motion.div>

          {/* Headline with staggered reveal */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="block text-slate-200">Building</span>
            <span className="block text-gradient text-gradient-gold shimmer-text text-5xl sm:text-6xl lg:text-8xl">
              digital
            </span>
            <span className="block text-slate-200">experiences that</span>
            <span className="block text-gradient font-black">matter.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed"
          >
            I'm a MERN Stack Developer passionate about crafting beautiful,
            high-performance web applications with modern technologies.
          </motion.p>

          {/* Social Buttons - Arc Layout */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">
            <MagneticButton strength={0.2}>
              <a
                href="https://github.com/ArmanMirDeV"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-100 transition-all shadow-lg shadow-white/5"
              >
                <FaGithub className="text-lg" />
                GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://linkedin.com/in/armanmirdev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-all font-medium"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="mailto:mirarman8583@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-600 text-slate-300 hover:border-red-400 hover:text-red-400 transition-all font-medium"
              >
                <FaEnvelope className="text-lg" />
                Email
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="https://docs.google.com/document/d/18KcS1P4RPgHqot8UU4R9kP1nRygp9CFPFlCuIh5umBU/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-600 text-slate-300 hover:border-primary hover:text-primary transition-all font-medium"
              >
                <FileText className="text-lg" />
                Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div variants={fadeUp}>
            <StatsCounter />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SkillBadges />
          </motion.div>
          <motion.div variants={fadeUp}>
            <SkillOrbit />
          </motion.div>

          {/* Availability + Code Snippet */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <AvailabilityCard />
            <div className="hidden lg:block">
              <CodeSnippet />
            </div>
          </motion.div>
          <div className="lg:hidden mt-8">
            <CodeSnippet />
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center lg:-mt-96"
        >
          <div className="relative w-full h-full max-w-[500px] aspect-square">
            {/* Decorative rotating rings */}
            <div className="absolute inset-0 rounded-full border border-slate-700/30 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-700/20 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-8 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-secondary/15 rounded-full blur-3xl opacity-40" />

            {/* Main Image Container */}
            <div className="absolute inset-10 bg-slate-800/20 backdrop-blur-xl rounded-3xl border border-slate-700/30 p-6 flex items-center justify-center shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 relative overflow-hidden group">
              {/* Holographic shimmer */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background:
                    'linear-gradient(135deg, transparent 25%, rgba(14,165,233,0.15) 50%, rgba(99,102,241,0.15) 75%, transparent 100%)',
                  backgroundSize: '400% 400%',
                  animation: 'gradient-shift 4s ease infinite',
                }}
              />

              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-primary/40 rounded-tl" />
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-primary/40 rounded-tr" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-primary/40 rounded-bl" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-primary/40 rounded-br" />

              {/* Scanline */}
              <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="absolute w-full h-px bg-primary animate-[scan_3s_linear_infinite]" />
              </div>

              <div className="text-center relative z-10">
                {/* Profile Image with Holographic Ring */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow blur-lg opacity-60" />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex items-center justify-center shadow-lg overflow-hidden border-4 border-white/10 group/img">
                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors duration-500" />
                    <img
                      className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                      src={img2}
                      alt="Arman Mir"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-2 border-4 border-slate-900 shadow-lg shadow-green-500/30">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">Al Saidul Arman Mir</h3>
                <div className="h-6 mb-4">
                  <p className="text-sm sm:text-base text-primary font-mono min-h-[1.5em]">
                    {displayRole}
                    <span className="animate-pulse text-secondary">|</span>
                  </p>
                </div>

                <TechStackCards />
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 p-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
                <span className="text-xs font-bold text-green-400">Open to Work</span>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-10 left-0 p-3 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">1+ Years Exp</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ScrollIndicator />
      <QuickContact />
    </section>
  );
};

export default Hero;
