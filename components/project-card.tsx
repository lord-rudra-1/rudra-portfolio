"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  liveLink?: string
}

export default function ProjectCard({ title, description, tags, link, liveLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <h3 className="text-xl font-bold mb-3 text-white text-center md:text-left flex items-center justify-center md:justify-start gap-2">
        <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
          {title}
        </a>
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="View Live Demo">
            <ExternalLink size={18} />
          </a>
        )}
      </h3>
      <p className="text-gray-400 mb-4 text-center md:text-left flex-grow">
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

      {/* Action buttons that appear on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 flex"
        initial={{ y: 100 }}
        animate={{ y: isHovered ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 flex items-center justify-center gap-2"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 flex items-center justify-center gap-2 border-l border-gray-800"
          >
            <ExternalLink size={18} />
            <span>Live</span>
          </a>
        )}
      </motion.div>
    </motion.div>
  )
}
