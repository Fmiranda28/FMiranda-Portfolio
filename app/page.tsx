"use client"

import { useEffect, useState } from "react"
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

  useEffect(() => {
    if (window.sessionStorage.getItem("skip-frame-story") !== "1") return

    window.sessionStorage.removeItem("skip-frame-story")
    setHasEntered(true)
  }, [])

  return (
    <main className="bg-white">
      {!hasEntered && <FrameStory onComplete={() => setHasEntered(true)} />}
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
