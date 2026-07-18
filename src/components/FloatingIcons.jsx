import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail } from 'lucide-react';

const FloatingIcons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Email Button */}
      <motion.a
        href="mailto:mirarman8583@gmail.com"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
      >
        <Mail className="w-5 h-5" />
      </motion.a>

      {/* Scroll to top */}
      {showScroll && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-xl bg-slate-800/60 backdrop-blur-md border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/10"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </>
  );
};

export default FloatingIcons;
