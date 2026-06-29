const experience = [
   {
    role: "AI Trainer Specialist (Part-Time)",
    company: "Outlier",
    period: "2026 – Present",
    description: ["– Evaluated AI-generated responses for accuracy, quality, and relevance against defined guidelines.",
                  "– Reviewed and refined model outputs to improve consistency, correctness, and overall response quality.",
                  "– Provided structured feedback to support ongoing model training and performance improvements."],
  },
  {
    role: "Game Dev/Specialist",
    company: "CountPro",
    period: "May 2026 – Present",
    description: ["Developing games using Unity and C#."],
  },
  {
    role: "Web App Developer",
    company: "CountPro",
    period: "Feb 2026 – May 2026",
    description: ["Developed web applications for the company."],
  },
  {
    role: "Software Engineer",
    company: "Argon Software",
    period: "Nov 2025 – Feb 2026",
    description: [
      "Assisted in developing and maintaining web and application features, contributed to debugging, code optimization, and feature implementation, created new websites from scratch.",
      "Helped distribute tasks and guide team members during development cycles, ensured deliverables were completed according to requirements and deadlines.",
      "Supported project planning, task breakdown, and timeline tracking, coordinated with team members to monitor progress and resolve blockers.",
      "Conducted manual testing to identify bugs and usability issues (part-time QA).",
    ],
  },
  {
    role: "Full Stack Web/Mobile App Developer",
    company: "Freelancer",
    period: "2024 – 2025",
    description: [
      "Built and maintained web/mobile applications.",
      "Built websites using HTML, CSS, PHP, and JavaScript.",
      "Developed mobile apps using Flutter and Dart.",
    ],
  },
  {
    role: "Founder",
    company: "FSudoLab",
    period: "2024 – Present",
    description: [
      "Founded and led a startup focused on developing custom web and mobile solutions for businesses and organizations.",
      "Led a team of developers in designing, building, and maintaining websites and applications while coordinating project requirements and development efforts.",
      "Worked directly with clients to understand business needs and deliver solutions using HTML, CSS, JavaScript, PHP, Flutter, and Dart.",
    ],
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Professional Path
        </p>

        <div className="relative pl-[26px]">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-neutral-200" />

          {experience.map((item, i) => {
            const isPresent = item.period.toLowerCase().includes("present");
            return (
              <div key={i} className="relative mb-10">
                <div
                  className={`absolute -left-[26px] top-0.5 w-[17px] h-[17px] rounded-full border z-10 ${
                    isPresent
                      ? "border-black bg-black"
                      : "border-neutral-300 bg-white"
                  }`}
                />

                <div className="flex justify-between items-baseline gap-4 flex-wrap mb-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                  {item.role}
                </h3>
                <span className="text-xs text-neutral-400 tracking-wide whitespace-nowrap">
                  {item.period}
                </span>
              </div>

              <p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">
                {item.company}
              </p>

              <ul className="space-y-1.5">
                {item.description.map((d, j) => (
                  <li key={j} className="text-sm text-neutral-400 leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  )
}