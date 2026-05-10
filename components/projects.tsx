"use client"

import { useState } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Project One",
    description: "A web application built with Next.js and TypeScript.",
    image: "/images/grid-lines.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Cross-platform mobile app using React Native.",
    image: "/images/grid-lines.png",
    tags: ["React Native", "Expo", "Firebase"],
  },
  {
    title: "Project Three",
    description: "Game developed with Unity and C#.",
    image: "/images/grid-lines.png",
    tags: ["Unity", "C#", "Game Design"],
  },
  {
    title: "Project Four",
    description: "Game developed with Unity and C#.",
    image: "/images/grid-lines.png",
    tags: ["Unity", "C#", "Game Design"],
  },

]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const project = projects[currentIndex]

  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-light text-neutral-900 mb-20">
          Projects
        </h2>

        <div className="relative">
          {/* Main Project Card */}
          <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-80 md:h-96 bg-neutral-200 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="inline-block mb-4">
                    <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Project {currentIndex + 1} of {projects.length}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-light text-neutral-900 mb-6">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
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

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12">
            <button
              onClick={prevProject}
              className="group flex items-center gap-2 px-6 py-3 text-neutral-900 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <span className="text-xl">←</span>
              <span className="text-sm font-medium">Previous</span>
            </button>

            {/* Progress indicator */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
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
              className="group flex items-center gap-2 px-6 py-3 text-neutral-900 border border-neutral-300 rounded-full hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-300"
            >
              <span className="text-sm font-medium">Next</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
