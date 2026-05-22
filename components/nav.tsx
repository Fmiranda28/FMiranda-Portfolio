"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const navItems = [
  { label: "ABOUT", href: "#about", isSection: true },
  { label: "SKILLS & ABILITIES", href: "#skills", isSection: true },
  { label: "EDUCATION", href: "#education", isSection: true },
  { label: "EXPERIENCE", href: "#experience", isSection: true },
  { label: "PROJECTS", href: "#projects", isSection: true },
  { label: "BLOG", href: "/blog", isSection: false, highlight: true },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const sections = navItems.filter(item => item.isSection).map(item => item.href.replace("#", ""))
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            return
          }
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-end md:justify-center px-4">
      {/* Desktop nav - centered pill shape */}
      <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full px-2 py-2 shadow-sm">
        {navItems.map((item) => {
          const isActive = item.isSection 
            ? activeSection === item.href.replace("#", "")
            : pathname === item.href
          
          return (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-bold tracking-wide px-4 py-2 rounded-full transition-all ${
                item.highlight 
                  ? "bg-neutral-900 text-white hover:bg-neutral-700" 
                  : isActive 
                    ? "bg-neutral-100 text-neutral-900" 
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
              }`}
            >
              {item.label}
            </a>
          )
        })}
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-full p-4 shadow-sm"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`w-full h-px bg-neutral-900 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-full h-px bg-neutral-900 transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-full h-px bg-neutral-900 transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = item.isSection 
                ? activeSection === item.href.replace("#", "")
                : pathname === item.href
              
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-bold tracking-wide px-4 py-2 rounded-full transition-all ${
                    item.highlight 
                      ? "bg-neutral-900 text-white text-center" 
                      : isActive 
                        ? "bg-neutral-100 text-neutral-900" 
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
