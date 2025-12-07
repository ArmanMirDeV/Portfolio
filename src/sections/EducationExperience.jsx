import { motion } from 'framer-motion';
import img from "/unnamed.jpg"

const education = [
  {
    title: "Complete Web Development Bootcamp",
    year: "July-2025 - December2025",
    desc: "Programming Hero",
    highlight: true,
  },
  {
    title: "Computer Science & Engineering",
    year: "2023-Present",
    desc: "Sonargaon University",
    highlight: true,
  },

  {
    title: "Higher Secondary Certificate, Science",
    year: "2019-2022",
    desc: "Dhaka Udyan Government College",
  },
  {
    title: "Secondary School Certificate, Science",
    year: "2014-2019",
    desc: "SukhChar Mofizia High School",
  },
];

const experiences = [
  { company: "", year: "Null", role: "Null", desc: "Hire Me" },
  { company: "", year: "", role: "", desc: "Fresher" },
];

const EducationExperience = () => {
    return (
        <section id="experience" className="py-24 bg-background-dark dark:bg-slate-900/30 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <header className="text-center mb-20">
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Education & Experience</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Empowering Creativity</h1>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">through</h1>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Business consulting consultants provide expert advice and guide businesses to help them improve their performance, efficiency, and organizational
                    </p>
                </header>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {education.map((edu, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-xl transition-all duration-300 ${
                                    edu.highlight 
                                    ? 'bg-background-dark border border-primary shadow-[0_0_20px_rgba(0,242,255,0.1)]' 
                                    : 'bg-white/5 border border-white/5 hover:bg-white/10'
                                }`}
                            >
                                <h3 className="font-bold text-xl text-white">{edu.title}</h3>
                                <p className="font-semibold text-primary mt-1">{edu.year}</p>
                                <p className="mt-4 text-slate-400 leading-relaxed">{edu.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Experiences</h2>
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l border-white/10"
                                >
                                    <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00f2ff]"></div>
                                    <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-1">experience</p>
                                    <h3 className="text-2xl font-bold text-white">{exp.company} <span className="text-sm font-normal text-slate-500">({exp.year})</span></h3>
                                    <p className="font-semibold text-white/80 mt-1">{exp.role}</p>
                                    <p className="mt-4 text-slate-400 leading-relaxed">{exp.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 rotate-3 hover:rotate-0 transition-transform duration-500">
                             <img 
                                src={img}
                                alt="Working" 
                                className="rounded-lg h-[500px]  shadow-2xl"
                             />
                             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full blur-3xl opacity-50"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EducationExperience;
