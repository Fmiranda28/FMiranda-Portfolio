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
    const spacing = 45

    // "Ant" physics state (the center of the wandering circular chunk)
    let antX = 0
    let antY = 0
    let vx = 0
    let vy = 0
    let targetX = 0
    let targetY = 0

    const maxSpeed = 2.0
    const steeringForce = 0.03

    // Mouse state
    let mouseX = -1000
    let mouseY = -1000
    let isMouseOver = false

    // Handle resize with device pixel ratio scaling for crisp rendering
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * window.devicePixelRatio
      canvas.height = height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

      // Initialize ant and target inside boundaries if not set
      if (antX === 0 && antY === 0) {
        antX = width / 2
        antY = height / 2
        targetX = Math.random() * width
        targetY = Math.random() * height
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Track mouse coordinates on window so canvas can be pointer-events-none
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouseX = e.clientX - rect.left
        mouseY = e.clientY - rect.top
        isMouseOver = true
      } else {
        isMouseOver = false
      }
    }

    const handleMouseLeave = () => {
      isMouseOver = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Main animation loop
    const update = () => {
      // 1. Update Ant position using steering behavior (wandering or mouse tracking)
      const activeTargetX = isMouseOver ? mouseX : targetX
      const activeTargetY = isMouseOver ? mouseY : targetY

      const dx = activeTargetX - antX
      const dy = activeTargetY - antY
      const dist = Math.sqrt(dx * dx + dy * dy)

      // If reached target, choose another random target on the map
      if (dist < 60 && !isMouseOver) {
        targetX = Math.random() * width
        targetY = Math.random() * height
      }

      if (dist > 1) {
        const desiredVx = (dx / dist) * maxSpeed
        const desiredVy = (dy / dist) * maxSpeed

        const steerX = desiredVx - vx
        const steerY = desiredVy - vy

        vx += steerX * steeringForce
        vy += steerY * steeringForce

        antX += vx
        antY += vy
      }

      // Bound checking with margins
      const margin = 40
      if (antX < margin) { antX = margin; vx *= -0.5; targetX = Math.random() * width }
      if (antX > width - margin) { antX = width - margin; vx *= -0.5; targetX = Math.random() * width }
      if (antY < margin) { antY = margin; vy *= -0.5; targetY = Math.random() * height }
      if (antY > height - margin) { antY = height - margin; vy *= -0.5; targetY = Math.random() * height }

      // 2. Clear Canvas
      ctx.clearRect(0, 0, width, height)

      const isDark = document.documentElement.classList.contains("dark")
      const colorPrefix = isDark ? "75, 75, 75" : "212, 212, 212" // neutral-700 / neutral-300

      const startX = (width % spacing) / 2
      const startY = (height % spacing) / 2

      for (let x = startX; x < width; x += spacing) {
        for (let y = startY; y < height; y += spacing) {
          // Calculate distance from dot to the wandering ant center
          const dX = x - antX
          const dY = y - antY
          const dotDist = Math.sqrt(dX * dX + dY * dY)

          // 1 chunk circular spotlight radius (no breathing, no ripples)
          const effectRadius = 320
          let intensity = 0

          if (dotDist < effectRadius) {
            // Cosine curve creates a smooth fade out from the center of the circle
            intensity = Math.cos((dotDist / effectRadius) * (Math.PI / 2))
          }

          // Apply opacity and radius scaling based on the intensity
          const opacity = 0.12 + intensity * 0.55
          const radius = 1.5 + intensity * 1.8

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
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
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
              FSudoLab
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