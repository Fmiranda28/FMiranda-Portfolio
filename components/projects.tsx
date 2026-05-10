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
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Projects
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 border border-neutral-100 hover:border-neutral-200 transition-colors"
            >
              <h3 className="text-neutral-900 mb-2">{project.title}</h3>
              <p className="text-sm text-neutral-500 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-neutral-400 px-2 py-1 bg-neutral-50"
                  >
                    {tag}
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
