import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setScrollPercent(Math.round(v * 100));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9990] h-[3px]">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(90deg, #0ea5e9, #6366f1, #f43f5e)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
