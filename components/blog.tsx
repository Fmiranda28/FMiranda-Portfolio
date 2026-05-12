import Image from "next/image"

const posts = [
  {
    title: "Building Scalable Web Applications",
    date: "Jan 15, 2024",
    description: "Exploring modern architecture patterns and best practices for building applications that can handle millions of users.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
  },
  {
    title: "Leading Remote Teams",
    date: "Dec 8, 2023",
    description: "Lessons learned from managing distributed teams across different time zones and cultures.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    title: "Game Development Journey",
    date: "Nov 22, 2023",
    description: "My transition from web development to game development and the skills that transferred over.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=800&h=600&fit=crop",
  },
]

export function Blog() {
  return (
    <section id="blog" className="relative py-32 px-6 bg-neutral-50">
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/dots-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "300px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="text-xs text-neutral-400 uppercase tracking-widest mb-12">
          Blog
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-neutral-900 font-medium mt-2 mb-2 group-hover:text-neutral-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">
                {post.description}
              </p>
              <span className="text-xs text-neutral-400 uppercase tracking-wide mt-3">
                {post.date}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
