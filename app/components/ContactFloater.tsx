// app/components/FunFacts.tsx
'use client'
import Image from 'next/image';
import { useState } from "react";
import { Copy } from "lucide-react";


export default function ContactFloater() {
    const facts = [
        {
            emoji: "📍",
            icon:"",
            fact: "Taipei, Taiwan"
          },
      {
        emoji: "📧",
        icon:"",
        fact: "debbiehuang35117@gmail.com",
        copyable: true, // New property to check if it's copyable
      },
      {
        emoji: "",
        icon: '/icons/LinkedIn-icon.png',
        fact: "Debbie Huang 🔗",
        hyperlink: "https://www.linkedin.com/in/debbie-huang-b813b7271/"
      },
      {
        emoji: "",
        icon: "/icons/GitHub-icon.png",
        fact: "DebbieHuang35117 🔗",
        hyperlink: "https://github.com/DebbieHuang35117"
      },
      {
        emoji: "📞",
        icon:"",
        fact: "(+886) 900751036", 
        copyable: true, 
        copyItem: "0900751036"
      }
      // Add more personal facts
    ];

    const [copiedFacts, setCopiedFact] = useState<{[key: string]: boolean}>({});

    const handleCopy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedFact((prev) => ({ ...prev, [text]: true }));
        setTimeout(() => setCopiedFact((prev) => ({ ...prev, [text]: false })), 800); // Reset after 2s
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };
  
    return (
      <div className="fixed right-16 bottom-[240px] max-w-xs z-50">
        <div className="font-sans text-sm border border-gray-200 dark:border-gray-700 bg-gray-25 dark:bg-gray-800 rounded-lg p-6 w-[320px] transition-all duration-300 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600">
        <h2 className='text-lg font-bold'>Let's connect!</h2>
        {facts.map((item, index) => (
          <div key={index} className="flex items-center gap-3 space-y-2">
            {item.emoji ? (
              <span className="text-xl">{item.emoji}</span>
            ) : (
              <Image 
                src={item.icon}
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            )}
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
              <p>{item.fact}</p>
            )}
            {item.copyable && (
              <button 
                onClick={() => handleCopy(item.copyItem ? item.copyItem : item.fact)}
                className="ml-0.5 p-1 hover:text-gray-500 relative"
              >
                <Copy size={18} />
                { copiedFacts[item.copyItem ? item.copyItem : item.fact] && (
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-opacity duration-300">
                        Copied!
                    </span>
                )}
              </button>
            )}
          </div>
        ))}
        </div>
      </div>
    );
  }