import React from 'react';
import { motion, useMotionValue } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { NeuralBackground } from '../components/NeuralBackground';
import { ArrowLeft, Home, Sparkles, ExternalLink, Github, Zap, Brain, Eye, Database, Layers } from 'lucide-react';

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

  const projects = [
    {
      title: "LLM-Powered Document Intelligence Platform",
      description: "Production-scale document parsing system using LLaMA with RAG and vector embeddings. Achieved 95%+ extraction accuracy processing 10K+ invoices daily.",
      icon: Brain,
      gradient: "from-purple-500 via-violet-500 to-blue-500",
      tech: ["LLaMA", "RAG", "LangChain", "FastAPI", "MongoDB", "Vector DB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-Time Computer Vision Detection System",
      description: "Scalable object detection pipeline using YOLOv4/v5 optimized for industrial environments. Deployed containerized inference service handling 30 FPS with <50ms latency.",
      icon: Eye,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      tech: ["YOLOv4/v5", "OpenCV", "PyTorch", "Docker", "FastAPI", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Multi-Stage NLP Intelligence Engine",
      description: "End-to-end document processing architecture with OCR, entity extraction, and classification. Integrated transformer models for semantic understanding.",
      icon: Layers,
      gradient: "from-green-500 via-emerald-500 to-cyan-500",
      tech: ["Transformers", "Tesseract", "spaCy", "TensorFlow", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Production ML Pipeline Infrastructure",
      description: "Scalable ETL and ML training infrastructure with XGBoost models. Built automated feature engineering, model versioning, and deployment system.",
      icon: Database,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      tech: ["XGBoost", "Scikit-learn", "MLflow", "Airflow", "SQL Server", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div 
      className="dark min-h-screen bg-background text-foreground relative overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <NeuralBackground />
      
      {/* Fixed Back Button - Top Left */}
      <motion.button
        onClick={() => navigate('/')}
        className="fixed top-8 left-8 z-[100] px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white font-bold text-xl shadow-2xl flex items-center gap-3 cursor-pointer"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={24} />
        Back
      </motion.button>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20 mt-20"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 mb-8"
            >
              <Zap size={20} className="text-yellow-400" />
              <span className="text-white font-medium">Production-Ready AI Systems</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              🚀 Live Projects
            </h1>
            <p className="text-gray-400 text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
              Explore all the <span className="text-white font-semibold">production-ready AI systems</span> I've engineered and deployed at scale
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group relative"
              >
                {/* Card Background with Gradient Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left Side - Icon & Info */}
                    <div className="p-10 lg:p-12 flex flex-col justify-center">
                      <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${project.gradient} mb-8 shadow-2xl`}>
                        <project.icon size={48} className="text-white" />
                      </div>
                      
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-400 text-xl leading-relaxed mb-8">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                            className="px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm border border-white/10"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-xl transition-shadow"
                          onClick={() => window.open(project.liveUrl, '_blank')}
                        >
                          <ExternalLink size={22} />
                          Live Demo
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-lg border border-white/20 hover:bg-white/20 transition-colors"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github size={22} />
                          GitHub
                        </motion.button>
                      </div>
                    </div>
                    
                    {/* Right Side - Visual/Preview */}
                    <div className={`relative h-96 lg:h-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                      {/* Animated Background Effects */}
                      <motion.div
                        className="absolute inset-0 opacity-30"
                        animate={{
                          background: [
                            `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                            `radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                            `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)`
                          ]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      
                      {/* Floating Icons */}
                      <motion.div
                        className="absolute top-10 right-10 w-20 h-20 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center"
                        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      >
                        <project.icon size={40} className="text-white/80" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-10 left-10 w-16 h-16 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center"
                        animate={{ y: [0, 15, 0], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                      >
                        <Zap size={32} className="text-yellow-300/80" />
                      </motion.div>
                      
                      {/* Center Visual Element */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                        className="text-center z-10"
                      >
                        <div className="w-40 h-40 mx-auto rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 shadow-2xl border border-white/20">
                          <project.icon size={72} className="text-white" />
                        </div>
                        <p className="text-white/80 text-xl font-medium">Production Deployed</p>
                      </motion.div>
                      
                      {/* Sparkle Effects */}
                      <motion.div
                        className="absolute top-1/4 left-1/4"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles size={24} className="text-white/60" />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-1/4 right-1/4"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        <Sparkles size={20} className="text-white/60" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <motion.button
                onClick={() => navigate('/')}
                className="px-12 py-6 rounded-[22px] bg-gray-900 text-white font-bold text-2xl shadow-2xl flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home size={32} />
                Explore More on Home
              </motion.button>
            </div>
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
        transition={{ delay: 0.5, duration: 0.5 }}
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
          <div className="relative px-12 py-8 rounded-full bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            
            {/* Sparkle effects */}
            <motion.div
              className="absolute top-3 right-6 text-yellow-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1 }}
            >
              <Sparkles size={20} />
            </motion.div>
            <motion.div
              className="absolute bottom-3 left-6 text-yellow-300"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
            >
              <Sparkles size={16} />
            </motion.div>
            
            {/* Button Content */}
            <span className="relative flex items-center gap-3 text-white font-bold text-xl drop-shadow-lg">
              <Home size={32} />
              Home
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
