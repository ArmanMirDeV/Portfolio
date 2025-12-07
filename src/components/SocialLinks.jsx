import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href="https://www.instagram.com/arman_mir_8583/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
      >
        <FaInstagram size={20} />
      </a>

      <a
        href="https://www.linkedin.com/in/armanmirdev/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
      >
        <FaLinkedin size={20} />
      </a>

      {/* <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
      >
        <FaTwitter size={20} />
      </a> */}

      <a
        href="https://www.facebook.com/Arman.Mir.8583"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="https://github.com/ArmanMirDeV"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-dark text-slate-400 hover:bg-primary hover:text-background-dark transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-primary/5"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
