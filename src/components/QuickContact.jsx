import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const QuickContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('quickContactDismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const autoHide = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('quickContactDismissed', 'true');
      }, 15000);
      return () => clearTimeout(autoHide);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('quickContactDismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-20 right-6 z-50 max-w-sm"
        >
          <div className="glass-panel p-4 rounded-2xl border border-primary/20 shadow-2xl relative gradient-border">
            <button
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center transition-colors z-10"
            >
              <X className="w-3 h-3 text-slate-300" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20">
                <span className="text-lg">&#128075;</span>
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">Looking for a developer?</h4>
                <p className="text-xs text-slate-400 mb-3">I'm available for new projects!</p>
                <div className="flex gap-2">
                  <a
                    href="#contact"
                    onClick={handleClose}
                    className="px-3 py-1.5 bg-primary text-white rounded-lg text-xs font-medium hover:bg-primary/80 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="mailto:mirarman8583@gmail.com"
                    onClick={handleClose}
                    className="px-3 py-1.5 bg-slate-700/60 text-slate-300 rounded-lg text-xs font-medium hover:bg-slate-600/60 transition-colors"
                  >
                    Email Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuickContact;
