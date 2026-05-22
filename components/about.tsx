import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          About Me
        </p>
        
        <div>
          {/* Top Section: Image + First Text */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Image - Left Side */}
            <div className="md:col-span-1">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100 mb-3">
                <Image
                  src="/images/Miranda-Graduate.jpg"
                  alt="Fernando Miranda"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            
            {/* First Text Block - Right Side */}
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-light text-neutral-900 leading-relaxed">
                It started the way it always does — curiosity. A line of code, a page that responded, and suddenly the world felt like something you could shape. From that moment, I never stopped building.
              </h2>
            </div>
          </div>

          {/* Bottom Section: Full Width Text */}
          <div>
            <p className="text-neutral-500 leading-relaxed text-lg mb-6">
              Web platforms that scale, mobile apps that feel native, game systems that engage, hardware that bridges the physical and digital — I don't build in one lane. I thrive at the intersection of all of them.
            </p>
            <p className="text-neutral-500 leading-relaxed text-lg">
              But shipping great code was never the whole story. As my projects grew, so did my responsibilities. I started leading teams, distributing work, setting direction — making sure things actually landed on time, at a standard everyone could be proud of. The move from developer to team lead wasn't a pivot; it was a natural next step. Today, I build end-to-end — from the first architecture decision to the final user interaction. Every role I've taken on has added a new lens: engineer, leader, project manager, quality advocate. What drives me is simple — creating things that work beautifully and matter to the people using them.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}