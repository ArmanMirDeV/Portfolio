import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaShapes, FaBriefcase, FaUser, FaEnvelope, FaBookOpen, FaTimes, FaBars, FaCode } from 'react-icons/fa';
import logo from "../assets/armanmir.jpg";

const navItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaShapes, label: 'Services', href: '#services' },
  { icon: FaCode, label: 'Skills', href: '#skills' },
  { icon: FaBriefcase, label: 'Projects', href: '#projects' },
  { icon: FaBookOpen, label: 'Experience', href: '#experience' },
  { icon: FaEnvelope, label: 'Contact', href: '#contact' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="lg:hidden fixed top-4 right-4 z-[60] w-12 h-12 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-700/90 transition-colors"
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <FaTimes className="w-5 h-5 text-white" />
        ) : (
          <FaBars className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-screen w-64 sm:w-80 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 z-[56] flex flex-col shadow-2xl"
            >
              {/* Profile Section */}
              <div className="p-6 border-b border-slate-700/50">
                <div className="flex flex-col items-center">
                  <div className="relative w-20 h-20 mb-4">
                    <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
                    <img
                      src={logo}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-4 border-slate-800"
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg">Arman Mir</h3>
                  <p className="text-primary text-xs font-medium">MERN Stack Developer</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-6 overflow-y-auto">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-4 py-3 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                      >
                        <item.icon className="text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300 text-lg" />
                        <span className="text-sm font-medium tracking-wide">
                          {item.label}
                        </span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-slate-700/50">
                <p className="text-xs text-slate-500 text-center">
                  © 2026 Arman Mir
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
