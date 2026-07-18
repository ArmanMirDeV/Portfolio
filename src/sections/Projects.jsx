import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Sparkles, Eye, Github } from 'lucide-react';
import ProjectDetailsModal from '../components/ProjectDetailsModal';

const projects = [
  {
    title: 'CityWatch - Public Infrastructure Reporting',
    desc: 'A digital platform enabling citizens to report real-world public issues like broken streetlights, potholes, and water leakage. Features real-time tracking and administrative dashboards.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    img: 'https://i.ibb.co.com/jvfZHkv6/Screenshot-2026-01-01-083236.png',
    link: 'https://city-watch-mir.netlify.app/',
    github: 'https://github.com/ArmanMirDeV/CityWatch-Client',
    featured: true,
    stackDetails: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'Cloudinary'],
    challenges: ['Implementing a robust image upload and processing pipeline for reports.', 'Designing an intuitive administrative dashboard for issue tracking and management.', 'Ensuring real-time updates for issue status changes across different user roles.'],
    futurePlans: ['Integrating Google Maps API for precise location pinpointing of reported issues.', 'Implementing AI-based categorization to automatically sort reports by severity.', 'Adding a mobile application for easier reporting on the go.'],
  },
  {
    title: 'KajWala - Local Service Provider Marketplace',
    desc: 'A full-stack service marketplace where users can book handyman services. Features provider dashboards, booking management, and review systems.',
    tags: ['MERN Stack', 'Firebase', 'Tailwind'],
    img: 'https://i.ibb.co.com/fGk1MqS5/Screenshot-2025-11-19-093605.png',
    link: 'https://kajwala.netlify.app/',
    github: 'https://github.com/ArmanMirDeV/KajWala-Client',
    featured: false,
    stackDetails: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase Auth', 'Tailwind CSS', 'TanStack Query'],
    challenges: ['Developing a complex booking logic that handles availability and multiple service types.', 'Managing real-time status updates for service requests between users and providers.', 'Building a responsive and interactive analytics dashboard for service providers.'],
    futurePlans: ['Integrating a real-time chat system for seamless communication between parties.', 'Implementing a secure payment gateway for direct bookings.', 'Adding a multi-tier subscription model for service providers.'],
  },
  {
    title: 'Urban-Arcade - Indie Games Database',
    desc: 'A community platform for discovering and supporting indie game developers. Users can browse, rate, and explore detailed game information.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    img: 'https://i.ibb.co.com/0pRhkZpz/Screenshot-2025-12-07-200653.png',
    link: 'https://urban-arcade-mir-dev.netlify.app/',
    github: 'https://github.com/ArmanMirDeV/Urban-Arcade',
    featured: false,
    stackDetails: ['React', 'Firebase Database', 'Firebase Auth', 'Tailwind CSS', 'DaisyUI', 'React Icons'],
    challenges: ['Handling large databases of game metadata and images efficiently.', 'Implementing a robust user rating and review system with authentication.', 'Creating a dynamic and visually engaging UI that reflects the arcade aesthetic.'],
    futurePlans: ['Implementing an in-browser game emulator for quick game demos.', 'Adding a developer-specific portal for game uploads and analytics.', 'Building a community forum for game discussions and developer feedback.'],
  },
  {
    title: 'EcoMart - Modern E-commerce Platform',
    desc: 'A full-featured online store with secure checkout, product management, and optimized user experience across all devices.',
    tags: ['Next.js', 'MongoDB'],
    img: 'https://i.ibb.co.com/XxWFFnXq/Screenshot-2025-12-07-201736.png',
    link: 'https://eco-mart-9vrq.vercel.app/',
    github: 'https://github.com/ArmanMirDeV/EcoMart',
    featured: false,
    stackDetails: ['Next.js', 'MongoDB', 'Node.js', 'Stripe API', 'Tailwind CSS', 'Redux Toolkit'],
    challenges: ['Optimizing page load times for high-resolution product images.', 'Implementing a secure and reliable checkout flow with third-party payments.', 'Managing complex inventory states across large product categories.'],
    futurePlans: ['Introducing an AI-powered product recommendation engine.', 'Expanding to include a multi-vendor marketplace functionality.', 'Developing a PWA for seamless mobile shopping experiences.'],
  },
];

const ProjectCard = ({ project, index, onSelect }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  const tagColors = {
    React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'Next.js': 'bg-white/10 text-white border-white/20',
    'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
    MongoDB: 'bg-green-600/10 text-green-400 border-green-600/20',
    Express: 'bg-slate-500/10 text-slate-300 border-slate-500/20',
    Firebase: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Tailwind: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    'Tailwind CSS': 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    'MERN Stack': 'bg-primary/10 text-primary border-primary/20',
    'MERN': 'bg-primary/10 text-primary border-primary/20',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`group relative rounded-3xl border overflow-hidden transition-all duration-500 ${
        project.featured ? 'md:col-span-2' : ''
      } ${
        'bg-slate-800/20 border-slate-700/30 hover:border-primary/30'
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${project.featured ? 'aspect-[21/9]' : 'aspect-video'}`}>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity" />

        {/* Floating Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
            <span key={idx} className={`px-3 py-1 backdrop-blur-md border rounded-full text-[10px] font-bold uppercase tracking-wider ${tagColors[tag] || 'bg-white/5 text-white border-white/10'}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-primary/90 backdrop-blur-md rounded-full text-[10px] font-black text-white uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-6 line-clamp-2 text-sm leading-relaxed">
          {project.desc}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelect(project)}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-primary hover:text-black hover:border-primary transition-all shadow-lg text-sm"
          >
            <Eye size={16} />
            View Details
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-white hover:bg-slate-700 transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary transition-all"
          >
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden section-divider">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-sm flex items-center gap-2">
                <Sparkles size={16} />
                Featured Work
              </span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 uppercase"
          >
            Creative <span className="text-gradient">Showcase</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Explore a collection of projects where design meets functionality to create exceptional user experiences.
          </motion.p>
        </header>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} onSelect={handleOpenModal} />
          ))}
        </div>
      </div>

      <ProjectDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
