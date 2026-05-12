'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const posts = [
    {
      title: "Fernando Founds FSudoLab",
      date: "January 10, 2026",
      description:
        "Fernando Miranda founded FSudoLab, a development-focused initiative that provides web solutions and digital services for clients. The lab specializes in building responsive websites and modern web applications, delivering functional, user-friendly, and scalable systems tailored to client needs.",
      image: "/blog-images/FSudoLab.png",
    },

    {
      title: "Fernando Wins 2nd Runner-Up in Tagisan ng Talino",
      date: "June 18, 2022",
      description:
        "Fernando Miranda achieved 2nd Runner-Up in the Tagisan ng Talino 2022 competition at NU Baliwag by showcasing skills and expertise in website development. The competition highlighted creativity, technical problem-solving, and the ability to design and develop responsive, user-friendly, and innovative web applications.",
      image: "/blog-images/NU-TNT.jpg",
    },

    {
      title: "Fernando Wins 1st Runner-Up in Tagisan ng Talino",
      date: "February 5, 2020",
      description:
        "Fernando Miranda earned 1st Runner-Up in the Tagisan ng Talino 2020 competition at STI College Malolos for showcasing skills and knowledge in mobile app development. The competition highlighted creativity, problem-solving, and technical expertise in designing and developing innovative mobile applications.",
      image: "/blog-images/STI-TNT.jpg",
    },


]

export default function BlogPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
              <div 
                className="relative aspect-[21/9] overflow-hidden rounded-xl bg-neutral-100 mb-6 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(post.image)}
              >
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

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Enlarged blog image"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
