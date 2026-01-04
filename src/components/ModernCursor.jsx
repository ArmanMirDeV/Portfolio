import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ModernCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || 
          e.target.tagName === 'BUTTON' || 
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Glow Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          filter: 'blur(8px)',
          opacity: 0.6,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.8 : 0.6,
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Optional: Secondary Outer Ring (Subtle) */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998]"
        style={{
            x: cursorXSpring,
            y: cursorYSpring,
        }}
        animate={{
            scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.15, delay: 0.05 }}
      />
    </>
  );
};

export default ModernCursor;
