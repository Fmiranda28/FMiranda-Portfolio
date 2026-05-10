import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}
