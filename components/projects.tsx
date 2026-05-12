"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const projects = [
    {
      title: "Morpolohikal na Estruktura",
      description:
        "A web application that explores Gen Z morpolohikal words and slang, helping users understand their meanings and usage.",
      images: [
        "/projects-images/Login-MPS.png",
        "/projects-images/Signup-MPS.png",
        "/projects-images/1-MPS.png",
        "/projects-images/2-MPS.png",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web App"],
    },
    {
      title: "Farmer Picks",
      description:
        "An e-commerce platform that connects consumers directly with local farmers for fresh and accessible agricultural products.",
      images: [
        "/projects-images/FP1.png",
        "/projects-images/FP2.png",
        "/projects-images/FP3.png",
        "/projects-images/FP4.png",
        "/projects-images/FP5.png",
      ],
      tags: ["React Native", "Expo", "Firebase", "E-commerce"],
    },
    {
      title: "Jentaime Water Station",
      description:
        "A B2B e-commerce platform for water station businesses, streamlining product ordering and customer transactions.",
      images: [
        "/projects-images/JW-1.png",
        "/projects-images/JW-2.png",
        "/projects-images/JW-3.png",
        "/projects-images/JW-4.png",
        "/projects-images/JW-5.png",
        "/projects-images/JW-6.png",
        "/projects-images/JW-7.png",
        "/projects-images/JW-8.png",
        "/projects-images/JW-9.png",
        "/projects-images/JW-10.png",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
    },
    {
      title: "Smart-Farming",
      description:
        "A smart farming system with web, mobile, and IoT integration that helps farmers monitor crops and manage agricultural operations efficiently.",
      images: [
        "/projects-images/SmartF-1.jpg",
        "/projects-images/SmartF-2.jpg",
        "/projects-images/SmartF-3.jpg",
        "/projects-images/SmartF-4.jpg",
        "/projects-images/SmartF-5.jpg",
        "/projects-images/SmartF-6.jpg",
        "/projects-images/SmartF-7.jpg",
        "/projects-images/SmartF-8.jpg",
        "/projects-images/SmartF-9.jpg",
        "/projects-images/SmartF-10.jpg",
      ],
      tags: ["IoT", "Web App", "Mobile App", "Smart Farming"],
    },
    {
      title: "Wander",
      description:
        "A travel and exploration application designed to help users discover destinations, plan trips, and enhance their travel experiences.",
      images: [
        "/projects-images/Wander-1.png",
        "/projects-images/Wander-2.png",
        "/projects-images/Wander-3.png",
        "/projects-images/Wander-4.png",
      ],
      tags: ["Next.js", "Travel App", "UI/UX", "Web App"],
    },
    {
      title: "Scrolly-Telling Web",
      description:
        "An interactive scrollytelling website that presents immersive visual narratives through animations and dynamic content transitions.",
      images: [
        "/projects-images/CITY/CITY1.png",
        "/projects-images/CITY/CITY2.png",
        "/projects-images/CITY/CITY3.png",
        "/projects-images/CITY/CITY4.png",
      ],
      tags: ["JavaScript", "GSAP", "Scrollytelling", "Interactive Web"],
    },
    {
      title: "Flappy Bird Clone",
      description:
        "A recreation of the classic Flappy Bird game featuring simple controls, obstacle mechanics, and retro-inspired gameplay.",
      images: ["/projects-images/BIRD-GAME/flappy-bird.png"],
      tags: ["Unity", "C#", "2D Game", "Game Development"],
    },

    {
      title: "Space Cinematic Website",
      description:
        "Scrolly Telling website that takes users on a cinematic journey through space, featuring stunning visuals and engaging storytelling.",
        images: [
        "/projects-images/Dynamic-Space/Dyn1.png",
        "/projects-images/Dynamic-Space/Dyn2.png",
        "/projects-images/Dynamic-Space/Dyn3.png",
        "/projects-images/Dynamic-Space/Dyn4.png",
        "/projects-images/Dynamic-Space/Dyn5.png",
      ],
      tags: ["JavaScript", "Scrollytelling", "UI/UX", "GSAP", "Interactive Web"],
    },

    {
      title: "Soccer Multiplayer Game",
      description:
        "A multiplayer game where players can compete against each other in soccer matches, featuring smooth controls and engaging gameplay.",
        images: [
        "/projects-images/SM-Game/SG-1.png",
        "/projects-images/SM-Game/SG-2.png",
        "/projects-images/SM-Game/SG-3.png",
        "/projects-images/SM-Game/SG-4.png",
        "/projects-images/SM-Game/SG-5.png",
      ],
      tags: ["TypeScript", "Node.js", "WebSocket"],
    },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const project = projects[currentIndex]

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }, [project.images.length])

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setCurrentImageIndex(0)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImageIndex(0)
  }

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [currentIndex])

  useEffect(() => {
    if (lightboxOpen) return
    const interval = setInterval(nextImage, 3000)
    return () => clearInterval(interval)
  }, [nextImage, lightboxOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-light text-neutral-900 mb-20">
          Projects
        </h2>

        <div className="relative">
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">

              {/* Image Section */}
              <div className="relative h-80 md:h-96 bg-neutral-200 overflow-hidden">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute inset-0 w-full h-full cursor-zoom-in"
                  aria-label="View fullscreen"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full text-neutral-900 text-sm shadow-sm transition-colors"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 hover:bg-white rounded-full text-neutral-900 text-sm shadow-sm transition-colors"
                      aria-label="Next image"
                    >
                      →
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                      {project.images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={`h-1.5 rounded-full transition-all ${
                            i === currentImageIndex
                              ? "bg-white w-4"
                              : "bg-white/50 w-1.5 hover:bg-white/80"
                          }`}
                          aria-label={`Image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Project {currentIndex + 1} of {projects.length}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mt-4 mb-6">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                    {project.description}
                  </p>

     

                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-neutral-700 px-4 py-2 bg-white border border-neutral-200 rounded-full hover:border-neutral-900 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevProject}
              className="flex items-center gap-2 px-6 py-3 text-neutral-900 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <span className="text-xl">←</span>
              <span className="text-sm font-medium">Previous</span>
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setCurrentImageIndex(0) }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-neutral-900 w-8"
                      : "bg-neutral-300 w-2 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="flex items-center gap-2 px-6 py-3 text-neutral-900 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-medium">Next</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl font-light"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}