import { motion } from 'framer-motion';
import { Sparkles, Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const services = [
  { id: '01', title: 'Frontend Development', text: 'I build fast, responsive, and modern user interfaces using React, Tailwind, and Next.js, ensuring smooth and intuitive user experiences.', highlight: true },
  { id: '02', title: 'Full-Stack (MERN) Solutions', text: 'From UI to database, I develop complete MERN-stack applications using React, Node.js, Express.js, and MongoDB with clean, scalable architecture.' },
  { id: '03', title: 'Next.js Applications', text: 'I create high-performance Next.js apps with SSR, SSG, API routes, and optimized SEO, delivering production-ready web solutions.' },
  { id: '04', title: 'API & Backend Development', text: 'I build secure and efficient REST APIs using Node.js and Express, integrating MongoDB for fast and flexible data management.' },
  { id: '05', title: 'UI/UX & Component Design', text: 'I design clean, reusable components and visually appealing interfaces focused on usability, accessibility, and consistent branding.' },
  { id: '06', title: 'Project Architecture & Optimization', text: 'I structure projects with best practices, optimize performance, and deliver maintainable, scalable code for long-term growth.' },
];

const process = [
  { icon: Search, title: 'Discovery', description: 'Understanding your needs, goals, and vision to create a clear roadmap.' },
  { icon: PenTool, title: 'Design', description: 'Crafting intuitive UI/UX designs with modern aesthetics and user flow.' },
  { icon: Code2, title: 'Develop', description: 'Building robust, scalable applications with clean code architecture.' },
  { icon: Rocket, title: 'Deploy', description: 'Launching, testing, and optimizing for peak performance and reliability.' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden section-divider">
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                My Expertise
              </span>
            </div>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Services I <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Compelling digital solutions tailored to your needs, built with modern technologies.
          </p>
        </motion.div>

        {/* Bento Grid Services */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`p-8 rounded-2xl border transition-all duration-500 relative overflow-hidden group ${
                service.highlight
                  ? 'bg-slate-800/60 border-primary/50 shadow-[0_0_30px_rgba(14,165,233,0.1)]'
                  : 'bg-slate-800/20 border-slate-700/30 hover:border-primary/20'
              }`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 70%)',
                }}
              />
              <div className="relative z-10">
                <span className={`text-4xl font-black ${service.highlight ? 'text-primary/30' : 'text-white/5'} mb-4 block`}>
                  {service.id}
                </span>
                <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-primary' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How I Work - Process */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            How I <span className="text-gradient">Work</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <motion.div key={index} variants={item} className="relative group">
                <div className="glass-panel rounded-2xl p-6 text-center h-full hover:border-primary/20 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-xs font-bold text-primary/50 mb-2">Step {index + 1}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {/* Arrow between steps */}
                {index < process.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-slate-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
