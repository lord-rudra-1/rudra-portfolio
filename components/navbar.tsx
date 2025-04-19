"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"
import Logo from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()
  const isLightMode = theme === 'light'

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#work", id: "work" },
    { name: "Achievements", href: "#achievements", id: "achievements" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 300; // Offset to trigger active state earlier

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[index].id);
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const elem = document.getElementById(targetId)
    
    if (elem) {
      // Get the height of the navbar to use as offset
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 80;
      
      // Calculate the element's position and apply offset to leave space
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - 2; // Reduced from 40px to 20px
      
      // Smooth scroll to the position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsOpen(false)
    setActiveSection(targetId)
  }

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 5 },
  }

  // Add scroll-padding to the document for native anchor link navigation
  useEffect(() => {
    // Add scroll-padding-top to handle native anchor links (in case they're used elsewhere)
    document.documentElement.style.scrollPaddingTop = '10px'; // Reduced from 120px to 100px
    
    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollPaddingTop = ''; 
    };
  }, []);

  const getActiveClassNames = (linkId: string) => {
    if (activeSection === linkId) {
      return isLightMode
        ? "bg-purple-600 text-white font-medium"
        : "bg-white text-black font-medium";
    }
    return isLightMode
      ? "text-gray-700 hover:text-gray-900"
      : "text-gray-300 hover:text-white";
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md py-3 dark:bg-black/80 light:bg-white/90 light:border-b light:border-gray-200" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center rounded-full border border-gray-800 dark:bg-black/50 dark:backdrop-blur-sm light:bg-gray-100 light:border-gray-300 p-1 px-2 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-6 py-2 rounded-full transition-all duration-300 relative ${getActiveClassNames(link.id)}`}
              onClick={(e) => scrollToSection(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <motion.a
            href="https://github.com/lord-rudra-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-colors duration-300"
            aria-label="GitHub"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rudra-monas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-colors duration-300"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.a
            href="https://github.com/lord-rudra-1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-colors duration-300"
            aria-label="GitHub"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rudra-monas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white light:text-gray-700 light:hover:text-gray-900 transition-colors duration-300"
            aria-label="LinkedIn"
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Linkedin size={24} />
          </motion.a>
          <button className="text-white dark:text-white light:text-gray-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 dark:bg-black/95 light:bg-white/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="container mx-auto px-4 py-4"
            >
              <div className="flex flex-col space-y-2 items-center rounded-2xl border border-gray-800 dark:bg-black/50 dark:backdrop-blur-sm light:bg-gray-100 light:border-gray-300 p-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link
                      href={link.href}
                      className={`block w-full py-2 px-6 rounded-full transition-all duration-300 ${getActiveClassNames(link.id)}`}
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
