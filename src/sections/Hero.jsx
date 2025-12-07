import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { User, FileText, ArrowRight } from 'lucide-react';
import img from "../assets/armanmir.jpg"
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20 px-6 lg:px-20 overflow-hidden"
    >
      {/* Content Container */}
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6"
          >
            <span className="text-primary font-medium tracking-wide text-sm flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              Available for work
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Building digital
            <span className="block text-gradient">experiences</span>
            that matter.
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            I'm a MERN Stack Developer passionate about crafting beautiful,
            high-performance web applications with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" className="group text-black">
              <FaGithub className=" mr-2" />{" "}
              <a href="https://github.com/">View GitHub</a>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              <FileText className="mr-2 w-4 h-4" />
              <a href="https://docs.google.com/document/d/18KcS1P4RPgHqot8UU4R9kP1nRygp9CFPFlCuIh5umBU/edit?tab=t.0">
                View Resume
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500 font-mono">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-white font-bold">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-white font-bold">
                N
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-xs text-white font-bold">
                M
              </div>
            </div>
            <p>Specialized in Modern Stack</p>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full h-full max-w-[500px] aspect-square">
            {/* Decorative Circles */}
            <div className="absolute inset-0 rounded-full border border-slate-700/50 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-slate-700/30 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30" />

            {/* Main Image Container (Glass Card) */}
            <div className="absolute inset-10 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                  {/* <User className="h-10 w-10 text-white" /> */}
                  <img
                    className="h-24 rounded-full w-18"
                    src={img}
                    alt="Arman Mir"
                  />
                </div>
                <h3 className="text-xl font-bold">Al Saidul Arman Mir</h3>
                <p className="text-primary text-sm">Mern-Stack Developer</p>

                <div className="mt-6 flex justify-center gap-2">
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    JavaScript
                  </span>
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    React
                  </span>
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    Node
                  </span>
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    Next
                  </span>
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-slate-900/50 rounded text-xs text-slate-300 border border-slate-700">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-sm font-bold">Open to Work</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-10 left-0 p-4 bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span className="text-sm font-bold">Fast & Scalable</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
