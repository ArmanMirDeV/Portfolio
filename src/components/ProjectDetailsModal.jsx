import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Cpu, Rocket, AlertTriangle, Shield, CheckCircle2 } from 'lucide-react';

const ProjectDetailsModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md border border-white/10 transition-all"
            >
              <X size={24} />
            </button>

            {/* Scrollable Container */}
            <div className="overflow-y-auto custom-scrollbar">
              {/* Image Header */}
              <div className="relative h-[250px] sm:h-[400px] w-full">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                  <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-6 sm:p-10 grid lg:grid-cols-3 gap-10">
                {/* Left Column: Description & Stack */}
                <div className="lg:col-span-2 space-y-10">
                  {/* Brief Description */}
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-cyan-400">
                      <Rocket size={20} />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Overview</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                      {project.desc}
                    </p>
                  </section>

                  {/* Tech Stack */}
                  <section>
                    <div className="flex items-center gap-2 mb-6 text-purple-400">
                      <Cpu size={20} />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Technology Stack</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {project.stackDetails.map((tech, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <CheckCircle2 size={16} className="text-green-400" />
                          <span className="text-slate-200 text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Challenges Faced */}
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-amber-400">
                      <AlertTriangle size={20} />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Challenges Faced</h3>
                    </div>
                    <ul className="space-y-4">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/10">
                           <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                           <p className="text-slate-300 italic">"{challenge}"</p>
                        </li>
                      ))}
                    </ul>
                  </section>

                   {/* Future Plans */}
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-emerald-400">
                      <Rocket size={20} />
                      <h3 className="text-xl font-bold uppercase tracking-wider">Future Improvements</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.futurePlans.map((plan, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-300">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>{plan}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                {/* Right Column: Actions & Details */}
                <div className="space-y-8">
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-black font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all hover:-translate-y-1"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-white/10 border border-white/10 text-white font-bold hover:bg-white/20 transition-all hover:-translate-y-1"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>

                  {/* Quick Info Box */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-6">
                    <h4 className="text-lg font-bold text-white mb-4">Project Info</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Category</span>
                        <span className="text-slate-200">Full Stack</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Industry</span>
                        <span className="text-slate-200">Public Utility</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Role</span>
                        <span className="text-slate-200">Solo Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailsModal;
