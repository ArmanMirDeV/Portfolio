import { motion } from "framer-motion";
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
  },
  {
    icon: FaCode,
    title: "JavaScript (ES6+)",
    text: "Strong expertise in vanilla JavaScript, ES6+ features, DOM manipulation, and asynchronous programming",
  },
  {
    icon: FaLaptopCode,
    title: "React.js",
    text: "Building dynamic, responsive, and component-based web applications using React, Redux, and Hooks",
  },
  {
    icon: FaLaptopCode,
    title: "Next.js",
    text: "Building dynamic, responsive, and component-based web applications using React, Redux, and Hooks",
  },
  {
    icon: FaCode,
    title: "Front-end Development",
    text: "Expert HTML5, CSS3, JavaScript (ES6+), React, Vue.js",
    highlight: true,
  },
  {
    icon: FaServer,
    title: "Node.js & Express.js",
    text: "Developing scalable backend APIs and server-side applications using Node.js, Express.js, and RESTful architecture",
  },

  {
    icon: FaDatabase,
    title: "Database Management",
    text: "Expert & doing MySQL, MongoDB",
  },
  {
    icon: FaMobileAlt,
    title: "Responsive & MERN Stack Development",
    text: "Creating full-stack MERN applications that are mobile-friendly, scalable, and maintainable",
    highlight: true,
  },
  {
    icon: FaCodeBranch,
    title: "Version Control",
    text: "Expert & doing Git, GitHub, Bitbucket. Providing the best.",
  },

  //   {
  //     icon: FaLock,
  //     title: "Authentication & Security",
  //     text: "Implementing JWT, OAuth, bcrypt, and secure API endpoints for safe user authentication",
  //   },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white uppercase"
          >
            I Specialize In A <br className="sm:hidden" /> Range Of{" "}
            <span className="inline-block animate-bounce">
              <GiSkills />
            </span>
            Skills
          </motion.h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer duration-300 ${
                skill.highlight
                  ? "bg-primary text-background-dark shadow-[0_0_25px_rgba(0,242,255,0.4)] ring-4 ring-primary/20"
                  : "bg-surface-dark border border-white/5 hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              <skill.icon
                className={`text-4xl mb-4 ${
                  skill.highlight ? "text-background-dark" : "text-primary"
                }`}
              />
              <h2
                className={`text-xl font-bold mb-2 ${
                  skill.highlight ? "text-background-dark" : "text-white"
                }`}
              >
                {skill.title}
              </h2>
              <p
                className={`text-sm leading-relaxed ${
                  skill.highlight
                    ? "text-background-dark/80 font-medium"
                    : "text-slate-400"
                }`}
              >
                {skill.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
