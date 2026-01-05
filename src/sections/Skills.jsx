import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {
  FaCode,
  FaTerminal,
  FaDatabase,
  FaCodeBranch,
  FaMobileAlt,
  FaDraftingCompass,
  FaLaptopCode,
  FaServer,
  FaLock,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const skills = [
  {
    icon: FaCode,
    title: "HTML & CSS",
    text: "Expert in building semantic HTML structures and modern CSS layouts, including Flexbox, Grid, and animations",
    category: "Frontend"
  },
  {
    icon: FaCode,
    title: "JavaScript (ES6+)",
    text: "Strong expertise in vanilla JavaScript, ES6+ features, DOM manipulation, and asynchronous programming",
    category: "Frontend"
  },
  {
    icon: FaLaptopCode,
    title: "React.js",
    text: "Building dynamic, responsive, and component-based web applications using React, Redux, and Hooks",
    category: "Frontend"
  },
  {
    icon: FaLaptopCode,
    title: "Next.js",
    text: "Leveraging Next.js for high-performance, SEO-optimized, and scalable production web applications",
    category: "Frontend"
  },
  {
    icon: FaCode,
    title: "Front-end Development",
    text: "Expert HTML5, CSS3, JavaScript (ES6+), React, Vue.js. Crafting seamless user experiences",
    highlight: true,
    category: "Frontend"
  },
  {
    icon: FaServer,
    title: "Node.js & Express.js",
    text: "Developing scalable backend APIs and server-side applications using Node.js and Express.js",
    category: "Backend"
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    text: "Expertise in architecting and managing relational and non-relational databases like MySQL and MongoDB",
    category: "Backend"
  },
  {
    icon: FaMobileAlt,
    title: "Full MERN Stack",
    text: "Creating end-to-end full-stack MERN applications that are secure, scalable, and fully responsive",
    highlight: true,
    category: "Fullstack"
  },
  {
    icon: FaCodeBranch,
    title: "Version Control",
    text: "Proficient in Git ecosystems (GitHub, GitLab, Bitbucket) for streamlined DevOps and collaboration",
    category: "Tools"
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const categories = ["All", "Frontend", "Backend", "Fullstack", "Tools"];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-sm flex items-center gap-2 uppercase tracking-tighter">
                 Professional Skills
              </span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase mb-8"
          >
            I Specialize In A Range Of Skills
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-background-dark border-primary shadow-[0_0_15px_rgba(0,242,255,0.4)]"
                    : "bg-white/5 text-slate-400 border-white/10 hover:border-primary/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`p-6 sm:p-8 rounded-3xl flex flex-col items-center text-center transition-all cursor-pointer duration-500 relative group overflow-hidden ${
                  skill.highlight
                    ? "bg-primary/10 border-2 border-primary ring-4 ring-primary/5 shadow-[0_0_30px_rgba(0,242,255,0.1)]"
                    : "bg-surface-dark border border-white/5 hover:border-primary/30 hover:shadow-2xl"
                }`}
              >
                {/* Background Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    skill.highlight ? "bg-primary text-background-dark scale-110 shadow-lg" : "bg-white/5 text-primary group-hover:bg-primary/20"
                }`}>
                    <skill.icon className="text-3xl" />
                </div>

                <h3 className={`text-xl font-bold mb-3 ${skill.highlight ? 'text-white' : 'text-white group-hover:text-primary transition-colors'}`}>
                    {skill.title}
                </h3>
                
                <p className="text-sm text-slate-400 leading-relaxed font-outfit">
                    {skill.text}
                </p>

                {/* Category Badge */}
                <span className="mt-6 text-[10px] uppercase font-black tracking-widest text-slate-500 bg-white/5 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-background-dark transition-all">
                    {skill.category}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
