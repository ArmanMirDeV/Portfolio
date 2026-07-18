import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-background-dark/80 backdrop-blur-md border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-3 justify-center md:justify-start group cursor-pointer">
              <svg className="w-6 h-6 text-primary group-hover:rotate-180 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4z" />
              </svg>
              <span className="text-lg font-bold text-white tracking-wide">Arman Mir</span>
            </div>
            <p className="text-sm text-slate-500">Building digital experiences that matter.</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-400 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-3">
            {[
              { icon: FaInstagram, href: 'https://www.instagram.com/arman_mir_8583/' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/armanmirdev/' },
              { icon: FaFacebook, href: 'https://www.facebook.com/Arman.Mir.8583' },
              { icon: FaGithub, href: 'https://github.com/ArmanMirDeV' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Al Saidul Arman Mir. Crafted with <FaHeart className="inline text-red-400 mx-1" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
