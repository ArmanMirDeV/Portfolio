import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Code2, Coffee, Palette, Gamepad2, BookOpen, Mountain, Heart,
  Sparkles, Zap, Target, Database, Layout, Atom, Users, MapPin,
  Moon, Utensils, Headphones, Brain
} from 'lucide-react';

const TiltCard = ({ children, className = '' }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-150, 150], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`perspective-1000 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const journeySteps = [
    { year: '2023', title: 'Introduction to Programming', description: 'Started coding at university with C, learning core programming concepts and structured problem solving.', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { year: '2023', title: 'Object-Oriented & Problem Solving', description: 'Advanced to C++ with a focus on object-oriented programming and algorithmic problem solving.', icon: Code2, color: 'from-indigo-500 to-purple-500' },
    { year: '2023', title: 'Database Fundamentals', description: 'Learned MySQL and relational database concepts including queries, relationships, and data management.', icon: Database, color: 'from-blue-500 to-cyan-500' },
    { year: '2024', title: 'Web Development Basics', description: 'Began web development using HTML and CSS, building responsive and structured web layouts.', icon: Layout, color: 'from-teal-500 to-green-500' },
    { year: '2024', title: 'JavaScript & Interactivity', description: 'Developed dynamic and interactive user experiences using JavaScript and DOM manipulation.', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { year: '2025', title: 'UI Styling & Design Systems', description: 'Refined frontend styling skills using Tailwind CSS to build scalable and consistent UI components.', icon: Palette, color: 'from-pink-500 to-rose-500' },
    { year: '2025', title: 'React Development', description: 'Built component-based user interfaces using React, focusing on state management and reusability.', icon: Atom, color: 'from-cyan-500 to-sky-500' },
    { year: '2025', title: 'Next.js & Production Apps', description: 'Developed production-ready web applications using Next.js with routing, optimization, and best practices.', icon: Target, color: 'from-green-500 to-emerald-500' },
    { year: '2026', title: 'Mernstack Developer (Frontend)', description: 'Started professional role at Rise Together, specializing in high-performance frontend applications using Next.js and TypeScript with clean code architecture.', icon: Code2, color: 'from-blue-600 to-indigo-600' },
  ];

  const workPreferences = [
    { icon: Code2, title: 'Clean Code Enthusiast', description: 'I love writing maintainable, well-documented code that other developers enjoy working with.' },
    { icon: Palette, title: 'UI/UX Perfectionist', description: 'Crafting pixel-perfect, responsive interfaces with smooth animations and delightful user experiences.' },
    { icon: Zap, title: 'Performance Optimizer', description: 'Building fast, efficient applications that load quickly and provide seamless interactions.' },
    { icon: Target, title: 'Problem Solver', description: 'I thrive on challenging projects that push my skills and require creative solutions.' },
    { icon: Users, title: 'Collaborative Mindset', description: 'Enjoy working closely with designers, developers, and stakeholders to build impactful products.' },
    { icon: BookOpen, title: 'Continuous Learner', description: 'Constantly exploring new tools, frameworks, and best practices to stay current in a fast-evolving tech landscape.' },
  ];

  const hobbies = [
    { icon: Coffee, title: 'Coffee Brewing', gradient: 'from-amber-600 to-yellow-700' },
    { icon: BookOpen, title: 'Reading', gradient: 'from-blue-600 to-indigo-700' },
    { icon: Gamepad2, title: 'Gaming', gradient: 'from-purple-600 to-pink-700' },
    { icon: MapPin, title: 'Traveling', gradient: 'from-sky-600 to-cyan-700' },
    { icon: Moon, title: 'Night Walking', gradient: 'from-slate-600 to-gray-800' },
    { icon: Utensils, title: 'Exploring Food', gradient: 'from-red-600 to-orange-700' },
    { icon: Headphones, title: 'Music & Focus', gradient: 'from-emerald-600 to-green-700' },
    { icon: Brain, title: 'Creative Thinking', gradient: 'from-fuchsia-600 to-rose-700' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden section-divider">
      {/* Background */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold tracking-wide text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 animate-pulse" />
                Get to Know Me
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A passionate developer who believes in creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Introduction - Bento Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden group gradient-border">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">Hello, I'm Arman! &#128075;</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm a <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> with a deep passion for building
                  beautiful, functional, and user-centric web applications.
                </p>
                <p>
                  What drives me is the perfect blend of <span className="text-blue-400 font-semibold">creativity and logic</span> that
                  programming offers. I love transforming complex problems into elegant solutions.
                </p>
                <p>
                  Beyond the code, I value <span className="text-purple-400 font-semibold">continuous learning</span>,
                  clean architecture, and meaningful collaboration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Vertical Timeline - Journey */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Journey</span>
          </h3>

          {/* Vertical Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-accent/50 md:-translate-x-px" />

            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative flex items-start gap-6 mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <TiltCard>
                    <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-3 ${
                        index % 2 === 0 ? 'md:ml-auto' : ''
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs font-bold text-slate-500 mb-1">{step.year}</div>
                      <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </TiltCard>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-6 z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} border-4 border-slate-900 shadow-lg`} />
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid - Work Preferences */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            What I <span className="text-gradient">Love Doing</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workPreferences.map((pref, index) => (
              <TiltCard key={index}>
                <motion.div variants={item} className="glass-panel rounded-2xl p-6 relative overflow-hidden group h-full hover:border-primary/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <pref.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{pref.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{pref.description}</p>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* Hobbies - Bento Grid */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Beyond <span className="text-gradient">Coding</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <TiltCard key={index}>
                <motion.div variants={item} className="glass-panel rounded-2xl p-5 text-center group hover:border-white/10 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <hobby.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{hobby.title}</h4>
                </motion.div>
              </TiltCard>
            ))}
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-20">
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden gradient-border">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">My Philosophy</h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6 italic">
                "Great code is not just about making things work—it's about making them work
                <span className="text-cyan-400 font-semibold not-italic"> beautifully</span>,
                <span className="text-blue-400 font-semibold not-italic"> efficiently</span>, and
                <span className="text-purple-400 font-semibold not-italic"> sustainably</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['Team Player', 'Quick Learner', 'Detail-Oriented', 'Creative Thinker'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:border-primary/30 hover:text-primary transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
