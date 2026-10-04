"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import * as React from 'react'
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

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
  { name: "C/C++", icon: "/icons/cpp.svg", color: "bg-blue-600", textColor: "text-white", category: "Languages" },
  { name: "Python", icon: "/icons/python.svg", color: "bg-blue-500", textColor: "text-white", category: "Languages" },
  { name: "MATLAB", icon: "/icons/matlab.svg", color: "bg-orange-600", textColor: "text-white", category: "Languages" },
  { name: "SQL", icon: "/icons/mysql.svg", color: "bg-blue-700", textColor: "text-white", category: "Languages" },
  { name: "Bash", icon: "#", color: "bg-gray-800", textColor: "text-white", category: "Languages" },

  // Core CS
  { name: "Data Structures & Algorithms", icon: "#", color: "bg-purple-700", textColor: "text-white", category: "Core CS" },
  { name: "Operating Systems", icon: "#", color: "bg-blue-800", textColor: "text-white", category: "Core CS" },
  { name: "DBMS", icon: "#", color: "bg-green-600", textColor: "text-white", category: "Core CS" },
  { name: "Computer Networks", icon: "#", color: "bg-orange-500", textColor: "text-white", category: "Core CS" },
  { name: "OOP", icon: "#", color: "bg-pink-600", textColor: "text-white", category: "Core CS" },

  // ML & AI
  { name: "PyTorch", icon: "#", color: "bg-orange-600", textColor: "text-white", category: "ML & AI" },
  { name: "TensorFlow", icon: "#", color: "bg-orange-400", textColor: "text-white", category: "ML & AI" },
  { name: "CUDA", icon: "#", color: "bg-green-500", textColor: "text-white", category: "ML & AI" },
  { name: "Computer Vision", icon: "#", color: "bg-purple-500", textColor: "text-white", category: "ML & AI" },
  { name: "Image Processing", icon: "#", color: "bg-blue-400", textColor: "text-white", category: "ML & AI" },
  { name: "Federated Learning", icon: "#", color: "bg-cyan-500", textColor: "text-white", category: "ML & AI" },
  { name: "Deep Learning", icon: "#", color: "bg-pink-500", textColor: "text-white", category: "ML & AI" },

  // Frameworks & Tech
  { name: "FastAPI", icon: "#", color: "bg-teal-500", textColor: "text-white", category: "Frameworks & Tech" },
  { name: "Streamlit", icon: "#", color: "bg-red-500", textColor: "text-white", category: "Frameworks & Tech" },
  { name: "REST APIs", icon: "#", color: "bg-gray-600", textColor: "text-white", category: "Frameworks & Tech" },
  { name: "OpenSSL", icon: "#", color: "bg-yellow-600", textColor: "text-white", category: "Frameworks & Tech" },
  { name: "UERANSIM", icon: "#", color: "bg-indigo-600", textColor: "text-white", category: "Frameworks & Tech" },
  { name: "Ella Core", icon: "#", color: "bg-fuchsia-600", textColor: "text-white", category: "Frameworks & Tech" },

  // Tools
  { name: "Git", icon: "/icons/github.svg", color: "bg-gray-900", textColor: "text-white", category: "Tools" },
  { name: "GitHub", icon: "/icons/github.svg", color: "bg-gray-900", textColor: "text-white", category: "Tools" },
  { name: "Linux", icon: "#", color: "bg-yellow-500", textColor: "text-white", category: "Tools" },
  { name: "Docker", icon: "/icons/docker.svg", color: "bg-blue-600", textColor: "text-white", category: "Tools" }
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
                  >
                    <HoverBorderGradient 
                      className="flex items-center gap-4 bg-gray-900 py-3 px-4"
                      containerClassName="hover:scale-105 rounded-2xl"
                      duration={1.5}
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
                    </HoverBorderGradient>
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
