'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const posts = [

    {
      title: "Project Management Fundamentals Course Completion",
      date: "March 3, 2026",
      description:
        "Fernando Miranda completed a comprehensive Project Management Fundamentals course, gaining essential skills in project planning, execution, and leadership. The course covered key concepts such as project lifecycle, risk management, stakeholder communication, and team collaboration, equipping Fernando with the knowledge to effectively manage projects and lead teams to successful outcomes.",
      image: "/blog-images/FM-Certificate3.png",
    },

    {
      title: "Fernando Lands Job at CountPro",
      date: "February 10, 2026",
      description:
        "Fernando Miranda secured a position as a Web App Developer at CountPro, a company specializing in web solutions and digital services. In this role, Fernando is responsible for designing and developing responsive",
      image: "/blog-images/CountPro-Company.jpg",
    },


    {
      title: "Fernando Founds FSudoLab",
      date: "January 10, 2026",
      description:
        "Fernando Miranda founded FSudoLab, a development-focused initiative that provides web solutions and digital services for clients. The lab specializes in building responsive websites and modern web applications, delivering functional, user-friendly, and scalable systems tailored to client needs.",
      image: "/blog-images/FSudoLab.png",
    },

    {
      title: "Blockchain Essentials for Higher Education Workforce",
      date: "September 10, 2022",
      description:
        "Fernando Miranda completed the 'Blockchain Essentials for Higher Education Workforce' course, gaining foundational knowledge of blockchain technology, its applications in education, and how it can be leveraged to enhance learning experiences and administrative processes in higher education institutions.",
      image: "/blog-images/FM-Certificate1.png",
    },

    {
      title: "Fernando GDSC Membership at NU Baliwag",
      date: "September 10, 2022",
      description:
        "Fernando Miranda became a member of the Google Developer Student Club (GDSC) at NU Baliwag, where he engaged in various technical activities and events to enhance his skills and knowledge in software development.",
      image: "/blog-images/FM-Certificate2.png",
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

      {/* Mobile Menu Button */}
      {/* Removed - sidebar always visible */}

      <div className="flex min-h-screen">
        {/* Left Sidebar - Fixed on Desktop, Hidden on Mobile */}
        <div className={`hidden md:flex md:w-1/3 md:fixed md:left-0 md:top-0 md:h-screen p-6 md:p-12 flex-col justify-between bg-white`} style={{ paddingTop: "90px" }}>
          {/* Top Section */}
          <div className="hidden md:block">
            <h3 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-3 tracking-tight">
              Stories
            </h3>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Since the day I started coding
            </p>
          </div>

          {/* Bottom Section */}
          <div className="hidden md:block">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-neutral-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Journal</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
              My Blog
            </h1>
            
            {/* Subtitle with accent */}
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Where I share my personal insights on <span className="text-neutral-900 font-medium">development</span>, <span className="text-neutral-900 font-medium">leadership</span>, and <span className="text-neutral-900 font-medium">technology</span>.
            </p>
          </div>
        </div>

        {/* Right Side - Blog Posts (scrollable) */}
        <div className="w-full md:w-2/3 md:ml-auto p-6 md:p-12 overflow-y-auto md:h-screen md:pt-0">
          <div className="space-y-12">
            {posts.map((post, index) => (
              <article key={index} className="border-b border-neutral-200 pb-12 md:pb-32 last:border-b-0 md:min-h-screen md:flex md:flex-col md:justify-center">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  {post.title}
                </h2>

                {/* Image */}
                <div 
                  className="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100 mb-6 cursor-pointer hover:opacity-90 transition-opacity"
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
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-4">
                  {post.description}
                </p>

                {/* Date */}
                <span className="text-sm md:text-base text-neutral-400 uppercase tracking-wide">
                  {post.date}
                </span>
              </article>
            ))}
          </div>
        </div>
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
