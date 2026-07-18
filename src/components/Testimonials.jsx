import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Programming Hero Community",
    role: "Web Development Bootcamp",
    text: "Arman demonstrated exceptional skills in full-stack development throughout the bootcamp. His projects showed great attention to detail and modern best practices.",
    rating: 5,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Rise Together Team",
    role: "Work Colleagues",
    text: "Working with Arman has been a great experience. He brings fresh perspectives, writes clean code, and consistently delivers high-quality frontend solutions using Next.js and TypeScript.",
    rating: 5,
    color: "from-purple-500 to-pink-500",
  },

];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm mb-4">
            <span className="text-purple-400 font-semibold tracking-wide text-sm flex items-center gap-2">
              <Quote className="w-4 h-4" />
              What People Say
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Testimonials & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${testimonials[current].color} opacity-10 blur-3xl rounded-full`} />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                  "{testimonials[current].text}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center mb-3`}>
                    <span className="text-white font-bold text-lg">
                      {testimonials[current].name[0]}
                    </span>
                  </div>
                  <h4 className="text-white font-bold">{testimonials[current].name}</h4>
                  <p className="text-slate-400 text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-primary' : 'w-2 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
