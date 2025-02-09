// app/components/FunFacts.tsx
'use client'
import { useState } from "react";

{/*adding copy paste function*/}

export default function FunFacts() {

    const funFacts = [
      {
        emoji: "🏸",
        fact: "Badminton Enthusiast - played badminton for 7 years and counting"
      },
      {
        emoji: "🗺️",
        fact: "World Map Collector - I like to travel plus trying out new cuisine (I am a big foodie!)"
      },
      {
        emoji: "💪",
        fact: "Athletic Lover - I like working out and staying active"
      },
      {
        emoji: "🌏",
        fact: "Bilingual Growth Background - 10 years of bilingual education from elementary to high school", 
        hyperlink: ""
      }
      // Add more personal facts
    ];

    const [copiedFact, setCopiedFact] = useState(null);
  
    return (
      <div className="right-12 top-40 max-w-xs font-sans">
        <div className='text-mono text-xl font-bold'>Fun facts about me</div>
        {funFacts.map((item, index) => (
          <div key={index} className="flex items-center gap-3 space-y-2">
            <span className="text-2xl">{item.emoji}</span>
            {item.hyperlink ? (
              <a
                href={item.hyperlink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>{item.fact}</p>
              </a>
            ) : (
              <p className='text-mono text-normal'>{item.fact}</p>
            )}
          </div>
        ))}
      </div>
    );
  }