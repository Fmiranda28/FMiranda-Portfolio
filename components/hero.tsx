"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const roles = [
  "Web App Developer",
  "Mobile App Developer",
  "Project Manager",
  "Team Leader",
  "Game Developer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = roles[currentRole]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentText) {
      // Finished typing, wait then start deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
      // Finished deleting, move to next role
      setIsDeleting(false)
      setCurrentRole((prev) => (prev + 1) % roles.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1))
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Dot pattern - Top Right */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-1/2"
        style={{
          backgroundImage: "radial-gradient(circle, #c5c5c5 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 100% 0%, black 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 45%, transparent 65%)",
          WebkitMaskImage: "radial-gradient(ellipse at 100% 0%, black 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0.3) 45%, transparent 65%)",
        }}
      />
      
      {/* Dot pattern - Bottom Left */}
      <div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
        style={{
          backgroundImage: "radial-gradient(circle, #c5c5c5 2px, transparent 2px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "14px calc(100% - 14px)",
          clipPath: "polygon(0 100%, 0 0, 100% 100%)",
          maskImage: "linear-gradient(to top right, black 0%, black 50%, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to top right, black 0%, black 50%, transparent 85%)",
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-neutral-100 shrink-0">
          <Image
            src="/images/fernando.jpg"
            alt="Fernando Miranda"
            fill
            className="object-cover"
            style={{ objectPosition: "center 28%" }}
            priority
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-900 mb-4">
            Fernando Miranda
          </h1>

          <div className="h-8 flex items-center justify-center md:justify-start mb-8">
            <p className="text-lg md:text-xl text-neutral-400 font-light">
              {displayText}
              <span className="inline-block w-0.5 h-5 bg-neutral-400 ml-1 animate-pulse" />
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="#about"
              className="text-sm text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors"
            >
              About me
            </a>
            <a
              href="/resume.pdf"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
