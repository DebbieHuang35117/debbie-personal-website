import React from 'react';

const ActivitiesSection = () => {
  const GLOactivities = [
    {
      organization: "Global Leadership Organization",
      positions: [
        {
          title: "Marketing Strategy Director",
          duration: "Jun. 2023 - Present",
          description: "Led strategic initiatives resulting in 40% membership growth. Developed and executed comprehensive marketing campaigns across digital platforms.",
          tags: ["Strategic Planning", "Team Leadership", "Marketing"]
        },
        {
          title: "Business Development Director",
          duration: "Jan. 2023 - Jun. 2023",
          description: "Established partnerships with 5 corporate sponsors. Developed new revenue streams through innovative program offerings.",
          tags: ["Partnership Development", "Business Strategy", "Negotiation"]
        }
      ]
    }
  ];
  const activities = [
    {
      title: "Business Development Director, GLO",
      duration: "Feb. 2025 - Present",
      description: "Leading digital transformation initiatives across student organizations. Implemented new event management system that increased student participation by 40%.",
      tags: ["Leadership", "Project Management", "Partnership Development"]
    }, 
    {
      title: "Marketing Strategy Director, GLO",
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "Academica Director, Google Student Development Club", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "Lead Instructor, NTUIM Programming Bootcamp", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "Lead Instructor, Rural Python Education Program", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "Teaching Assistant, NTUIM Programming Design (Obligatory Course)", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    }, 
    {
      title: "Teaching Assistant, Coding and Co-working Club (Python)", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    }
  ];

  return (


  <div className="max-w-3xl mx-auto p-6 font-sans">
  <h2 className="text-2xl font-bold mb-4">Extracurricular  Activities</h2>
  <div className="h-px bg-gray-200 mb-6" />
  <p>I am passionate about creating a meaningful impact in my community, particularly in the areas of leadership and programming education for Taiwanese students. <br />
My involvement in two organizations highlights my leadership and contributions for the passion: Global Leadership Organization and NTUIM Service Activities.
  </p><br />
  <h3 className="text-xl font-bold mb-4">Global Leadership Organization</h3>
  <p><a href="https://www.gloleadership.org/"
  className="text-blue-600 hover:underline"
  target="_blank"
  rel="noopener noreferrer">Link</a></p>
  <h3 className="text-xl font-bold mb-4">NTUIM Service Activities</h3>
  
  <div className="space-y-6">
    {activities.map((activity, index) => (
      <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{activity.title}</h3>
          <span className="text-gray-600">{activity.duration}</span>
        </div>
        
        <p className="text-gray-700 mb-3">
          {activity.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {activity.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ActivitiesSection;