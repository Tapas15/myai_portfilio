import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { NeuralBackground } from './components/NeuralBackground';
import { LiveProjectsPage } from './pages/LiveProjectsPage';
import { motion, useMotionValue } from 'motion/react';
import { Rocket, Sparkles } from 'lucide-react';

export default function App() {
  const navigate = useNavigate();

  // Floating button follows mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleButtonClick = () => {
    navigate('/live-projects');
  };

  return (
    <div 
      className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <NeuralBackground />
      
      <Routes>
        <Route path="/" element={
          <>
            {/* Big Floating Button - Follows Mouse */}
            <motion.div
              className="fixed z-50"
              style={{
                left: 0,
                top: 0,
                x: mouseX,
                y: mouseY,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="relative cursor-pointer"
                style={{ transform: 'translate(-50%, -50%)' }}
                onClick={handleButtonClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut"
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }
                }}
              >
                {/* Main Button - Glass Effect */}
                <div className="relative px-10 py-6 rounded-full bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 overflow-hidden">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute top-2 right-4 text-yellow-300"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    <Sparkles size={16} />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-2 left-4 text-yellow-300"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                  >
                    <Sparkles size={12} />
                  </motion.div>
                  
                  {/* Button Content */}
                  <span className="relative flex items-center gap-3 text-white font-bold text-xl drop-shadow-lg">
                    <Rocket size={28} />
                    Explore Live Projects
                  </span>
                </div>
                
                {/* Glow effect behind button */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl -z-10" />
                
                {/* Ripple rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/20"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/15"
                  style={{ transform: 'translate(-50%, -50%)' }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                />
              </motion.div>
            </motion.div>

            <div className="relative z-10">
              <Hero />
              <About />
              <Projects />
              <Experience />
              <TechStack />
              <Contact />
            </div>
          </>
        } />
        <Route path="/live-projects" element={<LiveProjectsPage />} />
      </Routes>
    </div>
  );
}