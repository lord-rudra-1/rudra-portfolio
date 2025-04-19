"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Award, Users, Twitter } from "lucide-react"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SocialIcon from "@/components/social-icon"
import { Button } from "@/components/ui/button"
import AboutMe from "@/components/about-me"
import Loading from "@/components/loading"
import InteractiveShapes from "@/components/InteractiveShapes"
import AnimatedBoxes from "@/components/AnimatedBoxes"
import SkillsSection from "@/components/skills-section"
import ProjectCard from "@/components/project-card"
import { useToast } from "@/components/ui/use-toast"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [formSubmitting, setFormSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Show loading for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!mounted) return null
  if (loading) return <Loading />

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSubmitting(true)
    
    try {
      const formData = new FormData(e.currentTarget)
      const name = formData.get('name') as string
      const email = formData.get('email') as string
      const message = formData.get('message') as string
      
      // Basic validation
      if (!name || !email || !message) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive"
        })
        setFormSubmitting(false)
        return
      }
      
      // Create mailto URL with subject and body
      const subject = `Portfolio Contact: ${name}`
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      const mailtoUrl = `mailto:rudraraj12345672@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
      // Open the user's email client
      window.open(mailtoUrl, '_blank')
      
      // Reset the form
      e.currentTarget.reset()
      
      toast({
        title: "Message sent",
        description: "Thank you for your message! Your email client should open to send the email."
      })
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      })
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <Navbar />
      <InteractiveShapes />

      {/* Hero Section with Animated Boxes */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBoxes />
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Status indicator */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-gray-300 text-sm">Available For Work</span>
            </div>

            {/* New badge */}
            <div className="flex items-center justify-center mb-8">
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full mr-2">New</span>
              <span className="text-white">Code Playground is live!</span>
              <span className="ml-2 text-white">□</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
              Coder{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                X
              </span>{" "}
              Developer
            </h1>

            {/* Introduction */}
            <h2 className="text-xl md:text-2xl mb-2 text-gray-300">
              Hello, I'm Rudra Raj Narayan Monas, A Computer Science Student at IIIT Vadodara
            </h2>

            {/* Subtitle */}
            <h3 className="text-xl md:text-2xl mb-8 text-gray-400">
              Full-Stack Engineer
            </h3>

            {/* Contact section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full border border-gray-600 text-white flex items-center gap-2 cursor-pointer"
              >
                Resume <span className="ml-2">□</span>
              </motion.a>

              <div className="flex items-center gap-2 text-gray-300">
                <span className="text-sm">□</span>
                <span>rudraraj12345672@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container px-4 mx-auto">
          <AboutMe />
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section
        id="work"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Featured Projects
              </span>
              <span className="ml-2 text-white">🏗️</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Code Playground"
                description="Full-stack competitive coding platform with features for algorithm practice, contests, and code execution in multiple languages."
                tags={["MERN Stack", "React", "Node.js", "MongoDB"]}
                link="https://github.com/lord-rudra-1/Code-Playground-Coding-Plateform-"
              />
              <ProjectCard
                title="Assembly Visualizer GUI"
                description="Educational web application that visualizes assembly code execution and CPU operations in real-time."
                tags={["Next.js", "TypeScript", "Tailwind CSS"]}
                link="https://github.com/lord-rudra-1/assembly_visualizer_gui"
              />
              <ProjectCard
                title="Disaster Relief Management"
                description="Comprehensive disaster management application with role-based authentication for administrators and volunteers."
                tags={["Node.js", "Express", "Sequelize", "MySQL"]}
                link="https://github.com/lord-rudra-1/Disaster-Relief-Management-System"
              />
              <ProjectCard
                title="Asteroid Shooting Game"
                description="2D space shooter game with intuitive spaceship movement controls and progressive weapon upgrades."
                tags={["Unity", "C#", "Game Development"]}
                link="https://github.com/lord-rudra-1/Space-Shooter"
              />
              <ProjectCard
                title="IIIT Vadodara ICD Website"
                description="Redesigned the official institute website with modern UI/UX for an educational hackathon (WEB SURGE 2025)."
                tags={["Next.js", "React", "Tailwind CSS", "Framer Motion"]}
                link="https://github.com/lord-rudra-1/IIITVadodara-ICD_Institute-Website"
              />
              <ProjectCard
                title="PetStop - Pet Adoption"
                description="Full-stack pet adoption platform with features for pet registration, adoption applications, and pet care services."
                tags={["React", "Node.js", "Express", "MySQL"]}
                link="https://github.com/lord-rudra-1/PetStop"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Achievements & Leadership
              </span>
              <span className="ml-2 text-white">🏆</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Award className="w-6 h-6 mr-2 text-purple-500" />
                  Competitive Programming
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>CodeChef: 2-Star Coder (Max Rating: 1513)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>LeetCode: Max Rating: 1508 | Solved 172+ problems across all difficulty levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>Finalist at College Annual Hackathon 2025</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gray-900 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                  <Users className="w-6 h-6 mr-2 text-pink-500" />
                  Leadership & Activities
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Organizer, Stavya (College Cultural Festival) 2025</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Led coordination team for Antakshari event with 100+ participants from 10+ institutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Public Speaking Club (2023-Present)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2">•</span>
                    <span>Received 'Best Speaker' recognition at departmental technical symposium</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Get In Touch
              </span>
              <span className="ml-2 text-white">🚀</span>
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white px-4 py-3"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                    disabled={formSubmitting}
                  >
                    {formSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
                <div className="mt-6 text-center">
                  <p className="text-gray-400 mb-2">Or reach me directly:</p>
                  <div className="flex justify-center">
                    <a
                      href="mailto:rudraraj12345672@gmail.com"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer with Social Links */}
      <footer className="py-6 bg-black border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm">
                Rudra Raj Narayan Monas. All rights reserved © {new Date().getFullYear()}
              </p>
            </div>

            {/* Right side - Social Icons */}
            <div className="flex items-center justify-center md:justify-end gap-4 mt-4 md:mt-0">
              <SocialIcon icon={<Github className="h-5 w-5" />} href="https://github.com/lord-rudra-1" label="GitHub" />
              <SocialIcon icon={<Linkedin className="h-5 w-5" />} href="https://www.linkedin.com/in/rudra-monas" label="LinkedIn" />
              <SocialIcon icon={<Twitter className="h-5 w-5" />} href="https://x.com/Lord_Rudra_1" label="X"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
