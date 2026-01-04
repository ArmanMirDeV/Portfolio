import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const AvailabilityCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 }}
      className="glass-panel p-4 sm:p-6 rounded-2xl mt-8 border-l-4 border-green-500"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span className="text-green-500">●</span> Available for Work
          </h3>
          
          <div className="space-y-2 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              <span>Open to: Full-time, Contract, Freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Location: Remote / Hybrid</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Start: Immediately</span>
            </div>
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-lg font-medium text-sm hover:bg-green-600 transition-colors"
          >
            Let's Talk →
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
