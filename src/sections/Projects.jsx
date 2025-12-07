import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';


const projects = [
  {
    title: "KajWala: Local Service Provider Website",
    desc: "Kajwala is a full-stack service marketplace platform where users can browse, book, and manage various handyman and home services. Service providers can track their bookings, revenue, and ratings. The platform is fully responsive with smooth animations and interactive analytics dashboards.",
    tags: ["React", "Nodejs", "MongoDB"],
    img: "https://i.ibb.co.com/fGk1MqS5/Screenshot-2025-11-19-093605.png",
    link: "https://kajwala.netlify.app/",
  },
  {
    title: "Urban-Arcade: Indie Games Website",
    desc: "Designed for gamers and indie game enthusiasts. It allows users to discover, explore, and support indie game developers by browsing detailed game information, viewing ratings, and installing games they like. The platform aims to create a community-driven environment for game discovery.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    img: "https://i.ibb.co.com/0pRhkZpz/Screenshot-2025-12-07-200653.png",
    link: "https://urban-arcade-mir-dev.netlify.app/",
  },
  {
    title: "Appora.io: ",
    desc: "Appora.io is a modern, responsive web application designed to deliver high-performance user experiences. Built with scalability, speed, and user-friendliness in mind, Appora.io leverages cutting-edge front-end technologies and best development practices.",
    tags: ["HTML", "TailwindCSS", "React"],
    img: "https://i.ibb.co.com/3m4W15ND/Screenshot-2025-11-19-091554.png",
    link: "https://appora-io-as-mir.netlify.app/",
  },
  {
    title: "EcoMart: E-commerce Website",
    desc: "Your one-stop online store offering high-quality products at the best prices. Enjoy a smooth shopping experience with secure payments, fast delivery, and exceptional customer service.",
    tags: ["React", "Nextjs", "Nodejs", "Express", "MongoDB"],
    img: "https://i.ibb.co.com/XxWFFnXq/Screenshot-2025-12-07-201736.png",
    link: "https://eco-mart-9vrq.vercel.app/",
  },
];

const Projects = () => {
    return (
      <section id="projects" className="py-24 bg-surface-dark bg-opacity-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Here's a glimpse of <br /> some exciting{" "}
              <span className="inline-block animate-pulse">
                <GoProjectSymlink />
              </span>
              projects <br /> I've done
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-background-dark rounded-2xl border border-white/10 overflow-hidden group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] transition-all duration-300 flex flex-col"
              >
                <div className="overflow-hidden h-64 relative">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-slate-400 mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="flex items-center justify-between group/link"
                  >
                    <span className="font-medium text-white group-hover/link:text-primary transition-colors">
                      <a href={project.link}>View Project</a>
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-background-dark transition-all duration-300 transform group-hover/link:rotate-45">
                      <FaPlus />
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;
