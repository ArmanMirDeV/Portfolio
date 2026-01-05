import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const QuickContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-50 max-w-sm sm:max-w-md mx-auto sm:mx-0"
        >
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-primary/30 shadow-2xl">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-700/50 hover:bg-slate-600 transition-colors"
            >
              <X className="w-4 h-4 text-slate-300" />
            </button>

            <div className="pr-6 sm:pr-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-base sm:text-lg">👋</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Looking for a developer?</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400">I'm available for new projects!</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <motion.a
                  href="#contact"
                  onClick={handleClose}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-3 py-2 bg-primary text-white rounded-lg text-xs font-medium text-center hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </motion.a>
                <motion.a
                  href="mailto:mirarman8583@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-3 py-2 bg-slate-700/50 text-slate-300 rounded-lg text-xs font-medium text-center hover:bg-slate-600/50 transition-colors"
                >
                  Email Me
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickContact;
