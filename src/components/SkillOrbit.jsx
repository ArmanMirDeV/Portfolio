import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const SkillOrbit = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'Node.js', level: 90, color: '#339933' },
    { name: 'MongoDB', level: 85, color: '#47A248' },
    { name: 'Express', level: 90, color: '#000000' },
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'Tailwind', level: 88, color: '#06B6D4' }
  ];

  return (
    <div className="mt-12">
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto flex items-center gap-2 px-6 py-3 glass-panel rounded-full hover:border-primary/50 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-sm font-medium text-primary">View Skills Breakdown</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4 text-primary" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                    <span className="text-xs text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillOrbit;
