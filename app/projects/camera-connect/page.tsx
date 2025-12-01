// app/projects/[slug]/page.tsx
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectPage() {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Hero Section */}
      <h1> Please directly go the the following webpage: </h1>
      <h1><a href='https://www.dropbox.com/scl/fi/gsmfbk631pzs454fsx6fv/DB-Final-Report.pdf?rlkey=4iojuw0gn0qut0cs5ts90edh0&st=zk502ezt&dl=0'className="hover:underline"
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