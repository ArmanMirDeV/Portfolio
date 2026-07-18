import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaCode, FaDatabase, FaCodeBranch, FaMobileAlt, FaLaptopCode, FaServer } from 'react-icons/fa';

const skills = [
  { icon: FaCode, title: 'HTML & CSS', text: 'Expert in semantic HTML and modern CSS layouts including Flexbox, Grid, and animations.', category: 'Frontend', level: 90 },
  { icon: FaCode, title: 'JavaScript & TypeScript', text: 'Building robust applications with TypeScript and ES6+, focusing on type safety and modular architecture.', category: 'Frontend', level: 88 },
  { icon: FaLaptopCode, title: 'React.js', text: 'Building dynamic, responsive, and component-based web applications using React, Redux, and Hooks.', category: 'Frontend', level: 95 },
  { icon: FaLaptopCode, title: 'Next.js', text: 'Leveraging Next.js for high-performance, SEO-optimized, and scalable production web applications.', category: 'Frontend', level: 90 },
  { icon: FaServer, title: 'Node.js & Express.js', text: 'Developing scalable backend APIs and server-side applications using Node.js and Express.js.', category: 'Backend', level: 85 },
  { icon: FaDatabase, title: 'Database Management', text: 'Architecting and managing relational and non-relational databases like MySQL and MongoDB.', category: 'Backend', level: 80 },
  { icon: FaMobileAlt, title: 'Full MERN Stack', text: 'Creating end-to-end full-stack MERN applications that are secure, scalable, and fully responsive.', category: 'Fullstack', level: 88 },
  { icon: FaCodeBranch, title: 'Version Control', text: 'Proficient in Git ecosystems (GitHub, GitLab, Bitbucket) for streamlined DevOps and collaboration.', category: 'Tools', level: 85 },
];

const ProficiencyRing = ({ level, size = 60, strokeWidth = 4, color = '#0ea5e9' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (level / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="-rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold text-white">{level}%</span>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Fullstack', 'Tools'];

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden section-divider">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-sm">Professional Skills</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase mb-8"
          >
            I Specialize In A Range Of Skills
          </motion.h2>

          {/* Animated Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'text-background-dark'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </header>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-primary/20 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <skill.icon className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{skill.title}</h3>
                      <ProficiencyRing level={skill.level} size={44} strokeWidth={3} />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed mb-3">{skill.text}</p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 bg-white/5 px-2.5 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
