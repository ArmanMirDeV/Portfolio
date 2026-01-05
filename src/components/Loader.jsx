import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 25); // 100 steps * 25ms = 2500ms (approx 2.5-3 seconds)
    return () => clearInterval(interval);
  }, []);

  const text = "AL SAIDUL ARMAN MIR PORTFOLIO";
  const letters = text.split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-slate-900 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] animate-pulse animation-delay-2000" />
      </div>

      {/* Center Logo Effect */}
      <div className="relative mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-2 border-dashed border-cyan-500/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 border-2 border-dashed border-purple-500/30 rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-16 h-16 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.5)] overflow-hidden border-2 border-white/20 p-1"
          >
            <img
              src="/10456439.png"
              alt="Arman Mir"
              className="w-full h-full object-cover -rotate-45 rounded-xl scale-110"
            />
          </motion.div>
        </div>
      </div>

      {/* Loading Text */}
      <div className="flex mb-4">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.05,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
            className={`text-lg sm:text-2xl font-black tracking-[0.2em] ${char === " " ? "mx-2" : "text-white"}`}
            style={{
                textShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative border border-white/10 backdrop-blur-sm">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Percentage Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 font-mono text-cyan-400 text-sm font-bold tracking-widest"
      >
        {Math.round(progress)}%
      </motion.div>

      {/* Status Messages */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-8 text-slate-500 text-xs uppercase tracking-[0.3em] font-medium"
      >
        Initialising Dynamic Experiences...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
