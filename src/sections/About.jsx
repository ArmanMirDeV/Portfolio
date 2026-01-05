import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Palette, Gamepad2, BookOpen, Mountain, Heart, Sparkles, Zap, Target, Database, Layout, Atom, Users, MapPin, Moon, Utensils, Headphones, Brain } from 'lucide-react';

const About = () => {
  const journeySteps = [
  {
    year: "2023",
    title: "Introduction to Programming",
    description: "Started coding at university with C, learning core programming concepts and structured problem solving.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500"
  },
  {
    year: "2023",
    title: "Object-Oriented & Problem Solving",
    description: "Advanced to C++ with a focus on object-oriented programming and algorithmic problem solving.",
    icon: Code2,
    color: "from-indigo-500 to-purple-500"
  },
  {
    year: "2023",
    title: "Database Fundamentals",
    description: "Learned MySQL and relational database concepts including queries, relationships, and data management.",
    icon: Database,
    color: "from-blue-500 to-cyan-500"
  },
  {
    year: "2024",
    title: "Web Development Basics",
    description: "Began web development using HTML and CSS, building responsive and structured web layouts.",
    icon: Layout,
    color: "from-teal-500 to-green-500"
  },
  {
    year: "2024",
    title: "JavaScript & Interactivity",
    description: "Developed dynamic and interactive user experiences using JavaScript and DOM manipulation.",
    icon: Zap,
    color: "from-yellow-500 to-orange-500"
  },
  {
    year: "2025",
    title: "UI Styling & Design Systems",
    description: "Refined frontend styling skills using Tailwind CSS to build scalable and consistent UI components.",
    icon: Palette,
    color: "from-pink-500 to-rose-500"
  },
  {
    year: "2025",
    title: "React Development",
    description: "Built component-based user interfaces using React, focusing on state management and reusability.",
    icon: Atom,
    color: "from-cyan-500 to-sky-500"
  },
  {
    year: "2025",
    title: "Next.js & Production Apps",
    description: "Developed production-ready web applications using Next.js with routing, optimization, and best practices.",
    icon: Target,
    color: "from-green-500 to-emerald-500"
  }
];


 const workPreferences = [
  {
    icon: Code2,
    title: "Clean Code Enthusiast",
    description: "I love writing maintainable, well-documented code that other developers enjoy working with."
  },
  {
    icon: Palette,
    title: "UI/UX Perfectionist",
    description: "Crafting pixel-perfect, responsive interfaces with smooth animations and delightful user experiences."
  },
  {
    icon: Zap,
    title: "Performance Optimizer",
    description: "Building fast, efficient applications that load quickly and provide seamless interactions."
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "I thrive on challenging projects that push my skills and require creative solutions."
  },
  {
    icon: Users,
    title: "Collaborative Mindset",
    description: "Enjoy working closely with designers, developers, and stakeholders to build impactful products."
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Constantly exploring new tools, frameworks, and best practices to stay current in a fast-evolving tech landscape."
  }
];


 const hobbies = [
  {
    icon: Coffee,
    title: "Coffee Brewing",
    description: "Exploring different brewing methods and coffee beans—fueling both focus and creativity.",
    gradient: "from-amber-600 to-yellow-700"
  },
  {
    icon: BookOpen,
    title: "Reading",
    description: "Reading tech blogs, fiction, and self-improvement books to stay inspired and informed.",
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Strategy and puzzle games that sharpen analytical thinking and decision-making skills.",
    gradient: "from-purple-600 to-pink-700"
  },
  {
    icon: MapPin,
    title: "Traveling",
    description: "Discovering new places and cultures that broaden perspective and inspire creativity.",
    gradient: "from-sky-600 to-cyan-700"
  },
  {
    icon: Moon,
    title: "Night Walking",
    description: "Quiet night walks help me reflect, reset my thoughts, and generate new ideas.",
    gradient: "from-slate-600 to-gray-800"
  },
  {
    icon: Utensils,
    title: "Exploring Food",
    description: "Enjoy trying different cuisines and flavors—good food always boosts good mood.",
    gradient: "from-red-600 to-orange-700"
  },
  {
    icon: Headphones,
    title: "Music & Focus",
    description: "Listening to music while working helps me maintain deep focus and productivity.",
    gradient: "from-emerald-600 to-green-700"
  },
  {
    icon: Brain,
    title: "Creative Thinking",
    description: "Enjoy brainstorming ideas, reflecting on problems, and finding simple solutions.",
    gradient: "from-fuchsia-600 to-rose-700"
  }
];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold tracking-wide text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 animate-pulse" />
                Get to Know Me
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A passionate developer who believes in creating meaningful digital experiences
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">Hello, I'm Arman! 👋</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm a <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> with a deep passion for building 
                  beautiful, functional, and user-centric web applications. My journey in programming started with curiosity 
                  and has evolved into a professional pursuit of excellence in web development.
                </p>
                <p>
                  What drives me is the perfect blend of <span className="text-blue-400 font-semibold">creativity and logic</span> that 
                  programming offers. I love the challenge of transforming complex problems into elegant solutions, and the satisfaction 
                  of seeing users interact seamlessly with interfaces I've crafted.
                </p>
                <p>
                  Beyond the code, I'm someone who values <span className="text-purple-400 font-semibold">continuous learning</span>, 
                  clean architecture, and meaningful collaboration. I believe the best applications are built when technology 
                  meets empathy for the end user.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Programming Journey Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            My <span className="text-gradient">Journey</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="glass-panel rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 relative z-10`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-sm font-bold text-slate-500 mb-2">{step.year}</div>
                    <h4 className="text-xl font-bold mb-3 text-white">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${step.color} opacity-10 blur-2xl`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Work I Enjoy */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            What I <span className="text-gradient">Love Doing</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workPreferences.map((pref, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="glass-panel rounded-2xl p-8 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <pref.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{pref.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{pref.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Beyond <span className="text-gradient">Coding</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10, rotate: 2 }}
                className="relative group"
              >
                <div className="glass-panel rounded-2xl p-6 text-center h-full relative overflow-hidden">
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}></div>
                  
                  {/* Icon with Gradient */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${hobby.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <hobby.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-white">{hobby.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{hobby.description}</p>
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${hobby.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personality Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass-panel rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                <span className="text-gradient">My Philosophy</span>
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-6">
                "Great code is not just about making things work—it's about making them work 
                <span className="text-cyan-400 font-semibold"> beautifully</span>, 
                <span className="text-blue-400 font-semibold"> efficiently</span>, and 
                <span className="text-purple-400 font-semibold"> sustainably</span>. 
                I strive to write code that I'd be proud to show, that others would enjoy maintaining, 
                and that users would love interacting with."
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold">
                  Team Player
                </span>
                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
                  Quick Learner
                </span>
                <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold">
                  Detail-Oriented
                </span>
                <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold">
                  Creative Thinker
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
