"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import * as React from 'react'

interface Skill {
  name: string;
  icon: string;
  color: string;
  textColor: string;
  category: string;
}

// Define the skill items with their logos and categories
const skillItems: Skill[] = [
  // Languages
  { 
    name: "C/C++", 
    icon: "/icons/cpp.svg", 
    color: "bg-blue-600",
    textColor: "text-white",
    category: "Languages"
  },
  { 
    name: "Python", 
    icon: "/icons/python.svg", 
    color: "bg-blue-500",
    textColor: "text-white",
    category: "Languages"
  },
  { 
    name: "JavaScript/TypeScript", 
    icon: "/icons/javascript.svg", 
    color: "bg-yellow-400",
    textColor: "text-black",
    category: "Languages"
  },
  { 
    name: "C#", 
    icon: "/icons/csharp.svg", 
    color: "bg-purple-600",
    textColor: "text-white",
    category: "Languages"
  },
  
  // Databases
  { 
    name: "MongoDB", 
    icon: "/icons/mongodb.svg", 
    color: "bg-green-600",
    textColor: "text-white",
    category: "Databases"
  },
  { 
    name: "MySQL", 
    icon: "/icons/mysql.svg", 
    color: "bg-blue-700",
    textColor: "text-white",
    category: "Databases"
  },
  
  // Frameworks
  { 
    name: "Next.js", 
    icon: "/icons/next.svg", 
    color: "bg-black",
    textColor: "text-white",
    category: "Frameworks"
  },
  { 
    name: "Express", 
    icon: "/icons/express.svg", 
    color: "bg-gray-700",
    textColor: "text-white",
    category: "Frameworks"
  },
  { 
    name: "Node.js", 
    icon: "/icons/node.svg", 
    color: "bg-green-700",
    textColor: "text-white",
    category: "Frameworks"
  },
  
  // Libraries
  { 
    name: "React", 
    icon: "/icons/react.svg", 
    color: "bg-blue-400",
    textColor: "text-white",
    category: "Libraries"
  },
  { 
    name: "Auth.js", 
    icon: "/icons/auth.svg", 
    color: "bg-gray-800",
    textColor: "text-white",
    category: "Libraries"
  },
  { 
    name: "Shadcn", 
    icon: "/icons/shadecn.svg", 
    color: "bg-gray-900",
    textColor: "text-white",
    category: "Libraries"
  },
  { 
    name: "Tailwind CSS", 
    icon: "/icons/tailwindcss.svg", 
    color: "bg-cyan-500",
    textColor: "text-white",
    category: "Libraries"
  },
  { 
    name: "CORS", 
    icon: "#", 
    color: "bg-indigo-600",
    textColor: "text-white",
    category: "Libraries"
  },
  { 
    name: "Axios", 
    icon: "#", 
    color: "bg-purple-500",
    textColor: "text-white",
    category: "Libraries"
  },
  
  // Tools/Environments
  { 
    name: "Git/GitHub", 
    icon: "/icons/github.svg", 
    color: "bg-gray-900",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "Docker", 
    icon: "/icons/docker.svg", 
    color: "bg-blue-600",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "MATLAB", 
    icon: "/icons/matlab.svg", 
    color: "bg-orange-600",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "Arduino", 
    icon: "/icons/arduino.svg", 
    color: "bg-teal-600",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "Unity", 
    icon: "/icons/unity.svg", 
    color: "bg-gray-800",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "CI/CD", 
    icon: "/icons/ci-cd.svg", 
    color: "bg-green-700",
    textColor: "text-white",
    category: "Tools"
  },
  { 
    name: "AWS", 
    icon: "/icons/aws.svg", 
    color: "bg-orange-500",
    textColor: "text-white",
    category: "Tools" 
  },
  
  // Concepts
  { 
    name: "Data Structures & Algorithms", 
    icon: "#", 
    color: "bg-purple-700",
    textColor: "text-white",
    category: "Concepts"
  },
  { 
    name: "Full Stack Web Development", 
    icon: "#", 
    color: "bg-pink-600",
    textColor: "text-white",
    category: "Concepts"
  },
  { 
    name: "System Design", 
    icon: "#", 
    color: "bg-blue-800",
    textColor: "text-white",
    category: "Concepts"
  }
]

export default function SkillsSection() {
  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = skillItems.reduce((acc: Record<string, Skill[]>, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Background text effect */}
          <div className="relative">
            <h2 className="text-[150px] md:text-[200px] font-bold text-gray-800/10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
              SKILLS
            </h2>

            {/* Foreground title */}
            <h2 className="text-5xl md:text-6xl font-bold mb-16 relative z-10">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Skills</span>
            </h2>
          </div>

          <p className="text-xl text-gray-400 mb-16 uppercase tracking-widest">Technical Proficiencies</p>

          {/* Skills sections by category */}
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">{category}</span>
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill: Skill, index: number) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-5 py-4 rounded-2xl flex items-center gap-4 bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                  >
                    {skill.icon !== "#" && (
                      <Image 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        width={28} 
                        height={28}
                        className="w-7 h-7"
                      />
                    )}
                    <span className="font-semibold text-white tracking-wide">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
