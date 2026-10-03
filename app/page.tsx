"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { FrameStory } from "@/components/frame-story"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false)

  return (
    <main className="bg-white">
      <FrameStory onComplete={() => setHasEntered(true)} />
      {hasEntered && (
        <>
          <Nav />
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Footer />
        </>
      )}
    </main>
  )
}
