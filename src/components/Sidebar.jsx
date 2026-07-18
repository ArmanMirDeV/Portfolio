import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaShapes, FaCode, FaBriefcase, FaAward, FaBookOpen, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/armanmir.jpg';
import SocialLinks from './SocialLinks';
import { motion } from 'framer-motion';

const navItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaShapes, label: 'Services', href: '#services' },
  { icon: FaCode, label: 'Skills', href: '#skills' },
  { icon: FaBriefcase, label: 'Projects', href: '#projects' },
  { icon: FaAward, label: 'Achievements', href: '#achievements' },
  { icon: FaBookOpen, label: 'Education', href: '#experience' },
  { icon: FaEnvelope, label: 'Contact', href: '#contact' },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      let current = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 bg-background-dark/95 backdrop-blur-lg border-r border-white/5 flex-col justify-between p-6 z-50">
      {/* Profile */}
      <div className="flex flex-col items-center">
        {/* Profile Image with animated gradient ring */}
        <div className="relative w-36 h-36 mb-8 group">
          {/* Animated gradient ring */}
          <div
            className="absolute -inset-1 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'conic-gradient(from 0deg, #0ea5e9, #6366f1, #f43f5e, #0ea5e9)',
              animation: 'spin 4s linear infinite',
            }}
          />
          <div className="absolute inset-0 rounded-full bg-background-dark" />
          <img
            src={logo}
            alt="Profile"
            className="relative w-full h-full rounded-full object-cover border-4 border-background-dark transform group-hover:scale-105 transition-transform duration-500"
          />
          {/* Online indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background-dark shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-4 py-2.5 px-4 rounded-xl transition-all duration-300 group relative ${
                      isActive
                        ? 'bg-primary/10 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-r-full"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <item.icon className={`transition-all duration-300 ${
                      isActive
                        ? 'text-primary scale-110'
                        : 'text-slate-500 group-hover:text-primary group-hover:scale-110'
                    }`} />
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Socials */}
      <div>
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />
        <h3 className="text-[10px] font-semibold text-slate-500 mb-4 uppercase tracking-widest">
          Find Me
        </h3>
        <SocialLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
