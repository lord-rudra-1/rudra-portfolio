"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          {title}
        </a>
      </h3>
      <p className="text-gray-400 mb-4 text-center md:text-left">
        {description}
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub button that appears on hover */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 flex items-center justify-center gap-2"
        initial={{ y: 100 }}
        animate={{ y: isHovered ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <Github size={18} />
        <span>GitHub</span>
      </motion.a>
    </motion.div>
  )
}
