import { url } from 'inspector';
import React from 'react';

const ActivitiesSection = () => {
  const GLOactivities = [
    {
      organization: "Global Leadership Organization",
      positions: [
        {
          title: "Business Development Director",
          duration: "Feb. 2025 - Present",
          description: "Established partnerships with over 20 sponsors. Developed new revenue streams through innovative program offerings. Also led the Student Ambassador team of 10 people.",
          tags: ["Partnership Development", "Team Leadership", "Business Strategy", "Negotiation"]
        }, 
        {
          title: "Marketing Strategy Director",
          duration: "Aug. 2024 - Jan. 2025",
          description: "Led strategic initiatives resulting in 40% membership growth. Developed and executed comprehensive marketing campaigns across digital platforms.",
          tags: ["Strategic Planning", "Team Leadership", "Marketing", "Targeted Advertising"]
        }
      ]
    }
  ];
  const ProgrammingServiceActivities = [
    {
      organization: "Programming Education Service",
      positions: [
        {
          title: "Teaching Assistant, NTU IM Programming Design",
          duration: "Sept. 2024 - Jan. 2025",
          description: "Help with grading, homework / projects grading, and design test cases preparation for NTU Information Management's Programming Design obligation course.",
          tags: ["Test Case Design", "Homework", "Project Grading", "C++", "Project Management"]
        }, 
        {
          title: "Python Leading Instructor, NTU IM Programming Camp", 
          duration: "Apr. 2023 - Jan. 2024",
          description: "Teach Python programming to 100+ students attedning NTU Information Management Programming Bootcamp, focusing on data analysis and visualization.",
          tags: ["Python", "Lecturing", "Teaching Material Preparation", "Data Analysis", "Data Visualization"]
        },
        {
          title: "Teaching Assistant, Rural Python Education Program",
          duration: "Sep. 2023 - Nov. 2023",
          description: "Developed curriculum and taught Python programming to 50+ students in Yilan Junior High School and Shunan Junior High School.",
          tags: ["Teaching", "Python", "Curriculum Development", "Design Thinking"]
        },
        {
          title: "Academic Director, Google Student Development Club",
          duration: "Sep. 2023 - Jun. 2024",
          description: "Led the club to organize various events and workshops to help students learn more about Google technologies and develop their projects.",
          tags: ["Event Organization", "Workshop Organization", "Project Management", "Google Technologies"],
          url: "https://gdg.community.dev/gdg-on-campus-national-taiwan-university-taipei-taiwan/"
  
        },
      {
        title: "Teaching Assistant, Coding and Co-working Club",
        duration: "Mar. 2023 - Aug. 2024",
        description: "We are a group of students who are passionate about making an impact on the innovation world via Python. We held weekly workshops and hackathons to help students learn Python and develop their projects.",
        tags: ["Python", "Project Management", "Teaching Material Preparation", "Web Crawling", "Data Analysis", "Chatbot Development"], 
        url: "https://www.ccclub.io/"
      }, 
      
      {
        title: "Teaching Assistant, Rural Python Education Program",
          duration: "Sep. 2022 - Nov. 2022",
          description: "Developed curriculum and taught Python programming to 50+ students in Yilan Junior High School and Shunan Junior High School.",
          tags: ["Teaching", "Python", "Curriculum Development", "Design Thinking"], 
          url: "https://management.ntu.edu.tw/IM/news/detail/sn/1665"
      }
      ]
    }
  ];
  const activities = [
    {
      title: "Research Assistant, FinDA Lab",
      duration: "Mar. 2025 - Present",
      description: "",
      tags: []
    },
    {
      title: "Taiwan Representative, Asia Elite Business Scholars (at National University of Singapore)",
      duration: "Jan. 2025",
      description: "Leading digital transformation initiatives across student organizations. Implemented new event management system that increased student participation by 40%.",
      tags: ["Leadership", "Project Management", "Partnership Development"]
    }, 
    {
      title: "Popularity Award Blockchain Reimagined, Global Initiatives Symposium in Taiwan (GIS 2022)",
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "1st Place, NTU English Debate Society Summer Trial", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"]
    },
    {
      title: "", 
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
      title: "", 
      duration: "Sept. 2024 - Jan. 2025",
      description: "Led social media strategy and content creation, increasing engagement by 40%.",
      tags: ["Marketing Strategy", "Content Creation", "Social Media", "Digital Strategy"], 
      url: "https://www.ccclub.io/"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">Extracurricular  Activities</h2>
    <div className="h-px bg-gray-200 mb-6" />
    <div className="space-y-8">
    <p>I am passionate about <span className='font-bold'>creating a meaningful impact</span> in my community, particularly in the areas of <span className='font-bold'>leadership</span> and <span className='font-bold'>programming education</span> for Taiwanese students.
My <span className='font-bold'>involvement in two kinds of activites</span> highlights my leadership and contributions for the passion: Global Leadership Organization and programming education services.

I deeply believe in <span className='font-bold'>service as a lifestyle</span>.
  </p>
      {GLOactivities.map((org, orgIndex) => (
        <div key={orgIndex} className="relative">
          {/* Organization Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
          <a href='https://www.gloleadership.org/'className="hover:underline"
  target="_blank"
  rel="noopener noreferrer">{org.organization} 🔗</a>
          </h3>
          
          {/* Timeline */}
          <div className="space-y-6 pl-6 border-l-2 border-gray-200">
            {org.positions.map((position, posIndex) => (
              <div key={posIndex} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[33px] mt-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full" />
                </div>
                
                {/* Position Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 ml-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {position.title}
                    </h4>
                    <span className="text-sm text-gray-600">
                      {position.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      {ProgrammingServiceActivities.map((org, orgIndex) => (
        <div key={orgIndex} className="relative">
          {/* Organization Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            {org.organization}
          </h3>
          
          {/* Timeline */}
          <div className="space-y-6 pl-6 border-l-2 border-gray-200">
            {org.positions.map((position, posIndex) => (
              <div key={posIndex} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[33px] mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full" />
                </div>
                
                {/* Position Card */}
                <div className="bg-white rounded-lg p-5 shadow-sm border border-gray-100 ml-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-900">
                      {position.url ? <a href={position.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{position.title} 🔗</a> : position.title}
                    </h4>
                    <span className="text-sm text-gray-600">
                      {position.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  );
};

export default ActivitiesSection;