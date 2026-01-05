import { FaHome, FaShapes, FaBriefcase, FaUser, FaUsers, FaTag, FaBlog, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaBookOpen, FaCode } from 'react-icons/fa';

import logo from "../assets/armanmir.jpg"
import SocialLinks from './SocialLinks';

const navItems = [
  { icon: FaHome, label: 'Home', href: '#home' },
  { icon: FaUser, label: 'About', href: '#about' },
  { icon: FaShapes, label: 'Services', href: '#services' },
  { icon: FaCode, label: 'Skills', href: '#skills' },
  { icon: FaBriefcase, label: 'Projects', href: '#projects' },
  { icon: FaBookOpen, label: 'Experience', href: '#experience' }, // Changed Icon for experience
  { icon: FaEnvelope, label: 'Contact', href: '#contact' },
];

const Sidebar = () => {
    return (
      <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 bg-background-dark border-r border-white/10 flex-col justify-between p-6 z-50">
        {/* Profile */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-8 group">
            {/* Pulsing Border */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>

            {/* Image */}
            <img
              src={logo}
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-surface-dark transform scale-95 group-hover:scale-105 transition-transform duration-500 ease-in-out "
            />
          </div>

          <nav className="w-full">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 py-2 px-4 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
                  >
                    <item.icon className="text-primary group-hover:text-secondary group-hover:scale-110 transition-all duration-300" />
                    <span className="text-sm font-medium tracking-wide">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Socials */}
        <div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
          <h3 className="text-xs font-semibold text-slate-500 mb-4 uppercase tracking-wider">
            Find Me
          </h3>
          {/* <div className="flex items-center justify-center gap-3">
            {[FaInstagram, FaLinkedin, FaTwitter, FaFacebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
              >
                <Icon size={14} />
              </a>
            ))}
          </div> */}
                <SocialLinks />
        </div>
      </aside>
    );
};

export default Sidebar;
