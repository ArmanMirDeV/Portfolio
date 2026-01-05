import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from 'react-icons/si';

const TechStackCards = () => {
  const techStack = [
    { icon: SiReact, name: 'React', color: '#61DAFB', experience: '1 year' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933', experience: '1 year' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248', experience: '1 year' },
    { icon: SiExpress, name: 'Express', color: '#000000', experience: '1 year' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', experience: '1 year' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4', experience: '1 year' }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, rotateY: -90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ delay: 0.1 * index, duration: 0.6 }}
          whileHover={{ rotateY: 180, scale: 1.05 }}
          className="relative h-16 sm:h-20 md:h-24 cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 bg-slate-800/50 backdrop-blur-md rounded-lg border border-slate-700/50 flex flex-col items-center justify-center gap-1 sm:gap-2 shadow-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <tech.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: tech.color }} />
            <span className="text-[10px] sm:text-xs md:text-sm text-slate-300 font-medium">{tech.name}</span>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-md rounded-lg border border-primary/50 flex items-center justify-center shadow-lg"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className="text-center">
              <div className="text-xs sm:text-sm md:text-base font-bold text-primary">{tech.experience}</div>
              <div className="text-[10px] sm:text-xs text-slate-400">Experience</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackCards;
