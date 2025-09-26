// app/components/ProfileSection.tsx
import Image from "next/image";

export default function ProfileSection() {

    const images = [
        { src: "/Debbie Huang.jpg", alt: "Professional photo" },
        { src: "/Debbie Huang.jpg", alt: "Casual photo" },
        { src: "/Debbie Huang.jpg", alt: "Activity photo" }
      ];
  return (
    <div className="font-sans flex flex-col gap-8 max-w-3xl">
      
      {/* Bio Section */}
      <div className="items-center gap-6 dark:bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-6 p-0.5 rounded-lg mb-3">
        <Image
            className="rounded-full object-cover"
            src="/Debbie Huang.jpg"
            alt="Debbie Huang's profile photo"
            width={180}
            height={180}
            priority
        />
        <div> {/* Change the size of space between each paragraph */}
        
        <br />
        <div className="font-sans text-base indent-8">
          I am an Information Management major with a Computer Science minor at National Taiwan University, 
          combining technical expertise with leadership experience. Currently involved in cutting-edge projects 
          in <span className="font-bold">medical AI</span> and <span className="font-bold">manufacturing optimization</span>.<br /> <br />

          <p className="indent-8">As a <span className="font-bold">Business Development Director</span> at Global Leadership Organization and former <span className="font-bold">Academic Director</span> at 
          Google Development Student Club, my self-position mission is that <span className="italic font-bold">I hope bridge the gap between technology and business solutions</span>. Trying to achieve service as a lifestyle everyday.</p>
        </div>
        </div>
        
      </div>
      </div>

      {/* Education */}
      <div className="w-full">
        <h3 className="font-semibold text-2xl mb-3">Education</h3>
        <div className="h-px bg-gray-200 mb-6" />
        <div className="flex items-center gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <Image
            src="/ntu-logo.png"  // Make sure to place your NTU logo in the public folder
            alt="National Taiwan University Logo"
            width={75}
            height={75}
            className="object-contain"
          />
          <div>
            <p className="font-medium">B.S. in National Taiwan University</p>
            <p className="text-gray-600">Information Management Major, Computer Science Minor<br /> Enrolled in Intelligence Medicine Program</p>
            <p className="text-sm text-gray-500">Academic Ranking 1st Place in 2022</p>
          </div>
        </div>
        {<div className="flex items-center gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
        <Image
            src="/hku-logo.png"  // Make sure to place your NTU logo in the public folder
            alt="The University of Hong Kong Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <div>
            <p className="font-medium">The University of Hong Kong</p>
            <p className="text-gray-600">Exchange Student Program</p>
            <p className="text-sm text-gray-500">Faculty of Business and Economics (HKU Business School)</p>
          </div>
        </div>}
        <div className="flex items-center gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
          <Image
            src="/hgsh-logo.png"  // Make sure to place your NTU logo in the public folder
            alt="Hsinchu Girls' Senior High School Logo"
            width={75}
            height={75}
            className="object-contain"
          />
          <div>
            <p className="font-medium">National Hsinchu Girls' Senior High School</p>
            <p className="text-gray-600">Language Talented Class</p>
            {<p className="text-sm text-gray-500"></p>}
          </div>
        </div>
        <div className="flex items-center gap-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mt-4">
          <Image
            src="/korrnell-logo.png"  // Make sure to place your NTU logo in the public folder
            alt="Korrnell Academy Logo"
            width={75}
            height={75}
            className="object-contain"
          />
          <div>
            <p className="font-medium">Korrnell Academy</p>
            <p className="text-gray-600">Bilingual School Education for 10 years</p>
            {<p className="text-sm text-gray-500">Graduated with Academic Ranking 1st Place</p>}
          </div>
        </div>
      
      </div>

      {/* Technical Skills */}
      <div className="w-full">
        <h3 className="font-semibold text-2xl mb-3">Technical Skills</h3>
        <div className="h-px bg-gray-200 mb-6" />
        <div className="space-y-3">
            <div>
                <h4 className="font-medium font-semibold mb-2">Languages</h4>

                <div>
                    <div className="flex flex-wrap gap-2">
                        <p className="font-medium">‣ Chinese: Fluent</p>
                    </div>
                    <div>
                        <p className="font-medium">‣ English: Proficient</p>
                        <p className="font-normal text-gray-600">📝 TOEFL 106, GEPT high-intermediate level</p>
                    </div></div>
            </div><br />
          <div>
            <h4 className="font-medium mb-2">Programming Languages & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {['C', 'C++', 'Python', 'JavaScript', 'SQL', 'R', 'PyTorch', 'TensorFlow','Gurobi'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <br />
            <div>
                    <div className="flex flex-wrap gap-2 pl-4">
                        <p className="font-medium text-gray-600">👩🏻‍💻  I am especially proficient in C++ and Python ⚙️</p>
                        -- due to my past experience of being course TA, high school course instructor, camp instructor, data analysis projects, and most of my projects that would involve using the two languages.
                    </div>
                   </div>
          </div>
          <br />
          <div>
            <h4 className="font-medium mb-2">Areas of Expertise{/*(click for relevant projects)*/}</h4>
            <div className="flex flex-wrap gap-2">
            {[
                { skill: 'Deep Learning', slug: 'deep-learning' },
                { skill: 'Information Retrieval', slug: 'information-retrieval' },
                { skill: 'Large Language Models', slug: 'large-language-models' },
                { skill: 'Data Analysis', slug: 'data-analysis' },
                { skill: 'Database', slug: 'database' },
                { skill: 'Backend', slug: 'backend' },
                {skill: 'Data Structure and Algorithm', slug: 'data-structure-and-algorithm' },
                {skill: 'Operations Research', slug: 'operations-research' },
                {skill: 'System Programming', slug: 'system-programming' },
            ].map(({ skill, slug }) => (
                <div 
                key={skill} 
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                {skill}
                </div>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills */}
      <div className="w-full">
        <h3 className="font-semibold text-2xl mb-3">Soft Skills</h3>
        <div className="h-px bg-gray-200 mb-6" />
        <div className="space-y-3">

        <div>
            <h4 className="font-medium mb-2">🪄 Soft Skills that I am Confident About{/*(click for relevant experiences)*/}</h4>
            <div className="flex flex-wrap gap-2">
  {[
    { skill: 'Communication', slug: 'communication-skills' },
    { skill: 'Public Speaking', slug: 'public-speaking' },
    { skill: 'Leadership', slug: 'leadership' },
    { skill: 'Team Management', slug: 'team-management' },
    { skill: 'Project Management', slug: 'project-management' },
    { skill: 'Marketing Strategy', slug: 'marketing-strategy' },
    { skill: 'Business Development', slug: 'business-development' },
    { skill: 'Meeting Facilitation', slug: 'meeting-facilitation' }
  ].map(({ skill, slug }) => (
    <div 
      key={skill} 
      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
    >
      {skill}
    </div>
/*
    <Link
    key={skill} 
    href={`/skills/${slug}`}
    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
    {skill}
    </Link>
*/
  ))}
</div>
          </div>
        </div>
      </div>

      {/* Contact Information
      <div className="w-full text-center sm:text-left">
        <h3 className="font-semibold text-xl mb-3">Contact</h3>
        <div className="space-y-2">
          <p>📧 debbiehuang35117@gmail.com</p>
          <p>📍 Taipei, Taiwan</p>
          <p>🌐 Fluent in Chinese and English</p>
        </div>
      </div>*/}
    </div>
  );
}