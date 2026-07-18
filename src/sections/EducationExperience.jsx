import { motion } from 'framer-motion';
import img from '/unnamed.jpg';

const education = [
  { title: 'Complete Web Development Bootcamp', year: 'July-2025 - December2025', desc: 'Programming Hero', highlight: true },
  { title: 'Computer Science & Engineering', year: '2023-Present', desc: 'Sonargaon University', highlight: true },
  { title: 'Higher Secondary Certificate, Science', year: '2019-2022', desc: 'Dhaka Udyan Government College' },
  { title: 'Secondary School Certificate, Science', year: '2014-2019', desc: 'SukhChar Mofizia High School' },
];

const experiences = [
  {
    company: 'Rise Together',
    year: 'March 2026 - Present',
    role: 'Mernstack Developer (Frontend)',
    link: 'https://www.risetogetherbd.com/',
    desc: 'Specializing in frontend development using Next.js and TypeScript. Building industry-standard projects while implementing clean code architecture and modern development workflows under senior mentorship.',
  },
  { company: 'Open Source', year: '2025', role: 'Contributor', desc: 'Actively exploring and contributing to various open-source projects to refine development skills and learn from the community.' },
];

const EducationExperience = () => {
  return (
    <section id="experience" className="py-24 relative section-divider">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <span className="text-primary font-semibold tracking-wide text-sm">Education & Experience</span>
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Building Foundations through <span className="text-gradient">Knowledge</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My academic background and professional journey have shaped my ability to build scalable, high-performance web applications.
          </p>
        </header>

        {/* Education - Vertical Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl transition-all duration-500 group hover:scale-[1.02] ${
                  edu.highlight
                    ? 'bg-slate-800/40 border border-primary/30 shadow-[0_0_20px_rgba(14,165,233,0.05)]'
                    : 'bg-slate-800/20 border border-slate-700/30 hover:border-primary/10'
                }`}
              >
                <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{edu.title}</h3>
                <p className="font-semibold text-primary mt-1 text-sm">{edu.year}</p>
                <p className="mt-3 text-slate-400 leading-relaxed text-sm">{edu.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Experiences</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
                  <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">Experience</p>
                  <h3 className="text-xl font-bold text-white">
                    {exp.link ? (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline-offset-4 hover:underline decoration-primary/30">
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="text-sm font-normal text-slate-500 ml-2">({exp.year})</span>
                  </h3>
                  <p className="font-semibold text-white/80 mt-1 text-sm">{exp.role}</p>
                  <p className="mt-3 text-slate-400 leading-relaxed text-sm">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8 lg:mt-0"
          >
            <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <img
                src={img}
                alt="Working"
                className="rounded-xl h-64 sm:h-80 md:h-96 lg:h-[500px] w-auto object-cover shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full blur-3xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
