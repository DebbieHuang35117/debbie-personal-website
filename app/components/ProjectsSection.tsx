// app/components/ProjectsSection.tsx
'use client'
import Link from 'next/link';

export default function ProjectsSection() {
  const projects = [
      { // move to work experience section
      title: "AI Quantitative Intern @ UC Capital",
      period: "Jul. 2025 - Present",
      description: "Developing AI-driven trading strategies and tools to enhance investment decision-making processes. Collaborating with cross-functional teams to integrate machine learning models into trading systems.",
      slug: "ai-quantitative-intern",
      tags: ["AI", "Quantitative Finance", "Machine Learning"]
    },
    { // move to work experience section
      title: "Research Assistant @ NTU FinDA Lab",
      period: "Mar. 2025 - Aug. 2025",
      description: "Conducting research on the application of AI and machine learning in financial data analysis. Assisting in the development of algorithms for market prediction and risk assessment.",
      slug: "research-assistant-ntu-finda-lab",
      tags: ["Text Mining", "Financial Data Analysis", "Regression Analysis"]
    },
    {
      title: "Medical Diagnosis LLM",
      period: "Jun. 2024 - Present",
      description: "Enhancing multidisciplinary medical diagnosis via LLM with RAG. Fine-tuning models to assist doctors in diagnosing across various medical specialties.",
      slug: "medical-diagnosis-llm",
      tags: ["LLM", "RAG", "Medical AI"]
    },
    {
      title: "Medical Case Manager LLM",
      period: "Jun. 2024 - Present",
      description: "Implementing Retrieval-Augmented Generation technique to fine-tune LLM to the medical field. Optimizing TAIDE for Taiwan's cultural characteristics.",
      slug: "medical-case-manager",
      link: "https://taide.tw/index",
      has_slug_page: true,
      //github: "https://github.com/2024-sinica-medLLM",
      tags: ["LLM", "RAG", "TAIDE"]
    },
    {
      title: "Scenic AI Window Manufacturing",
      period: "Feb. 2024 - Present",
      description: "Modeling and implementing optimization algorithms for production planning in aluminum doors and windows manufacturing.",
      slug: "scenic-ai-manufacturing",
      //github: "https://github.com/DebbieHuang35117/aluminum-manufacturing-production-scheduling",
      tags: ["Optimization", "Manufacturing", "AI"]
    },
    {
      title: "Camera Connect", 
      period: "Apr. 2024 - Jun. 2024",
      description: "A mobile application designed to streamline the photo and video sharing process, enabling users to share life's moments instantly with closed ones.",
      slug: "camera-connect",
      //slug_not_done: true,
      //github: "https://github.com/YouMingYeh/camera-connect",
      tags: ["Mobile App", "React Native", "Next.js", "Supabase", "Expo"]
    },
    {
      title: "Shopping Basket Recommendation Analysis", 
      period: "Apr. 2024 - Jun. 2024",
      description: "Analyzing shopping basket data to provide recommendations for customers. The project involves data analysis, visualization, and machine learning techniques.",
      slug: "shopping-basket-recommendation-analysis",
      //slug_not_done: true,
      tags: ["Data Analysis", "Python", "Pandas", "Matplotlib"]
    },
    {
      title: "GSAT Test Taker", 
      period: "Mar. 2024 - Jun. 2024",
      description: "Using deep learning approach to answer GSAT questions with dataset from previous years. The model is trained to predict the correct answer with high accuracy.",
      slug: "gsat-test-taker",
      //slug_not_done: true,
      //github: "https://github.com/DebbieHuang35117/GSAT-test-taker.git",
      tags: ["Deep Learning", "NLP", "Python", "TensorFlow"]
    },
    {
      title: "Study Connect", 
      period: "Sept. 2023 - Jan. 2024",
      description: "Developing a platform for students to acquaint with one another and forming study groups. Involving front-end and back-end techniques to construct a web system with over 10,000 students' data. ",
      slug: "study-connect",
      //slug_not_done: true,
      //github: "https://github.com/namwoam/study-connect",
      tags: ["Database", "MongoDB", "SQL", "Web Development", "React", "Node.js"]
    },
    {
      title: "Election Result Prediction",
      period: "Sept. 2023 - Jan. 2024",
      description: "Predicting election results using GPT-3.5 for data labeling and analyzing public sentiment through social media.",
      slug: "election-prediction",
      //slug_not_done: true,
      //website: "https://www.dropbox.com/scl/fi/wgk1vkm7c2dnhyrju7rec/.pdf?rlkey=h4x0sl2n7uljtlqzll731acub&st=cg9emwrl&dl=0",
      tags: ["GPT-3.5", "Sentiment Analysis", "NLP"]
    }
  ];
  const handleGithubClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();  // Prevent the default link behavior
    e.stopPropagation(); // Stop the event from bubbling up
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-3xl font-sans">
      <h2 className="text-2xl font-bold mb-6">Projects (CS-Related)</h2>
      <div className="h-px bg-gray-200 mb-6" />
      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          // <Link 
          //   /*href={{/*project.slug_not_done && project.github ? (project.github) : (project.website ? project.website : `/projects/${project.slug}`)}}*/
          //   /*href={project.has_slug_page ? (`/projects/${project.slug}`) : ("#")}*/ 
          //   href={`/projects/${project.slug}`}
          //   key={project.slug}
          //   className="block group"
          // >
            <div key={project.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-semibold ${project.has_slug_page ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : ''}`}>
                {/*</h3><h3 className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400">*/}
                  {project.title}
                </h3>

                  {project.link ? (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                          Project Link
                      </a>
                  ) : null}
                  {project.has_slug_page ? (
                      <Link href={`/projects/${project.slug}`} style={linkStyle}>
                          Detailed Description
                      </Link>
                  ) : null}
                  {/*
                  </div>{project.github && (
                    <div 
                    onClick={(e) => handleGithubClick(e, project.github)}
                    className="relative z-10 bg-white p-2 rounded-md shadow-md -ml-1 cursor-pointer"
                  >
                    <Image 
                      src="/icons/github_logo.png"
                      alt="GitHub"
                      width={24}
                      height={24}
                      className="object-contain transition-transform transform hover:scale-110 hover:opacity-80"
                    />
                  </div>
                      )
                  }
                  */}
              <span className="text-sm text-gray-500">{project.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}


const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    textDecoration: "none",
    color: "#0b6cff",
    whiteSpace: "nowrap",
};