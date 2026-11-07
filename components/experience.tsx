const experience = [
  {
    period: "Jan 2024 — Present",
    role: "Founder/CEO",
    company: "FSudoLab (FSudoLab.com)",
    description: [
      "Managed client relationships from initial consultation through project delivery, gathering requirements and setting expectations on scope and timelines.",
      "Directed developers on assigned projects, distributing tasks and reviewing work to keep output aligned with client requirements.",
      "Managed project timelines and schedules across multiple concurrent engagements, keeping deliverables on track.",
    ],
  },
  {
    period: "May 2026 — Present",
    role: "AI Trainer Specialist",
    company: "Outlier",
    description: [
      "Evaluated AI-generated responses for accuracy, quality, and relevance against defined guidelines.",
      "Reviewed and refined model outputs to improve consistency, correctness, and overall response quality.",
      "Provided structured feedback to support ongoing model training and performance improvements.",
    ],
  },
  {
    period: "Feb 2026 — Sep 2026",
    role: "CountPro PH",
    company: "8 mos",
    roles: [
      { period: "May 2026 — Sep 2026 · 5 mos", role: "Web App Developer" },
      { period: "Feb 2026 — May 2026 · 4 mos", role: "Web App Developer Intern" },
    ],
    description: [
      "Built web-based systems from scratch and helped maintain and improve existing websites.",
      "Supported technical planning and system architecture discussions, offering input on functionality, user experience, and implementation approaches.",
      "Worked closely with developers and stakeholders to help identify requirements, evaluate solutions, and prioritize enhancements.",
      "Assisted in addressing technical challenges and aligning solutions with business goals, with attention to reliability, performance, and usability.",
    ],
  },
  {
    period: "Nov 2025 — Feb 2026",
    role: "Software Engineer Intern",
    company: "Argon Software",
    description: [
      "Developed and maintained web and application features, handling debugging, code optimization, and end-to-end feature implementation, including building new websites from scratch.",
      "Led task distribution and guided team members throughout development cycles, ensuring deliverables were completed on time and aligned with project requirements.",
      "Managed project planning, task breakdown, and timeline tracking, coordinating with the team to monitor progress and proactively resolve blockers.",
      "Performed manual testing to identify bugs and usability issues, contributing to QA efforts on a part-time capacity.",
    ],
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Web Developer",
    company: "Freelance",
    description: [
      "Built and maintained responsive web applications using React, Flutter, HTML, CSS, PHP, and JavaScript.",
      "Collaborated with clients to gather requirements and deliver custom solutions.",
      "Implemented modern UI/UX designs and development best practices.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-white px-4 py-24 text-[#242424] sm:px-6 sm:py-32">
      <div className="mx-auto max-w-[980px]">
        <p className="mb-12 text-xs uppercase tracking-[0.18em] text-neutral-400">
          Professional Path
        </p>

        <div className="space-y-8 sm:space-y-10">
          {experience.map((item) => (
            <article key={`${item.period}-${item.role}`} className="grid grid-cols-1 gap-2 sm:grid-cols-[136px_minmax(0,1fr)] sm:gap-4">
              <p className="text-xs leading-5 text-neutral-500 sm:pt-0.5">{item.period}</p>

              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-5 text-neutral-900">{item.role}{item.company && ["AI Trainer Specialist", "Founder/CEO"].includes(item.role) ? `, ${item.company}` : ""}</h3>

                {item.roles ? (
                  <>
                    <p className="mt-0.5 text-xs text-neutral-500">{item.company}</p>
                    <div className="relative mt-5 space-y-4 pl-6 before:absolute before:bottom-5 before:left-[7px] before:top-1 before:w-2 before:bg-neutral-200">
                      {item.roles.map((role) => (
                        <div key={role.period} className="relative">
                          <span className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-neutral-400" />
                          <p className="text-sm font-bold leading-5 text-neutral-800">{role.role}</p>
                          <p className="text-xs leading-5 text-neutral-500">{role.period}</p>
                        </div>
                      ))}
                    </div>
                  </>
                ) : item.company && !["AI Trainer Specialist", "Founder/CEO"].includes(item.role) ? (
                  <p className="mt-0.5 text-sm font-bold leading-5 text-neutral-800">{item.company}</p>
                ) : null}

                <ul className="mt-1 space-y-1">
                  {item.description.map((description) => (
                    <li key={description} className="pl-3 text-sm leading-[1.45] text-neutral-800 before:mr-1 before:content-['–']">
                      {description}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}