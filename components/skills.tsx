const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "React", "Next.js", "Vite", "Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Python", "FastAPI", "Node.js", "MySQL", "PostgreSQL", "Firebase", "WebSocket"],
  },
  {
    category: "IoT & Embedded Systems",
    items: ["Arduino", "ESP32", "C++", "MicroPython"],
  },
  {
    category: "Game Development",
    items: ["Unity", "C#"],
  },
  {
    category: "Tools & Management",
    items: ["Git", "GitHub", "Docker", "Figma", "Jira", "Trello"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Claude", "Gemini", "v0", "GitHub Copilot", "Stitch"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 bg-neutral-50">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('/images/grid-lines.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "400px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Skills & Abilities
        </p>

        <div className="space-y-12">
          {skills.map((skill) => (
            <div key={skill.category}>
              <h3 className="text-sm font-medium text-neutral-900 mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-neutral-500 px-4 py-2 bg-white border border-neutral-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
