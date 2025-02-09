// app/projects/[slug]/page.tsx
"use client"
import { motion } from 'framer-motion';

interface PageProps {
    params: {
      slug: string;
    };
  }

export default function ProjectPage({ params }: Awaited<PageProps>) {
  // Example project data - you would have this for each project
  const project = {
    title: "Medical Diagnosis LLM",
    unit: "Web Mining and Information Retrieval Lab",
    period: "Jun. 2024 - Present",
    summary: `Enhancing multidisciplinary medical diagnosis via LLM with RAG. Fine-tuning models to let LLMs assist doctors in diagnosing across various medical specialties.
Making LLMs be accurate, adaptive to new information, and could branch out a wide range of insightful possibilities
when diagnosing patients.`,
    technologies: ["LLM", "RAG", "Medical AI", "Python"],
    thumbnail: "/ntu-logo.png",
    challenges: [
      "Handling complex medical terminology",
      "Ensuring high accuracy across specialties",
      "Processing large medical datasets"
    ],
    keyFeatures: [
      "Multi-specialty diagnosis support",
      "Real-time medical reference integration",
      "Adaptive learning capabilities"
    ],
    results: "Improved diagnosis accuracy by 35% across multiple medical specialties"
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Hero Section */}
      <h1> Please directly go the the following webpage: </h1>
      <h1><a href='https://drive.google.com/file/d/1zB6CFNv4Bi_FpBc5mIVUM4I0Uo42GFYU/view?usp=sharing'className="hover:underline"
  target="_blank"
  rel="noopener noreferrer">Link to the page 🔗</a></h1>

   {/* Back Button */}
   <div className="mt-12">
        <button 
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          ← Back to Projects
        </button>
      </div>


    </motion.div>
    );
}