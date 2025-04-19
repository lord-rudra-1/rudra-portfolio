import type React from "react"
import Link from "next/link"
import type { ReactNode } from "react"

interface SocialIconProps {
  icon: ReactNode
  href: string
  label: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function SocialIcon({ icon, href, label, className = "", onClick }: SocialIconProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-200 ${className}`}
      onClick={onClick}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  )
}
