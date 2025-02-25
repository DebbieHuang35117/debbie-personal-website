import React from 'react';

const FunFacts = () => {
  const facts = [
    {
      icon: "🏸",
      title: "Badminton Enthusiast",
      description: "played badminton for 7 years and counting"
    },
    {
      icon: "🗺️",
      title: "World Map Collector",
      description: "I like to travel plus trying out new cuisine (I am a big foodie!)"
    },
    {
      icon: "💪",
      title: "Athletic Lover",
      description: "I like working out and staying active"
    },
    {
      icon: "🌏",
      title: "Bilingual Growth Background",
      description: "10 years of bilingual education from elementary to high school"
    }
  ];

  return (
    <div className="right-12 top-40 max-w-xs font-sans">
      <div className="bg-teal-50 dark:bg-gray-800 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
      <h2 className="text-mono text-l font-bold">Fun facts about me</h2>
        {facts.map((fact, index) => (
          <div key={index} className="flex gap-3 items-start group hover:bg-gray-50 p-1 rounded-lg transition-colors">
            <span className="text-2xl">{fact.icon}</span>
            <div>
              <h3 className="font-medium text-sm text-gray-900">
                {fact.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {fact.description}
              </p>
            </div>
          </div>
        ))}
      
        </div>

    </div>
  );
};

export default FunFacts;