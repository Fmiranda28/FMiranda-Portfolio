import Image from "next/image"
import Link from "next/link"

const posts = [
  {
    title: "Building Scalable Web Applications",
    date: "Jan 15, 2024",
    description: "Exploring modern architecture patterns and best practices for building applications that can handle millions of users. In this post, I dive deep into microservices, serverless functions, and database optimization techniques that I've learned over years of building enterprise-scale applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop",
    readTime: "8 min read",
  },

]

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Back button header */}
      <div className="fixed top-4 left-4 z-50">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full px-5 py-2.5 shadow-sm text-sm font-bold text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Portfolio
        </Link>
      </div>
      
      {/* Header */}
      <div className="relative pt-24 pb-16 px-6 overflow-hidden">
        {/* Dot pattern background */}
        <div 
          className="absolute top-0 right-0 w-1/2 h-full opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle, #c7d2e0 2.5px, transparent 2.5px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to left, black 0%, transparent 80%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 80%)",
          }}
        />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-neutral-900" />
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Journal</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-4 tracking-tight">
            My Blog
          </h1>
          
          {/* Subtitle with accent */}
          <p className="text-lg md:text-xl text-neutral-600 max-w-lg leading-relaxed">
            Where I share insights on <span className="text-neutral-900 font-medium">development</span>, <span className="text-neutral-900 font-medium">leadership</span>, and <span className="text-neutral-900 font-medium">technology</span>.
          </p>
        </div>
      </div>

      {/* Blog Posts - Full screen scroll */}
      <div className="snap-y snap-mandatory">
        {posts.map((post, index) => (
          <article 
            key={index} 
            className="h-screen snap-start snap-always flex items-center border-b border-neutral-100"
          >
            <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
                {post.title}
              </h2>

              {/* Image */}
              <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-neutral-100 mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Description */}
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                {post.description}
              </p>

              {/* Date */}
              <span className="text-sm text-neutral-400 uppercase tracking-wide">
                {post.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
