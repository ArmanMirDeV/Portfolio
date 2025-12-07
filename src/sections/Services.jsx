import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Frontend Development",
    text: "I build fast, responsive, and modern user interfaces using React, Tailwind, and Next.js, ensuring smooth and intuitive user experiences.",
    highlight: true,
  },
  {
    id: "02",
    title: "Full-Stack (MERN) Solutions",
    text: "From UI to database, I develop complete MERN-stack applications using React, Node.js, Express.js, and MongoDB with clean, scalable architecture.",
  },
  {
    id: "03",
    title: "Next.js Applications",
    text: "I create high-performance Next.js apps with SSR, SSG, API routes, and optimized SEO, delivering production-ready web solutions.",
  },
  {
    id: "04",
    title: "API & Backend Development",
    text: "I build secure and efficient REST APIs using Node.js and Express, integrating MongoDB for fast and flexible data management.",
  },
  {
    id: "05",
    title: "UI/UX & Component Design",
    text: "I design clean, reusable components and visually appealing interfaces focused on usability, accessibility, and consistent branding.",
  },
  {
    id: "06",
    title: "Project Architecture & Optimization",
    text: "I structure projects with best practices, optimize performance, and deliver maintainable, scalable code for long-term growth.",
  },
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

const Services = () => {
    return (
        <section id="services" className="py-20 bg-background-dark dark:bg-slate-900/50 relative">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div 
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className={`p-8 rounded-2xl border transition-all duration-300 ${
                                service.highlight 
                                ? 'bg-surface-dark border-primary shadow-[0_0_30px_rgba(0,242,255,0.15)] relative overflow-hidden group' 
                                : 'bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/10'
                            }`}
                        >
                            {service.highlight && (
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none group-hover:opacity-75 transition-opacity"></div>
                            )}
                            <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
                                {service.id}. {service.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                {service.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
