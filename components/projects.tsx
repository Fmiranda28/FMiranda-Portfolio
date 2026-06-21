"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const projects = [
  {
    title: "Morpolohikal na Estruktura",
    description:
      "A web application that explores Gen Z morpolohikal words and slang, helping users understand their meanings and usage.",
    images: [
      "/projects-images/Login-MPS.png",
      "/projects-images/Signup-MPS.png",
      "/projects-images/1-MPS.png",
      "/projects-images/2-MPS.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web App"],
  },
  {
    title: "Farmer Picks",
    description:
      "An e-commerce platform that connects consumers directly with local farmers for fresh and accessible agricultural products.",
    images: [
      "/projects-images/FP1.png",
      "/projects-images/FP2.png",
      "/projects-images/FP3.png",
      "/projects-images/FP4.png",
      "/projects-images/FP5.png",
    ],
    tags: ["React Native", "Expo", "Firebase", "E-commerce"],
  },
  {
    title: "Jentaime Water Station",
    description:
      "A B2B e-commerce platform for water station businesses, streamlining product ordering and customer transactions.",
    images: [
      "/projects-images/JW-1.png",
      "/projects-images/JW-2.png",
      "/projects-images/JW-3.png",
      "/projects-images/JW-4.png",
      "/projects-images/JW-5.png",
      "/projects-images/JW-6.png",
      "/projects-images/JW-7.png",
      "/projects-images/JW-8.png",
      "/projects-images/JW-9.png",
      "/projects-images/JW-10.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "E-commerce"],
  },
  {
    title: "Smart-Farming",
    description:
      "A smart farming system with web, mobile, and IoT integration that helps farmers monitor crops and manage agricultural operations efficiently.",
    images: [
      "/projects-images/SmartF-1.jpg",
      "/projects-images/SmartF-2.jpg",
      "/projects-images/SmartF-3.jpg",
      "/projects-images/SmartF-4.jpg",
      "/projects-images/SmartF-5.jpg",
      "/projects-images/SmartF-6.jpg",
      "/projects-images/SmartF-7.jpg",
      "/projects-images/SmartF-8.jpg",
      "/projects-images/SmartF-9.jpg",
      "/projects-images/SmartF-10.jpg",
    ],
    tags: ["IoT", "Web App", "Mobile App", "Smart Farming"],
  },
  {
    title: "Wander",
    description:
      "A travel and exploration application designed to help users discover destinations, plan trips, and enhance their travel experiences.",
    images: [
      "/projects-images/wander-1.png",
      "/projects-images/wander-2.png",
      "/projects-images/wander-3.png",
      "/projects-images/wander-4.png",
    ],
    tags: ["Next.js", "Travel App", "UI/UX", "Web App"],
  },
  {
    title: "Scrolly-Telling Web",
    description:
      "An interactive scrollytelling website that presents immersive visual narratives through animations and dynamic content transitions.",
    images: [
      "/projects-images/CITY/CITY1.png",
      "/projects-images/CITY/CITY2.png",
      "/projects-images/CITY/CITY3.png",
      "/projects-images/CITY/CITY4.png",
    ],
    tags: ["JavaScript", "GSAP", "Scrollytelling", "Interactive Web"],
  },
  {
    title: "Flappy Bird Clone",
    description:
      "A recreation of the classic Flappy Bird game featuring simple controls, obstacle mechanics, and retro-inspired gameplay.",
    images: ["/projects-images/BIRD-GAME/Flappy-Bird.png"],
    tags: ["Unity", "C#", "2D Game", "Game Development"],
  },
  {
    title: "Space Cinematic Website",
    description:
      "A scrollytelling website that takes users on a cinematic journey through space, featuring stunning visuals and engaging storytelling.",
    images: [
      "/projects-images/Dynamic-Space/Dyn1.png",
      "/projects-images/Dynamic-Space/Dyn2.png",
      "/projects-images/Dynamic-Space/Dyn3.png",
      "/projects-images/Dynamic-Space/Dyn4.png",
      "/projects-images/Dynamic-Space/Dyn5.png",
    ],
    tags: ["JavaScript", "Scrollytelling", "UI/UX", "GSAP", "Interactive Web"],
  },
  {
    title: "Soccer Multiplayer Game",
    description:
      "A multiplayer game where players compete against each other in soccer matches, featuring smooth controls and real-time gameplay.",
    images: [
      "/projects-images/SM-Game/SG-1.png",
      "/projects-images/SM-Game/SG-2.png",
      "/projects-images/SM-Game/SG-3.png",
      "/projects-images/SM-Game/SG-4.png",
      "/projects-images/SM-Game/SG-5.png",
    ],
    tags: ["TypeScript", "Node.js", "WebSocket"],
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [fading, setFading] = useState(false)

  const project = projects[currentIndex]
  const pad = (n: number) => String(n).padStart(2, "0")

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }, [project.images.length])

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    )
  }, [project.images.length])

  const changeProject = (newIndex: number) => {
    if (newIndex === currentIndex) return
    setFading(true)
    setTimeout(() => {
      setCurrentIndex(newIndex)
      setCurrentImageIndex(0)
      setFading(false)
    }, 260)
  }

  useEffect(() => {
    if (lightboxOpen) return
    const id = setInterval(nextImage, 3500)
    return () => clearInterval(id)
  }, [nextImage, lightboxOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [nextImage, prevImage])

  useEffect(() => {
    const link = document.createElement("link")
    link.rel = "stylesheet"
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Sans:wght@300;400;500&display=swap"
    document.head.appendChild(link)
    return () => { document.head.removeChild(link) }
  }, [])

  return (
    <section
      id="projects"
      style={{
        background: "#ffffff",
        padding: "6rem 1.25rem",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        .pj-title { font-family: 'Cormorant Garamond', Georgia, serif; }

        .pj-card {
          transition: opacity .26s ease, transform .26s ease;
          /* Fixed card size — same for every project */
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e5e5e5;
          background: #fff;
          box-shadow: 0 2px 24px rgba(0,0,0,.06), 0 1px 4px rgba(0,0,0,.04);
        }
        .pj-card.out { opacity: 0; transform: translateY(8px); }

        /* Row layout */
        .pj-row {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .pj-row { flex-direction: row; }
          /* Both panels share the fixed card height — no stretching */
          .pj-img-panel {
            flex: 0 0 56%;
            aspect-ratio: unset !important;
            height: 480px;
          }
          .pj-info-panel {
            flex: 1 1 0;
            height: 480px;
          }
        }

        /* Image panel */
        .pj-img-panel {
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
          background: #f4f4f5;
          aspect-ratio: 16/9;
          min-height: 220px;
        }

        /* Info panel */
        .pj-info-panel {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(1.75rem, 4vw, 2.75rem);
          border-left: 1px solid #e5e5e5;
          overflow: hidden;
        }

        /* Image nav buttons */
        .pj-img-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(0,0,0,.12);
          background: rgba(255,255,255,.82);
          color: #111;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          font-size: 13px;
          backdrop-filter: blur(6px);
          transition: background .18s, border-color .18s, box-shadow .18s;
          box-shadow: 0 1px 6px rgba(0,0,0,.1);
        }
        .pj-img-btn:hover {
          background: #fff;
          border-color: rgba(0,0,0,.28);
          box-shadow: 0 2px 10px rgba(0,0,0,.15);
        }

        /* Tags */
        .pj-tag {
          font-size: .68rem;
          color: #555;
          padding: 5px 13px;
          border: 1px solid #d4d4d8;
          border-radius: 999px;
          cursor: default;
          letter-spacing: .04em;
          white-space: nowrap;
          transition: border-color .18s, color .18s, background .18s;
        }
        .pj-tag:hover { border-color: #18181b; color: #18181b; background: #fafafa; }

        /* Nav buttons */
        .pj-nav-btn {
          display: flex; align-items: center; gap: 9px;
          padding: 9px 20px 9px 14px;
          border-radius: 999px;
          border: 1px solid #d4d4d8;
          background: transparent;
          color: #71717a;
          cursor: pointer;
          font-size: .8rem;
          letter-spacing: .04em;
          transition: border-color .18s, color .18s, background .18s;
          font-family: 'DM Sans', sans-serif;
        }
        .pj-nav-btn.right { padding: 9px 14px 9px 20px; }
        .pj-nav-btn:hover { border-color: #18181b; color: #18181b; background: #fafafa; }

        /* Progress dots */
        .pj-dot {
          height: 3px; border-radius: 2px;
          border: none; cursor: pointer; padding: 0;
          transition: width .28s ease, background .28s ease;
        }

        /* Divider line */
        .pj-divider {
          width: 28px; height: 1px; background: #d4d4d8; margin-bottom: 1.25rem;
        }
      `}</style>

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* ── Section header ── */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem" }}>
          <h2
            className="pj-title"
            style={{
              color: "#18181b",
              fontWeight: 300,
              lineHeight: 1,
              fontSize: "clamp(3rem, 8vw, 6rem)",
              margin: 0,
            }}
          >
            Projects
          </h2>
          <span style={{ color: "#a1a1aa", fontSize: ".68rem", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "4px" }}>
            {pad(currentIndex + 1)}&nbsp;/&nbsp;{pad(projects.length)}
          </span>
        </div>

        {/* ── Card — fixed dimensions, same every project ── */}
        <div className={`pj-card${fading ? " out" : ""}`}>
          <div className="pj-row">

            {/* Image panel */}
            <div className="pj-img-panel">
              <Image
                src={project.images[currentImageIndex]}
                alt={`${project.title} — ${pad(currentImageIndex + 1)}`}
                fill
                style={{ objectFit: "cover", cursor: "zoom-in" }}
                onClick={() => setLightboxOpen(true)}
              />

              {project.images.length > 1 && (
                <>
                  <button className="pj-img-btn" style={{ left: "12px" }} onClick={prevImage} aria-label="Previous image">←</button>
                  <button className="pj-img-btn" style={{ right: "12px" }} onClick={nextImage} aria-label="Next image">→</button>

                  {/* Image dot strip */}
                  <div style={{ position: "absolute", bottom: "12px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "5px", zIndex: 10 }}>
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        className="pj-dot"
                        aria-label={`Image ${i + 1}`}
                        onClick={() => setCurrentImageIndex(i)}
                        style={{
                          width: i === currentImageIndex ? "20px" : "6px",
                          background: i === currentImageIndex ? "#18181b" : "rgba(0,0,0,.22)",
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Info panel */}
            <div className="pj-info-panel">
              <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

                {/* Top: category + title + description */}
                <div style={{ flex: 1, minHeight: 0 }}>
                  <p style={{
                    color: "#a1a1aa",
                    fontSize: ".62rem",
                    letterSpacing: ".22em",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                    margin: "0 0 1rem 0",
                  }}>
                    {project.tags[0]}
                  </p>

                  <h3
                    className="pj-title"
                    style={{
                      /* Fixed font size — same visual weight every project */
                      fontSize: "clamp(1.6rem, 2.8vw, 2.6rem)",
                      fontWeight: 300,
                      color: "#18181b",
                      lineHeight: 1.08,
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    {project.title}
                  </h3>

                  <div className="pj-divider" />

                  <p style={{
                    color: "#71717a",
                    fontSize: ".88rem",
                    lineHeight: 1.8,
                    margin: 0,
                    /* Clamp to fixed number of lines so all cards look equal */
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {project.description}
                  </p>
                </div>

                {/* Bottom: tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", paddingTop: "1.5rem" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="pj-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Project navigation ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem" }}>

          <button
            className="pj-nav-btn"
            onClick={() => changeProject((currentIndex - 1 + projects.length) % projects.length)}
            aria-label="Previous project"
          >
            <span>←</span>
            <span>Previous</span>
          </button>

          {/* Dot strip */}
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            {projects.map((_, i) => (
              <button
                key={i}
                className="pj-dot"
                aria-label={`Project ${i + 1}`}
                onClick={() => changeProject(i)}
                style={{
                  width: i === currentIndex ? "22px" : "6px",
                  background: i === currentIndex ? "#18181b" : "#d4d4d8",
                }}
              />
            ))}
          </div>

          <button
            className="pj-nav-btn right"
            onClick={() => changeProject((currentIndex + 1) % projects.length)}
            aria-label="Next project"
          >
            <span>Next</span>
            <span>→</span>
          </button>

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 50,
            background: "rgba(0,0,0,.88)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem",
          }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "rgba(255,255,255,.45)", fontSize: "2rem", cursor: "pointer", lineHeight: 1 }}
          >×</button>

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage() }}
                aria-label="Previous"
                style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "50%", color: "#fff", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}
              >←</button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage() }}
                aria-label="Next"
                style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "50%", color: "#fff", width: "42px", height: "42px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px" }}
              >→</button>
            </>
          )}

          <div
            style={{ position: "relative", width: "100%", maxWidth: "1100px", aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={project.images[currentImageIndex]} alt={project.title} fill style={{ objectFit: "contain" }} />
          </div>

          <p style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,.3)", fontSize: ".7rem", letterSpacing: ".12em", whiteSpace: "nowrap" }}>
            {pad(currentImageIndex + 1)} / {pad(project.images.length)}
          </p>
        </div>
      )}
    </section>
  )
}