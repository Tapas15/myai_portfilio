import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { NeuralBackground } from '../components/NeuralBackground';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export function LiveProjectsPage() {
  const navigate = useNavigate();

  // Floating button follows mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div 
      className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <NeuralBackground />
      
      {/* Fixed Back Button - Top Left */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-[100] px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={20} />
        Back
      </motion.button>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 mt-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              🚀 Live Projects
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Explore all the production-ready AI systems I've engineered and deployed
            </p>
          </motion.div>

          {/* Empty State for Future Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-32"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mb-8 inline-block"
            >
              🚀
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Live Projects Coming Soon
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              This is where the latest live project deployments will be showcased. Stay tuned for updates!
            </p>
            <motion.button
              onClick={() => navigate('/')}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:shadow-2xl border border-blue-400/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Home
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Big Floating Home Button - Follows Mouse */}
      <motion.div
        className="fixed z-[100]"
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
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
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
              <Home size={28} />
              Back to Home
            </span>
          </div>
          
          {/* Glow effect behind button */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 blur-2xl -z-10" />
          
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
    </div>
  );
}
