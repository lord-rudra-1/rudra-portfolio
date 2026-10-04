"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react"

const educationData = [
  {
    id: 1,
    institution: "Indian Institute of Information Technology Vadodara",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 – May 2027",
    location: "Gandhinagar, Gujarat, India",
    type: "Full-time",
    logo: "/iiitv-logo.svg",
    achievements: ["CPI: 8.98"],
  },
  {
    id: 2,
    institution: "Kendriya Vidyalaya Ujjain",
    degree: "Class XII (CBSE)",
    period: "Apr 2019 – Mar 2022",
    location: "Ujjain, Madhya Pradesh",
    type: "Full-time",
    logo: "/kv-logo.svg",
    achievements: ["93.80%"],
  },
  {
    id: 3,
    institution: "Kendriya Vidyalaya Ujjain",
    degree: "Class X (CBSE)",
    period: "Apr 2019 – Mar 2022",
    location: "Ujjain, Madhya Pradesh",
    type: "Full-time",
    logo: "/kv-logo.svg",
    achievements: ["94.60%"],
  },
]

const experienceData = [
  {
    id: 1,
    company: "IIT Kanpur",
    role: "SURGE Research Intern — Perception and Intelligence Lab",
    period: "May 2026 – July 2026",
    location: "Kanpur, Uttar Pradesh",
    type: "Internship",
    logo: "/iitk-logo.svg",
    responsibilities: [
      "Designed a novel zero-shot denoising method for microscopic images targeting Gaussian and Poisson noise.",
      "Implemented blind-spot CNN-based denoising models in PyTorch/TensorFlow with CUDA-accelerated training.",
      "Benchmarked model performance against existing state-of-the-art methods on FMD and W2S microscopy datasets."
    ],
  },
  {
    id: 2,
    company: "IIIT Vadodara",
    role: "Teaching Assistant — Design and Analysis of Algorithms",
    period: "Aug 2026 – Present",
    location: "IIIT Vadodara",
    type: "Part-time",
    logo: "/iiitv-logo.svg",
    responsibilities: [
      "Evaluated assignments and supported students with debugging and complexity analysis.",
      "Assisted laboratory sessions implementing algorithms in C/C++.",
      "Conducted tutorial sessions for algorithm design concepts."
    ],
  },
  {
    id: 3,
    company: "IIIT Vadodara",
    role: "Teaching Assistant — Data Structures Lab",
    period: "Jan 2026 – Apr 2026",
    location: "IIIT Vadodara",
    type: "Part-time",
    logo: "/iiitv-logo.svg",
    responsibilities: [
      "Assisted laboratory sessions for 180+ students implementing data structures and algorithms in C/C++.",
      "Evaluated assignments, viva examinations, and supported students with debugging and complexity analysis."
    ],
  },
  {
    id: 4,
    company: "InventX Accelerator, IIT Gandhinagar",
    role: "Product Innovation Intern",
    period: "May 2025 – Jul 2025",
    location: "Gandhinagar, Gujarat",
    type: "Internship",
    logo: "/iitgn-logo.svg",
    responsibilities: [
      "Designed a vibration-damping handle grip using signal processing and Fourier Transform-based vibration analysis.",
      "Prototyped and tested designs using Arduino, Fusion 360/SolidWorks, 3D printing, and laser cutting.",
      "Reduced measured hand-transmitted vibration levels from 3.7 m/s² to 2.1 m/s² through iterative design and testing."
    ],
  }
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
                  Computer Science student at IIIT Vadodara specializing in Artificial Intelligence, Machine Learning, and Software Engineering. Passionate about building robust algorithms and intelligent systems. 💻⚡🔥
                </p>
                {/* Desktop description */}
                <div className="hidden md:block">
                  <p className="text-xl mb-4">
                    🚀 <strong>Hello, I'm Rudra Raj Narayan Monas!</strong>
                  </p>
                  <p className="mb-4">
                    A dedicated <strong>Computer Science student</strong> at IIIT Vadodara with specialized expertise spanning
                    <strong> Artificial Intelligence, Machine Learning, and Software Engineering</strong>. I have a proven track record of designing high-impact systems, from zero-shot denoising models for microscopic imagery at IIT Kanpur, to scalable federated learning platforms.
                  </p>
                  <p className="mb-4">
                    Currently pursuing my <strong>B.Tech in Computer Science and Engineering</strong>, where I maintain a <strong>CPI of 8.98</strong> and serve as a Teaching Assistant for core algorithms courses. I secured AIR 6271 in GATE 2026 (Computer Science) and ranked in the top 5% of NPTEL's Machine Learning cohort.
                  </p>
                  <p>
                    I am highly passionate about <strong>architecting complex data pipelines</strong>, developing state-of-the-art machine learning models, and building scalable software solutions that solve real-world technical challenges.
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
                    className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
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

                    {/* Timeline Connector (hidden on mobile) */}
                    {index < experienceData.length - 1 && (
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
        </motion.div>
      </div>
    </section>
  )
}
