import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, Award } from 'lucide-react';

const StatsCounter = () => {
  const stats = [
    { icon: Code2, label: 'Projects Completed', value: 20, suffix: '+' },
    { icon: Briefcase, label: 'Years Experience', value: 1, suffix: '+' },
    { icon: Award, label: 'Client Satisfaction', value: 100, suffix: '%' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.round(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="glass-panel p-4 rounded-xl text-center group hover:border-primary/50 transition-all"
        >
          <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
          <div className="text-2xl font-bold text-white mb-1">
            {counts[index]}{stat.suffix}
          </div>
          <div className="text-xs text-slate-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCounter;
