"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Project One",
    description: "A web application built with Next.js and TypeScript.",
    images: ["/images/grid-lines.png", "/images/fernando.jpg", "/images/dots-pattern.png"],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://example.com", // remove this line if no link
  },
  {
    title: "Project Two",
    description: "Cross-platform mobile app using React Native.",
    images: ["/images/fernando.jpg", "/images/grid-lines.png", "/images/dots-pattern.png"],
    tags: ["React Native", "Expo", "Firebase"],
    // no link
  },
  {
    title: "Project Three",
    description: "Game developed with Unity and C#.",
    images: ["/images/dots-pattern.png", "/images/grid-lines.png", "/images/fernando.jpg"],
    tags: ["Unity", "C#", "Game Design"],
    link: "https://example.com",
  },
  {
    title: "Project Four",
    description: "Game developed with Unity and C#.",
    images: ["/images/grid-lines.png", "/images/dots-pattern.png", "/images/fernando.jpg"],
    tags: ["Unity", "C#", "Game Design"],
    // no link
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

                  {/* Project link */}
                  {"link" in project && project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors duration-200 mb-8"
                    >
                      View Project
                      <span className="text-base leading-none">→</span>
                    </a>
                  )}
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