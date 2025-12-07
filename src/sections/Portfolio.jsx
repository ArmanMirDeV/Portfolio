import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const items = [
  {
    title: "React & Next.js Projects",
    subtitle: "Frontend Development",
    img: "https://via.placeholder.com/600x400.png?text=React+Next.js+Project",
  },
  {
    title: "Full-Stack MERN Apps",
    subtitle: "MongoDB, Express, Node.js",
    img: "https://via.placeholder.com/600x400.png?text=MERN+Stack+App",
  },
  {
    title: "UI/UX & Component Design",
    subtitle: "Reusable & Responsive",
    img: "https://via.placeholder.com/600x400.png?text=UI+UX+Design",
  },
  {
    title: "APIs & Backend Integration",
    subtitle: "RESTful & Scalable",
    img: "https://via.placeholder.com/600x400.png?text=API+Integration",
  },
];

const Portfolio = () => {
  return (
    <section id="highlights" className="py-24 bg-background-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-bold tracking-widest uppercase mb-3 text-sm">
            My Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building{" "}
            <span className="text-primary neon-glow">
              Modern Web Applications
            </span>
          </h1>
          <p className="text-slate-400">
            I specialize in creating scalable, responsive, and user-focused web
            applications using React, Next.js, Node.js, Express, and MongoDB.
            Each project demonstrates best practices, performance optimization,
            and modern UI/UX design.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group space-y-4 cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl border border-white/5 group-hover:border-primary/50 transition-colors duration-300 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover aspect-video transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg tracking-widest border border-primary px-4 py-2 rounded uppercase backdrop-blur-sm">
                    View Project
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start gap-4 px-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500">{item.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                  <FaArrowRight className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
