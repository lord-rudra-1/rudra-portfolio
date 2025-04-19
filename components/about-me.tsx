"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react"

const educationData = [
  {
    id: 1,
    institution: "IIIT Vadodara International Campus, Diu",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 - 2027 (Expected)",
    location: "Diu, India",
    type: "Full-time",
    logo: "/iiitv-logo.svg",
    achievements: ["CPI: 9.03/10.0", "SPI: 9.33/10.0", "Top 5% of class"],
  },
  {
    id: 2,
    institution: "Kendriya Vidyalaya, Ujjain",
    degree: "CBSE Board, 12th Grade",
    period: "2023",
    location: "Ujjain, India",
    type: "Full-time",
    logo: "/kv-logo.svg",
    achievements: ["93.8%"],
  },
  {
    id: 3,
    institution: "Kendriya Vidyalaya, Ujjain",
    degree: "CBSE Board, 10th Grade",
    period: "2021",
    location: "Ujjain, India",
    type: "Full-time",
    logo: "/kv-logo.svg",
    achievements: ["94.6%"],
  },
]

const experienceData = [
  {
    id: 1,
    company: "IIIT Vadodara - ICD",
    role: "Academic Committee Member",
    period: "2024 - 2025",
    location: "Diu, India",
    type: "Part-time",
    logo: "/iiitv-logo.svg",
    responsibilities: [
      "Collaborated with faculty and students to enhance academic policies and organize academic events",
      "Assisted in curriculum planning, exam scheduling, and addressing student academic concerns",
      "Streamlined student-faculty communication, reducing resolution time for academic concerns by 30%",
      "Actively contributed to the organisation of the college cultural fest, coordinating between academic and cultural committees"
    ],
  },
]

export default function AboutMe() {
  return (
    <section id="about" className="py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About Me</span>
            <span className="ml-2">👨‍💻</span>
          </h2>
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-16">
            <div className="md:w-1/3">
              <div className="relative w-64 h-64 mx-auto">
                {/* Gradient border around the circular image */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[4px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-70" style={{ filter: 'blur(15px)' }}></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/profile.png"
                      alt="Rudra Raj Narayan Monas"
                      width={256}
                      height={256}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="prose prose-invert max-w-none text-center md:text-left">
                {/* Mobile description */}
                <p className="text-lg leading-relaxed md:hidden">
                  Computer Science student at IIIT Vadodara with expertise in full-stack development, game engineering,
                  and data systems. Building innovative solutions with real-world impact. 💻⚡🔥
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hello, I'm Rudra Raj Narayan Monas!</strong>
                  </p>
                  <p className="mb-4">
                    A dedicated <strong>Computer Science student</strong> with versatile technical expertise spanning
                    full-stack development, game engineering, and data systems. I've demonstrated success in building
                    competitive coding platforms, disaster management systems, and interactive applications.
                  </p>
                  <p className="mb-4">
                    Currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong> at IIIT Vadodara
                    International Campus, Diu, where I maintain a <strong>CPI of 9.03/10.0</strong> and rank in the{" "}
                    <strong>top 5% of my class</strong>.
                  </p>
                  <p>
                    I'm passionate about <strong>solving complex technical problems</strong> and creating applications
                    that make a difference. My experience includes leading development teams and delivering projects
                    with real-world impact across multiple domains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Education
              </span>
              <span className="ml-2 text-white">
                <GraduationCap className="inline-block" />
              </span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Education Items */}
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <GraduationCap className="w-8 h-8 text-purple-400" />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                          <h4 className="text-lg text-purple-400">{item.institution}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      {item.achievements.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-gray-300 mb-2 text-center md:text-left">
                            Achievements:
                          </h5>
                          <div className="flex flex-wrap justify-center md:justify-start gap-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                              <span
                                key={achievementIndex}
                                className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 border border-purple-500/20"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < educationData.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"
                        style={{ top: "100%", height: "100px" }}
                      ></motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Experience
              </span>
              <span className="ml-2 text-white">
                <Building2 className="inline-block" />
              </span>
            </h3>
            <div className="relative">
              {/* Vertical Line (only visible on larger screens) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experienceData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-8 relative"
                  >
                    {/* Content */}
                    <div className="md:w-1/2 p-6 bg-gray-900/50 rounded-xl backdrop-blur-sm border border-gray-800">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden mb-4 md:mb-0 mx-auto md:mx-0">
                          <Building2 className="w-8 h-8 text-pink-400" />
                        </div>
                        <div className="text-center md:text-left">
                          <h3 className="text-xl font-bold text-white">{item.role}</h3>
                          <h4 className="text-lg text-pink-400">{item.company}</h4>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400 mt-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{item.location}</span>
                          </div>
                        </div>
                      </div>
                      {item.responsibilities.length > 0 && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-gray-300 mb-2 text-center md:text-left">
                            Responsibilities:
                          </h5>
                          <ul className="space-y-2 text-gray-400 text-sm">
                            {item.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <span className="text-pink-400 mr-2">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Timeline Point (hidden on mobile) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden md:block"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
