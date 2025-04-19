import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rudra Raj Narayan Monas",
  description:
    "Portfolio of Rudra Raj Narayan Monas, a Computer Science Student and Full Stack Engineer.",
  generator: "Next.js",
  icons: {
    icon: [
      { url: '/fevicon.ico' },
      { url: '/llg.png' }
    ],
    apple: [
      { url: '/llg.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fevicon.ico" />
        <link rel="apple-touch-icon" href="/llg.png" />
      </head>
      <body className="theme-transition" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
