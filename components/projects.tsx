const projects = [
  {
    title: "Project One",
    description: "A web application built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Project Two",
    description: "Cross-platform mobile app using React Native.",
    tags: ["React Native", "Expo", "Firebase"],
  },
  {
    title: "Project Three",
    description: "Game developed with Unity and C#.",
    tags: ["Unity", "C#", "Game Design"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-6xl md:text-7xl font-light text-neutral-900 mb-16">
          Projects
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project, index) => (
            <button
              key={index}
              className="group flex-shrink-0 w-72 p-6 border border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50 transition-all text-left cursor-pointer"
            >
              <h3 className="text-neutral-900 mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-400 px-2 py-1 bg-neutral-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
