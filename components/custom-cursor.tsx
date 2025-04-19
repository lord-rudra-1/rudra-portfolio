"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  // Throttled mouse move handler with useCallback for better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Use requestAnimationFrame to limit updates to the screen refresh rate
    requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    })
  }, [])

  // Optimized hover detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    const isInteractive = Boolean(
      target.tagName === "A" || 
      target.tagName === "BUTTON" || 
      target.closest("a") || 
      target.closest("button")
    );
    
    setIsHovering(isInteractive)
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    document.addEventListener("mouseover", handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [handleMouseMove, handleMouseOver])

  // Only render the cursor on client-side
  useEffect(() => {
    // Add a class to the body to indicate custom cursor is active
    document.body.classList.add('custom-cursor-active')
    
    return () => {
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      <style jsx global>{`
        body.custom-cursor-active {
          cursor: none;
        }
        body.custom-cursor-active a, 
        body.custom-cursor-active button, 
        body.custom-cursor-active [role="button"] {
          cursor: none;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mix-blend-difference pointer-events-none z-[100]"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
          willChange: "transform",
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[100]"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
          willChange: "transform",
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.15,
        }}
      />
    </>
  )
}
