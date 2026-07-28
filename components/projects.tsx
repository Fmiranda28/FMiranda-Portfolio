"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Morpolohikal na Estruktura",
    description:
      "A web application that explores Gen Z morpolohikal words and slang, helping users understand their meanings and usage.",
    images: [
      "/projects-images/Login-MPS.webp",
      "/projects-images/Signup-MPS.webp",
      "/projects-images/1-MPS.webp",
      "/projects-images/2-MPS.webp",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web App"],
  },
  {
    title: "Farmer Picks",
    description:
      "An e-commerce platform that connects consumers directly with local farmers for fresh and accessible agricultural products.",
    images: [
      "/projects-images/FP1.webp",
      "/projects-images/FP2.webp",
      "/projects-images/FP3.webp",
      "/projects-images/FP4.webp",
      "/projects-images/FP5.webp",
    ],
    tags: ["React Native", "Expo", "Firebase", "E-commerce"],
  },
  {
    title: "Jentaime Water Station",
    description:
      "A B2B e-commerce platform for water station businesses, streamlining product ordering and customer transactions.",
    images: [
      "/projects-images/JW-1.webp",
      "/projects-images/JW-2.webp",
      "/projects-images/JW-3.webp",
      "/projects-images/JW-4.webp",
      "/projects-images/JW-5.webp",
      "/projects-images/JW-6.webp",
      "/projects-images/JW-7.webp",
      "/projects-images/JW-8.webp",
      "/projects-images/JW-9.webp",
      "/projects-images/JW-10.webp",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
  },
  {
    title: "Smart-Farming",
    description:
      "A smart farming system with web, mobile, and IoT integration that helps farmers monitor crops and manage agricultural operations efficiently.",
    images: [
      "/projects-images/SmartF-1.webp",
      "/projects-images/SmartF-2.webp",
      "/projects-images/SmartF-3.webp",
      "/projects-images/SmartF-4.webp",
      "/projects-images/SmartF-5.webp",
      "/projects-images/SmartF-6.webp",
      "/projects-images/SmartF-7.webp",
      "/projects-images/SmartF-8.webp",
      "/projects-images/SmartF-9.webp",
      "/projects-images/SmartF-10.webp",
    ],
    tags: ["IoT", "Web App", "Mobile App", "Smart Farming"],
  },
  {
    title: "Wander",
    description:
      "A travel and exploration application designed to help users discover destinations, plan trips, and enhance their travel experiences.",
    images: [
      "/projects-images/wander-1.webp",
      "/projects-images/wander-2.webp",
      "/projects-images/wander-3.webp",
      "/projects-images/wander-4.webp",
    ],
    tags: ["Next.js", "Travel App", "UI/UX", "Web App"],
  },
  {
    title: "Scrolly-Telling Web",
    description:
      "An interactive scrollytelling website that presents immersive visual narratives through animations and dynamic content transitions.",
    images: [
      "/projects-images/CITY/CITY1.webp",
      "/projects-images/CITY/CITY2.webp",
      "/projects-images/CITY/CITY3.webp",
      "/projects-images/CITY/CITY4.webp",
    ],
    tags: ["JavaScript", "GSAP", "Scrollytelling", "Interactive Web"],
  },
  {
    title: "Flappy Bird Clone",
    description:
      "A recreation of the classic Flappy Bird game featuring simple controls, obstacle mechanics, and retro-inspired gameplay.",
    images: ["/projects-images/BIRD-GAME/Flappy-Bird.webp"],
    tags: ["Unity", "C#", "2D Game", "Game Development"],
  },
  {
    title: "Space Cinematic Website",
    description:
      "A scrollytelling website that takes users on a cinematic journey through space, featuring stunning visuals and engaging storytelling.",
    images: [
      "/projects-images/Dynamic-Space/Dyn1.webp",
      "/projects-images/Dynamic-Space/Dyn2.webp",
      "/projects-images/Dynamic-Space/Dyn3.webp",
      "/projects-images/Dynamic-Space/Dyn4.webp",
      "/projects-images/Dynamic-Space/Dyn5.webp",
    ],
    tags: ["JavaScript", "Scrollytelling", "UI/UX", "GSAP", "Interactive Web"],
  },
  {
    title: "Soccer Multiplayer Game",
    description:
      "A multiplayer game where players compete against each other in soccer matches, featuring smooth controls and real-time gameplay.",
    images: [
      "/projects-images/SM-Game/SG-1.webp",
      "/projects-images/SM-Game/SG-2.webp",
      "/projects-images/SM-Game/SG-3.webp",
      "/projects-images/SM-Game/SG-4.webp",
      "/projects-images/SM-Game/SG-5.webp",
    ],
    tags: ["TypeScript", "Node.js", "WebSocket"],
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [fading, setFading] = useState(false)

  const project = projects[currentIndex]
  const pad = (n: number) => String(n).padStart(2, "0")

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )
  }, [project.images.length])

  const changeProject = (newIndex: number) => {
    if (newIndex === currentIndex) return
    setFading(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setCurrentImageIndex(0)
      setFading(false)
    }, 260)
  }

  useEffect(() => {
    if (lightboxOpen) return
    const id = setInterval(nextImage, 3500)
    return () => clearInterval(id)
  }, [nextImage, lightboxOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [nextImage, prevImage])

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-xs text-neutral-400 uppercase tracking-widest">
            Projects
          </p>
          <span className="text-xs text-neutral-400 tracking-wider">
            {pad(currentIndex + 1)}&nbsp;/&nbsp;{pad(projects.length)}
          </span>
        </div>

        {/* Project Card */}
        <div
          className={`w-full flex flex-col md:flex-row border border-neutral-100 rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-[260ms] ease-in-out ${
            fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {/* Image Panel */}
          <div className="relative w-full md:w-[56%] aspect-video md:aspect-auto h-[240px] md:h-[480px] bg-neutral-50 overflow-hidden shrink-0">
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} — ${pad(currentImageIndex + 1)}`}
              fill
              className="object-cover cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-neutral-200/50 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center cursor-pointer shadow-xs backdrop-blur-xs transition-all hover:scale-105 active:scale-95"
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-neutral-200/50 bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center cursor-pointer shadow-xs backdrop-blur-xs transition-all hover:scale-105 active:scale-95"
                  aria-label="Next image"
                >
                  →
                </button>

                {/* Image Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === currentImageIndex ? "w-5 bg-neutral-900" : "w-1.5 bg-black/20"
                      }`}
                      aria-label={`Image ${i + 1}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setCurrentImageIndex(i)
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Info Panel */}
          <div className="flex-1 flex flex-col justify-between p-8 md:p-12 bg-white md:h-[480px]">
            <div className="flex-1 flex flex-col min-h-0">
              {/* Category / Primary Tag */}
              <p className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase mb-3">
                {project.tags[0]}
              </p>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-light text-neutral-900 leading-tight mb-4">
                {project.title}
              </h3>

              {/* Divider Line */}
              <div className="w-8 h-px bg-neutral-200 mb-5" />

              {/* Description */}
              <p className="text-neutral-500 leading-relaxed text-sm md:text-base line-clamp-4">
                {project.description}
              </p>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-neutral-500 px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full hover:border-neutral-900 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-between mt-8">
          <button
            className="flex items-center gap-2 px-5 py-2 border border-neutral-200 rounded-full text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 bg-white hover:bg-neutral-50 transition-colors text-sm"
            onClick={() => changeProject((currentIndex - 1 + projects.length) % projects.length)}
            aria-label="Previous project"
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          {/* Project Dots */}
          <div className="flex gap-1.5 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "w-6 bg-neutral-900" : "w-1.5 bg-neutral-200"
                }`}
                aria-label={`Project ${i + 1}`}
                onClick={() => changeProject(i)}
              />
            ))}
          </div>

          <button
            className="flex items-center gap-2 px-5 py-2 border border-neutral-200 rounded-full text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 bg-white hover:bg-neutral-50 transition-colors text-sm"
            onClick={() => changeProject((currentIndex + 1) % projects.length)}
            aria-label="Next project"
          >
            <span>Next</span>
            <span>→</span>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl cursor-pointer transition-colors"
          >
            &times;
          </button>

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                aria-label="Previous image"
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all"
              >
                ←
              </button>
               <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                aria-label="Next image"
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-all"
              >
                →
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={project.images[currentImageIndex]} alt={project.title} fill className="object-contain" />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-wider">
            {pad(currentImageIndex + 1)} / {pad(project.images.length)}
          </p>
        </div>
      )}
    </section>
  )
}