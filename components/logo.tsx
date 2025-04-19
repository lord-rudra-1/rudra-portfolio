"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function Logo() {
  const { theme } = useTheme();
  const isLightMode = theme === 'light';
  
  return (
    <Link href="#home" className="flex items-center">
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 ${isLightMode ? 'opacity-20' : 'opacity-35'} blur-md animate-pulse`} />
          <div className="relative">
            <Image
              src="/llg.png"
              alt="RM Logo"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
          </div>
        </div>
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
      </motion.div>
    </Link>
  )
}
