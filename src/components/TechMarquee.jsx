import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiTypescript, SiJavascript, SiGit, SiFirebase,
  SiRedux, SiPostman, SiVercel, SiNetlify
} from 'react-icons/si';

const techStack = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
  { icon: SiRedux, name: 'Redux', color: '#764ABC' },
  { icon: SiPostman, name: 'Postman', color: '#FF6C37' },
  { icon: SiVercel, name: 'Vercel', color: '#ffffff' },
  { icon: SiNetlify, name: 'Netlify', color: '#00C7B7' },
];

const TechMarquee = () => {
  return (
    <div className="py-16 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 px-6 py-3 rounded-xl bg-slate-800/30 border border-slate-700/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
          >
            <tech.icon
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
              style={{ color: tech.color }}
            />
            <span className="text-slate-300 font-medium text-sm whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
