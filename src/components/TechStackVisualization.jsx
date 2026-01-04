import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechStackVisualization = () => {
  const [activeLayer, setActiveLayer] = useState(null);

  const layers = {
    frontend: {
      name: 'Frontend',
      techs: ['React', 'Next.js', 'Tailwind'],
      color: '#0ea5e9',
      position: 'top'
    },
    backend: {
      name: 'Backend',
      techs: ['Node.js', 'Express'],
      color: '#6366f1',
      position: 'middle'
    },
    database: {
      name: 'Database',
      techs: ['MongoDB', 'Firebase'],
      color: '#8b5cf6',
      position: 'bottom'
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-8">
      <svg className="w-full h-64" viewBox="0 0 300 200">
        {/* Connection Lines */}
        <motion.line
          x1="150" y1="50" x2="150" y2="100"
          stroke={activeLayer === 'frontend' || activeLayer === 'backend' ? '#0ea5e9' : '#334155'}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.line
          x1="150" y1="100" x2="150" y2="150"
          stroke={activeLayer === 'backend' || activeLayer === 'database' ? '#6366f1' : '#334155'}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />

        {/* Frontend Layer */}
        <motion.g
          onMouseEnter={() => setActiveLayer('frontend')}
          onMouseLeave={() => setActiveLayer(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <rect
            x="75" y="30" width="150" height="40" rx="8"
            fill={activeLayer === 'frontend' ? '#0ea5e9' : '#1e293b'}
            stroke="#0ea5e9"
            strokeWidth="2"
            className="cursor-pointer transition-all"
          />
          <text x="150" y="55" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Frontend
          </text>
        </motion.g>

        {/* Backend Layer */}
        <motion.g
          onMouseEnter={() => setActiveLayer('backend')}
          onMouseLeave={() => setActiveLayer(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <rect
            x="75" y="80" width="150" height="40" rx="8"
            fill={activeLayer === 'backend' ? '#6366f1' : '#1e293b'}
            stroke="#6366f1"
            strokeWidth="2"
            className="cursor-pointer transition-all"
          />
          <text x="150" y="105" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Backend
          </text>
        </motion.g>

        {/* Database Layer */}
        <motion.g
          onMouseEnter={() => setActiveLayer('database')}
          onMouseLeave={() => setActiveLayer(null)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <rect
            x="75" y="130" width="150" height="40" rx="8"
            fill={activeLayer === 'database' ? '#8b5cf6' : '#1e293b'}
            stroke="#8b5cf6"
            strokeWidth="2"
            className="cursor-pointer transition-all"
          />
          <text x="150" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
            Database
          </text>
        </motion.g>
      </svg>

      {/* Tech Details */}
      {activeLayer && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 glass-panel rounded-lg"
        >
          <h4 className="text-sm font-bold text-primary mb-2">
            {layers[activeLayer].name} Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {layers[activeLayer].techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-slate-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TechStackVisualization;
