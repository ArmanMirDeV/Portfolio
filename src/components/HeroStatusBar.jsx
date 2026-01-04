import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Wifi, Battery } from 'lucide-react';

const HeroStatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="absolute top-6 left-0 right-0 flex justify-center px-4 z-20"
    >
      <div className="flex items-center gap-4 sm:gap-8 px-6 py-2 rounded-full bg-slate-900/40 backdrop-blur-md border border-white/5 shadow-xl text-xs sm:text-sm font-mono text-slate-400">
        {/* Location */}
        <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span>Dhaka, Bangladesh</span>
        </div>

        {/* Separator */}
        <div className="w-px h-3 bg-slate-700"></div>

        {/* Availability */}
        <div className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="hidden sm:inline">Online</span>
        </div>

        {/* Separator */}
        <div className="w-px h-3 bg-slate-700"></div>

        {/* Time */}
        <div className="flex items-center gap-2 min-w-[80px] hover:text-blue-400 transition-colors cursor-default">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          <span>{formatTime(time)}</span>
        </div>

        {/* System Icons (Decorations) */}
        <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-700 ml-2 text-slate-500">
          <Wifi className="w-3 h-3" />
          <Battery className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroStatusBar;
