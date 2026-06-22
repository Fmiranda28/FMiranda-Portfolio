"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const roles = [
  "Web App Developer",
  "Mobile App Developer",
  "Project Manager",
  "Team Leader",
  "Game Developer",
  "IoT Engineer",
  "Founder of FSudoLab.com",
]

interface Wanderer {
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
  maxSpeed: number
  steeringForce: number
  radius: number
}

function AnimatedDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0

    // Spacing between dots
    const spacing = 24

    // Two independent wandering spotlight chunks, each with its own velocity and target (steering brain)
    const wanderers: Wanderer[] = [
      { x: 0, y: 0, vx: 0, vy: 0, targetX: 0, targetY: 0, maxSpeed: 3.5, steeringForce: 0.05, radius: 280 },
      { x: 0, y: 0, vx: 0, vy: 0, targetX: 0, targetY: 0, maxSpeed: 4.2, steeringForce: 0.08, radius: 220 }
    ]

    // Handle resize with device pixel ratio scaling for crisp rendering
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      // Initialize positions and targets inside boundaries
      wanderers.forEach((w) => {
        if (w.x === 0 && w.y === 0) {
          w.x = Math.random() * width
          w.y = Math.random() * height
          w.targetX = Math.random() * width
          w.targetY = Math.random() * height
        }
      })
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Main animation loop
    const update = () => {
      // 1. Update all wanderers using steering behavior (individual paths/brains)
      wanderers.forEach((w) => {
        const dx = w.targetX - w.x
        const dy = w.targetY - w.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Choose a new random target on the map if close
        if (dist < 60) {
          w.targetX = Math.random() * width
          w.targetY = Math.random() * height
        }

        if (dist > 1) {
          const desiredVx = (dx / dist) * w.maxSpeed
          const desiredVy = (dy / dist) * w.maxSpeed

          const steerX = desiredVx - w.vx
          const steerY = desiredVy - w.vy

          w.vx += steerX * w.steeringForce
          w.vy += steerY * w.steeringForce

          w.x += w.vx
          w.y += w.vy
        }

        // Bound checking with soft wall bounces
        const margin = 40
        if (w.x < margin) { w.x = margin; w.vx *= -0.5; w.targetX = Math.random() * width }
        if (w.x > width - margin) { w.x = width - margin; w.vx *= -0.5; w.targetX = Math.random() * width }
        if (w.y < margin) { w.y = margin; w.vy *= -0.5; w.targetY = Math.random() * height }
        if (w.y > height - margin) { w.y = height - margin; w.vy *= -0.5; w.targetY = Math.random() * height }
      })

      // 2. Clear Canvas
      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains("dark")
      const colorPrefix = isDark ? "115, 115, 115" : "163, 163, 163" // neutral-500 / neutral-400

      const startX = (width % spacing) / 2
      const startY = (height % spacing) / 2

      for (let x = startX; x < width; x += spacing) {
        for (let y = startY; y < height; y += spacing) {
          let combinedIntensity = 0

          // Calculate combined intensity from both spotlights
          for (const w of wanderers) {
            const dX = x - w.x
            const dY = y - w.y
            const dotDist = Math.sqrt(dX * dX + dY * dY)

            if (dotDist < w.radius) {
              const intensity = Math.cos((dotDist / w.radius) * (Math.PI / 2))
              if (intensity > combinedIntensity) {
                combinedIntensity = intensity
              }
            }
          }

          // Apply opacity and radius scaling based on the combined intensity
          const opacity = 0.12 + combinedIntensity * 0.55
          const radius = 1.0 + combinedIntensity * 1.2

          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${colorPrefix}, ${opacity})`
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(update)
    }

    update()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{
        maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 95%)',
        WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 95%)',
      }}
    />
  )
}

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = roles[currentRole]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    if (!isDeleting && displayText === currentText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === "") {
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
      <AnimatedDotGrid />

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
              href="https://fsudolab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-900 hover:text-neutral-500 transition-colors"
            >
              FSudoLab.com
            </a>
            <a
              href="/my-cv/FMiranda-resume.pdf"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}