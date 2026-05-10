const experience = [
  {
    role: "Game Dev/Specialist",
    company: "CountPro",
    period: "2026 May - Present",
    description: [
      "Developing games using Unity and C#",
    ],
  },
  {
    role: "Web App Developer",
    company: "CountPro",
    period: "2026 February - 2026 May",
    description: [
      "Developed web applications for the company",
    ],
  },
  {
    role: "Software Engineer",
    company: "Argon Software",
    period: "2025 November - 2026 February",
    description: [
      "Software Engineer: Assisted in developing and maintaining web and application features, contributed to debugging, code optimization, and feature implementation, created new websites from scratch",
      "Team Lead: Helped distribute tasks and guide team members during development cycles, ensured deliverables were completed according to requirements and deadlines",
      "Project Management: Supported project planning, task breakdown, and timeline tracking, coordinated with team members to monitor progress and resolve blockers",
      "Quality Assurance (Part-time): Conducted manual testing to identify bugs and usability issues",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Freelancer",
    period: "2024 - 2025",
    description: [
      "Built and maintained web applications",
      "Built websites using HTML, CSS, PHP, and JavaScript",
    ],
  },
  {
    role: "Web and App Developer",
    company: "Freelancer",
    period: "2024 - 2025",
    description: [
      "Developed responsive web applications using React and Flutter",
      "Collaborated with clients to deliver custom solutions",
      "Implemented modern UI/UX designs and best practices",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Experience
        </p>

        <div className="space-y-12">
          {experience.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
              <span className="text-sm text-neutral-400 md:w-40 shrink-0">
                {item.period}
              </span>
              <div>
                <h3 className="text-neutral-900 font-medium mb-1">{item.role}</h3>
                <p className="text-sm text-neutral-500 mb-3">{item.company}</p>
                <ul className="space-y-2">
                  {item.description.map((desc, i) => (
                    <li key={i} className="text-sm text-neutral-400 leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
