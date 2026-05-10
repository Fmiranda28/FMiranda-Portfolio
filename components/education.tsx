const education = [
  {
    degree: "Information Communication Technology",
    school: "STI College Malolos",
    year: "2018 - 2021",
  },
  {
    degree: "Bachelor of Science Information Technology",
    school: "National University - Baliwag",
    year: "2021 - 2026",
  },
]

export function Education() {
  return (
    <section id="education" className="py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Education
        </p>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <span className="text-sm text-neutral-400 md:w-32 shrink-0">
                {item.year}
              </span>
              <div>
                <h3 className="text-neutral-900 mb-1">{item.degree}</h3>
                <p className="text-sm text-neutral-500">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
