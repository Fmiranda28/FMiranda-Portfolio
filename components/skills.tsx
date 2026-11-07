"use client"

import { useState } from "react"
import { Folder } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript", "React", "Next.js", "Vite", "Flutter", "Dart"],
  },
  {
    category: "Backend",
    items: ["PHP", "Laravel", "Python", "FastAPI", "Node.js", "MySQL", "PostgreSQL", "Firebase", "WebSocket", "Supabase"],
  },
  {
    category: "IoT & Embedded Systems",
    fileName: "iot.md",
    items: ["Arduino", "ESP32", "C++", "MicroPython"],
  },
  {
    category: "Game Development",
    fileName: "games.md",
    items: ["Unity", "C#"],
  },
  {
    category: "Devops",
    fileName: "devops.md",
    items: ["Digital Ocean", "Docker"],
  },
  {
    category: "Tools & Management",
    fileName: "tools.md",
    items: ["Git", "GitHub", "Figma", "Jira", "Trello"],
  },
  {
    category: "AI Tools",
    fileName: "ai.md",
    items: ["ChatGPT", "Claude", "Gemini", "v0", "GitHub Copilot", "Stitch"],
  },
]

const skillLogoUrls: Record<string, string> = {
  HTML: "https://cdn.simpleicons.org/html5",
  CSS: "https://cdn.simpleicons.org/css",
  "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
  Bootstrap: "https://cdn.simpleicons.org/bootstrap",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  React: "https://cdn.simpleicons.org/react",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  Vite: "https://cdn.simpleicons.org/vite",
  Flutter: "https://cdn.simpleicons.org/flutter",
  Dart: "https://cdn.simpleicons.org/dart",
  PHP: "https://cdn.simpleicons.org/php",
  Laravel: "https://cdn.simpleicons.org/laravel",
  Python: "https://cdn.simpleicons.org/python",
  FastAPI: "https://cdn.simpleicons.org/fastapi",
  "Node.js": "https://cdn.simpleicons.org/nodedotjs",
  MySQL: "https://cdn.simpleicons.org/mysql",
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  Firebase: "https://cdn.simpleicons.org/firebase",
  WebSocket: "https://api.iconify.design/mdi/connection.svg",
  Supabase: "https://cdn.simpleicons.org/supabase",
  Arduino: "https://cdn.simpleicons.org/arduino",
  ESP32: "https://cdn.simpleicons.org/espressif",
  "C++": "https://cdn.simpleicons.org/cplusplus",
  MicroPython: "https://cdn.simpleicons.org/micropython",
  Unity: "https://cdn.simpleicons.org/unity",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  "Digital Ocean": "https://cdn.simpleicons.org/digitalocean",
  Docker: "https://cdn.simpleicons.org/docker",
  Git: "https://cdn.simpleicons.org/git",
  GitHub: "https://cdn.simpleicons.org/github",
  Figma: "https://cdn.simpleicons.org/figma",
  Jira: "https://cdn.simpleicons.org/jira",
  Trello: "https://cdn.simpleicons.org/trello",
  ChatGPT: "https://api.iconify.design/mdi/robot-outline.svg",
  Claude: "https://cdn.simpleicons.org/anthropic",
  Gemini: "https://cdn.simpleicons.org/googlegemini",
  v0: "https://cdn.simpleicons.org/v0",
  "GitHub Copilot": "https://cdn.simpleicons.org/githubcopilot",
  Stitch: "https://cdn.simpleicons.org/google",
}

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSkill = skills[activeIndex]

  return (
    <section id="skills" className="border-y border-neutral-200 bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 flex items-end justify-between border-b border-neutral-200 pb-3">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              // active directory: skills
            </p>
            <h2 className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-neutral-900">
              Skills & Abilities
            </h2>
          </div>
          <span className="font-mono text-xs text-neutral-400">
            {String(activeIndex + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid overflow-hidden border border-neutral-200 bg-white md:grid-cols-[185px_1fr]">
          <aside className="min-w-0 border-b border-neutral-200 bg-white p-3 md:border-b-0 md:border-r">
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
              Directories
            </p>
            <nav
              className="flex w-full max-w-[calc(100vw-2rem)] min-w-0 snap-x flex-nowrap touch-pan-x gap-1 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:block md:max-w-none md:overflow-visible md:pb-0"
              aria-label="Skill directories"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {skills.map((skill, index) => (
                <button
                  key={skill.category}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex min-w-max shrink-0 snap-start items-center gap-2 border-l-2 px-2.5 py-1.5 text-left font-mono text-[11px] transition-colors md:w-full ${
                    index === activeIndex
                      ? "border-neutral-900 bg-neutral-50 font-medium text-neutral-900"
                      : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900"
                  }`}
                  aria-current={index === activeIndex ? "page" : undefined}
                >
                  <Folder className="h-4 w-4 shrink-0 text-[#d1a84b]" strokeWidth={1.8} />
                  {skill.fileName ?? `${skill.category.toLowerCase().replaceAll(" ", "-")}.md`}
                </button>
              ))}
            </nav>
          </aside>

          <div className="min-w-0">
            <div className="border-b border-neutral-200 px-5 py-4 md:px-7">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                // active file: {activeSkill.category.toLowerCase().replaceAll(" ", "-")}.md
              </p>
              <h3 className="text-2xl font-light tracking-tight text-neutral-950 md:text-4xl">
                {activeSkill.category}.
              </h3>
            </div>

            <div className="p-5 md:p-7">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                Files
              </p>
              <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-4">
                {activeSkill.items.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2 border border-neutral-200 px-2 py-2 text-xs text-neutral-600 transition-colors hover:border-neutral-900 hover:text-neutral-900"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-neutral-50 p-1">
                      <img
                        src={skillLogoUrls[item]}
                        alt={`${item} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
