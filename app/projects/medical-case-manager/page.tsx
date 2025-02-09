// app/projects/[slug]/page.tsx
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectPage() {
  // Example project data - you would have this for each project
  const project = {
    title: "Medical Case Manager Large Language Model",
    unit: "Academia Sinica Research Assistant",
    period: "July 2024 - Jan. 2025",
    introduction: `Leverages TAIDE’s multi-turn question-answering capabilities, providing 7-11, 24-hour services.
Use Cases:
Patients can ask questions to the Case Manager Twin at any time and engage in multi-turn conversations.
Conversation logs will be processed by TAIDE to generate summary reports for the corresponding case manager.
After confirmation by the case manager, a caring response will be sent back to the patient, providing reassurance and peace of mind.
`,
    technologies: ["LLM", "RAG", "Medical AI", "Python", "TAIDE", "Medical Terminology", "Medical Dataset"],
    thumbnail: "/ntu-logo.png",
    challenges: [
        "Acquiring and processing large medical data",
        "Ensuring the model's accuracy and reliability",
        "Letting the model admit its limitations when related information is not available"
    ],
    keyFeatures: [
      "Multi-specialty diagnosis support",
      "Real-time medical reference integration",
      "Adaptive learning capabilities"
    ],
    results: "Utilize Retrieval-Augmented Generation (RAG) to obtain the most up-to-date and accurate information. This requires medical institutions to provide the latest and most reliable patient education materials, ensuring the model delivers essential information to patients."
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >
      {/* Hero Section */}
      <div className="mb-12">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          {project.title} <br />
          <p className='text-2xl mt-4'>{project.unit}</p>
        </motion.h1>
        <p className="text-gray-600 text-lg mb-4">{project.period}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <div className="prose dark:prose-invert">
          <p>
            
    <p className='indent-8'>
    <a href="https://taide.tw/index" 
     className="text-blue-600 hover:underline"
     target="_blank"
     rel="noopener noreferrer">TAIDE</a> is a project led by Academia Sinica, aimed at developing a large language model (LLM) tailored to Taiwanese culture with expertise across various domains. Our team specifically focuses on the medical field.
     </p>
     <p className='indent-8'>Figure 1 illustrates the system software module design architecture of our team. Starting from the top left, the user inputs a query through an interface such as Streamlit (represented as "text" in the figure). This input undergoes an embedding process (labeled as "embedding" in the figure). </p>

<p className='indent-8'>Before this, the patient education data obtained from Taichung Veterans General Hospital is segmented into chunks (shown as "chunks" in the figure) and also processed into embeddings. These embeddings are stored in a database and later matched with the embedded user query through a retrieval process (labeled as "retrieval" in the figure) to extract relevant information from the patient education data.</p>

<p className='indent-8'>Finally, both the retrieved text and the original user query are fed into the TAIDE language model. At this stage, the model has access to both the user's initial question and the relevant external patient education materials. It integrates and synthesizes this information to generate the final response, ensuring that the user receives the most accurate and up-to-date information.</p>

<p className='indent-8'>Additionally, we implemented a method called Reinforcement Learning from Human Feedback (RLHF), where medical professionals provide ratings on different responses. This feedback enables the model to undergo reinforcement learning, allowing it to better align with real-world medical applications. Through iterative optimization, the model continuously improves, evolving into a more effective and reliable case manager language model.</p></p>
        </div>
      </section>

    {/* Project Picture */}
    <div className="mb-12 ">
        <Image
        src={"/projects-pic/RAG-flowchart.png"}
        alt="Project Picture"
        width={800}
        height={400}
        />
        <p className="text-center text-gray-500 mt-2">Figure 1: The flowchart to the design</p>
    </div>

    {/* Project Picture */}
        <div className="mb-12 ">
        <Image
        src={"/projects-pic/RAG-technical.png"}
        alt="Project Picture"
        width={900}
        height={450}
        />
        <p className="text-center mt-2">We use the base mode “Llama3-TAIDE-LX-8B-Chat-Alpha1” to fine-tune our medical LLM, and then  we combine with the technique of RAG, and thus provide precise medical response to the end users (patients/ medical practitioners).</p>
    </div>

    {/* Project Picture */}
    <div className="mb-12 ">
        <Image
        src={"/projects-pic/RAG-result.png"}
        alt="Project Picture"
        width={500}
        height={250}
        />
        <p className="text-center text-gray-500 mt-2">Figure 2: The RAG answer generated by the case manager LLM</p>
    </div>

      {/* Key Features */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.keyFeatures.map((feature, index) => (
            <div 
              key={index}
              className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              {feature}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Challenges and Solutions */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <div className="space-y-4">
          {project.challenges.map((challenge, index) => (
            <div 
              key={index}
              className="flex items-start gap-3"
            >
              <span className="text-blue-500">•</span>
              <p>{challenge}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Results */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
        <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-lg">{project.results}</p>
        </div>
      </motion.section>

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