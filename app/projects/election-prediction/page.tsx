// app/projects/[slug]/page.tsx
"use client"
import { motion } from 'framer-motion';



export default function ProjectPage() {
  // Example project data - you would have this for each project

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Hero Section */}
      <h1> Please directly go the the following webpage: </h1>
      <h1><a href='https://www.dropbox.com/scl/fi/wgk1vkm7c2dnhyrju7rec/.pdf?rlkey=h4x0sl2n7uljtlqzll731acub&st=n6bfr9h6&dl=0'className="hover:underline"
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