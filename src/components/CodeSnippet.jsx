import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeSnippet = () => {
  const codeSnippets = [
    {
      language: 'JavaScript',
      code: `const developer = {
  name: 'Arman Mir',
  skills: ['React', 'Node.js'],
  passion: 'Building amazing apps'
};`
    },
    {
      language: 'React',
      code: `function App() {
  return (
    <div className="modern-web">
      <h1>Beautiful UIs</h1>
    </div>
  );
}`
    },
    {
      language: 'Node.js',
      code: `app.post('/api/create', async (req, res) => {
  const result = await Model.create(req.body);
  res.json({ success: true, result });
});`
    }
  ];

  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet].code;
    
    if (charIndex < snippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(snippet.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedCode('');
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentSnippet]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full bg-slate-900/90 backdrop-blur-xl rounded-lg border border-slate-700/50 shadow-2xl overflow-hidden"
    >
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 border-b border-slate-700/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-xs text-slate-400 ml-2 font-mono">
          {codeSnippets[currentSnippet].language}
        </span>
      </div>

      {/* Code Content */}
      <div className="p-4 font-mono text-sm">
        <pre className="text-slate-300">
          <code>{displayedCode}<span className="animate-pulse text-primary">|</span></code>
        </pre>
      </div>
    </motion.div>
  );
};

export default CodeSnippet;
