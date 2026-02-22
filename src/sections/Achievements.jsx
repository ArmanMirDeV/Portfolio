import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Award, Zap, ExternalLink, X, ZoomIn } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "Complete Web Development",
    issuer: "Programming Hero",
    date: "Dec 2024",
    description:
      "Successfully completed an intensive specialization in MERN-Stack Development with MongoDB, Express, React, and Node.js.",
    image: "https://i.ibb.co.com/TDJCs8XJ/Screenshot-2026-02-22-225539.png",
    color: "from-cyan-400 to-blue-500",
    icon: Trophy,
  },
  {
    id: 2,
    title: "BlackBelt",
    issuer: "Programming Hero",
    date: "Aug 2024",
    description:
      "In recognition of outstanding performance of the complete web development.",
    image: "https://i.ibb.co.com/3Yjyx7zF/1771583020892.jpg",
    color: "from-purple-400 to-pink-500",
    icon: Award,
  },
];

const Achievements = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="achievements" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-4"
          >
            <span className="text-primary font-medium text-xs uppercase tracking-widest">Certificates & Recognition</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            My <span className="text-gradient">Achievements</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-800/20 border border-slate-700/50 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div 
                  className="lg:w-1/2 h-64 lg:h-auto overflow-hidden relative cursor-zoom-in"
                  onClick={() => setSelectedImg(achievement.image)}
                >
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full  grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${achievement.color}`}>
                        <achievement.icon className="text-white w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-slate-500">{achievement.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mb-4">{achievement.issuer}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-outfit">
                      {achievement.description}
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-primary text-sm font-bold mt-auto"
                    onClick={() => setSelectedImg(achievement.image)}
                  >
                    View Full Certificate <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-full rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
