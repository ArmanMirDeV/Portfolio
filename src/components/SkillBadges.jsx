import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Trophy, Star } from 'lucide-react';

const SkillBadges = () => {
  const skills = [
    { icon: Zap, label: 'Fast Development', color: 'from-yellow-400 to-orange-500' },
    { icon: Users, label: 'Team Player', color: 'from-blue-400 to-cyan-500' },
    { icon: Trophy, label: 'Award Winner', color: 'from-purple-400 to-pink-500' },
    { icon: Star, label: 'Top Rated', color: 'from-green-400 to-emerald-500' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative group cursor-pointer"
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity`}></div>
          <div className="relative px-4 py-2 bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-700/50 flex items-center gap-2">
            <skill.icon className="w-4 h-4 text-white" />
            <span className="text-xs font-medium text-white">{skill.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillBadges;
