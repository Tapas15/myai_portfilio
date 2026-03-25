import cvDetectionImage from '../assets/cv-detection-system.png';
import { FileText, Eye, Workflow, Database } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  tech: string[];
  gradient: string;
  image?: string;
  demo?: string;
  github?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "LLM-Powered Document Intelligence Platform",
    description: "Architected production-scale document parsing system using LLaMA with RAG and vector embeddings. Achieved 95%+ extraction accuracy processing 10K+ invoices daily with automated validation pipelines.",
    icon: FileText,
    tech: ["LLaMA", "RAG", "LangChain", "FastAPI", "MongoDB", "Vector DB"],
    gradient: "from-purple-400 to-blue-500",
    demo: "#",
    github: "#",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Real-Time Computer Vision Detection System",
    description: "Built scalable object detection pipeline using YOLOv4/v5 optimized for industrial environments. Deployed containerized inference service handling 30 FPS with <50ms latency for quality inspection automation.",
    icon: Eye,
    tech: ["YOLOv4/v5", "OpenCV", "PyTorch", "Docker", "FastAPI", "Redis"],
    gradient: "from-blue-400 to-cyan-500",
    image: cvDetectionImage,
    demo: "#",
    github: "#",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Multi-Stage NLP Intelligence Engine",
    description: "Designed end-to-end document processing architecture with OCR, entity extraction, and classification. Integrated transformer models and embeddings for semantic understanding at enterprise scale.",
    icon: Workflow,
    tech: ["Transformers", "Tesseract", "spaCy", "TensorFlow", "PostgreSQL", "Embeddings"],
    gradient: "from-green-400 to-teal-500",
    demo: "#",
    github: "#",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Production ML Pipeline Infrastructure",
    description: "Architected scalable ETL and ML training infrastructure with XGBoost models. Built automated feature engineering, model versioning, and deployment system reducing inference time by 40%.",
    icon: Database,
    tech: ["XGBoost", "Scikit-learn", "MLflow", "Airflow", "SQL Server", "Docker"],
    gradient: "from-orange-400 to-red-500",
    demo: "#",
    github: "#",
    liveUrl: "#",
    githubUrl: "#"
  }
];
