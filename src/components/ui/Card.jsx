import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = "", hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`glass-panel rounded-xl p-6 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
