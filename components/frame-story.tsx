"use client"

import { useEffect, useRef, useState } from "react"

const FRAME_COUNT = 143
const FIRST_STOP = 36
const FINAL_MESSAGE_FRAME = 134

function framePath(frame: number) {
  return `/images/FRAMES/frame_${String(frame).padStart(3, "0")}.webp`
}

interface FrameStoryProps {
  onComplete: () => void
}

export function FrameStory({ onComplete }: FrameStoryProps) {
  const [frame, setFrame] = useState(1)
  const [stage, setStage] = useState(0)
  const [isRevealing, setIsRevealing] = useState(false)
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef(1)
  const stageRef = useRef(0)
  const isAnimatingRef = useRef(false)
  const animationFrameRef = useRef(0)
  const finalRevealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const heroCompleteTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const touchStartRef = useRef(0)
  const isLoadingRef = useRef(true)

  useEffect(() => {
    const images = Array.from({ length: FRAME_COUNT }, (_, index) => {
      const image = new Image()
      return image
    })

    const hasLoadedCookie = document.cookie.split("; ").some((cookie) => cookie.startsWith("frame-assets-loaded="))
    if (hasLoadedCookie) {
      isLoadingRef.current = false
      setIsLoading(false)
    }

    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")

    const drawFrame = (frameNumber: number) => {
      const image = images[frameNumber - 1]
      if (!canvas || !context || !image?.complete || !image.naturalWidth) return

      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = window.devicePixelRatio || 1
      canvas.width = bounds.width * pixelRatio
      canvas.height = bounds.height * pixelRatio
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const scale = Math.max(bounds.width / image.naturalWidth, bounds.height / image.naturalHeight)
      const width = image.naturalWidth * scale
      const height = image.naturalHeight * scale
      context.clearRect(0, 0, bounds.width, bounds.height)
      context.drawImage(image, (bounds.width - width) / 2, (bounds.height - height) / 2, width, height)
      setIsCanvasReady(true)
    }

    let loadedAssets = 0
    const loadedIndexes = new Set<number>()
    const markAssetLoaded = (index: number) => {
      if (loadedIndexes.has(index)) return
      loadedIndexes.add(index)
      loadedAssets += 1
      if (!hasLoadedCookie) {
        setLoadingProgress(Math.round((loadedAssets / FRAME_COUNT) * 100))
      }
      if (loadedAssets === FRAME_COUNT) {
        document.cookie = "frame-assets-loaded=1; max-age=31536000; path=/; SameSite=Lax"
        isLoadingRef.current = false
        setIsLoading(false)
      }
    }

    images.forEach((image, index) => {
      image.onload = () => {
        markAssetLoaded(index)
        if (index + 1 === frameRef.current) drawFrame(index + 1)
      }
      image.onerror = () => markAssetLoaded(index)
      image.src = framePath(index + 1)
    })

    const handleResize = () => drawFrame(frameRef.current)
    window.addEventListener("resize", handleResize)

    const animateTo = (targetFrame: number, duration: number, easeOut = true) => {
      isAnimatingRef.current = true
      const startFrame = frameRef.current
      const startTime = performance.now()

      const tick = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration)
        const easedProgress = easeOut ? 1 - Math.pow(1 - progress, 3) : progress
        const nextFrame = Math.round(startFrame + (targetFrame - startFrame) * easedProgress)
        frameRef.current = nextFrame
        setFrame(nextFrame)
        drawFrame(nextFrame)

        if (progress < 1 || !images[targetFrame - 1]?.complete) {
          animationFrameRef.current = window.requestAnimationFrame(tick)
          return
        }

        frameRef.current = targetFrame
        setFrame(targetFrame)
        isAnimatingRef.current = false
        stageRef.current = targetFrame === FIRST_STOP ? 1 : 2
        setStage(targetFrame === FIRST_STOP ? 1 : 2)
        if (targetFrame === FRAME_COUNT) {
          finalRevealTimeoutRef.current = setTimeout(() => {
            setIsRevealing(true)
            heroCompleteTimeoutRef.current = setTimeout(onComplete, 1000)
          }, 1000)
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(tick)
    }

    const advanceSequence = () => {
      if (isLoadingRef.current || isAnimatingRef.current || stageRef.current === 2) return

      if (stageRef.current === 0) {
        animateTo(FIRST_STOP, 2200, false)
      } else {
        animateTo(FRAME_COUNT, 6000, false)
      }
    }

    const handleWheel = (event: WheelEvent) => {
      if (stageRef.current === 2) return
      event.preventDefault()
      advanceSequence()
    }

    const handleTouchStart = (event: TouchEvent) => {
      touchStartRef.current = event.touches[0]?.clientY ?? 0
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isLoadingRef.current || stageRef.current !== 2) event.preventDefault()
    }

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEnd = event.changedTouches[0]?.clientY ?? touchStartRef.current
      if (touchStartRef.current - touchEnd > 24) advanceSequence()
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    window.addEventListener("touchstart", handleTouchStart, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current)
      if (finalRevealTimeoutRef.current) clearTimeout(finalRevealTimeoutRef.current)
      if (heroCompleteTimeoutRef.current) clearTimeout(heroCompleteTimeoutRef.current)
      window.removeEventListener("wheel", handleWheel)
      window.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
      window.removeEventListener("resize", handleResize)
      images.forEach((image) => {
        image.src = ""
      })
    }
  }, [])

  const introTextProgress = Math.min(1, Math.max(0, (frame - 1) / 28))
  const insideTextProgress = Math.min(1, Math.max(0, (frame - FIRST_STOP) / 28))

  return (
    <section
      aria-label="Portfolio introduction"
      className={`fixed inset-0 z-[60] flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950 transition-opacity duration-1000 ease-out ${
        isRevealing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={framePath(1)}
        alt="Fernando Miranda portfolio sequence"
        className={`absolute h-full w-full object-cover transition-opacity duration-150 ${isCanvasReady ? "opacity-0" : "opacity-100"}`}
        fetchPriority="high"
        decoding="async"
      />
      <canvas ref={canvasRef} aria-hidden="true" className="relative h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.38),transparent_30%,rgba(0,0,0,0.22))]" />

      {isLoading && (
        <div className="absolute inset-0 z-[70] flex flex-col items-center justify-center gap-5 bg-neutral-950 px-6 text-white">
          <p className="text-xs uppercase tracking-[0.24em] text-white/60">Preparing the sequence</p>
          <div className="h-px w-48 bg-white/20 sm:w-64">
            <div className="h-full bg-white transition-[width] duration-200" style={{ width: `${loadingProgress}%` }} />
          </div>
          <p className="font-mono text-xs tabular-nums text-white/80">{loadingProgress}%</p>
        </div>
      )}

      <div
        className="absolute bottom-20 left-4 max-w-[min(82vw,32rem)] text-neutral-500 md:bottom-auto md:left-8 md:top-16 md:text-neutral-600 lg:left-12 lg:top-24"
        style={{
          opacity: 1 - introTextProgress,
          transform: `translateY(${-introTextProgress * 48}px)`,
          willChange: "opacity, transform",
        }}
      >
        <h1 className="text-5xl font-light leading-[0.94] tracking-[-0.04em] sm:text-6xl md:text-7xl md:font-black lg:text-8xl">
          Hi, I&apos;m
          <br />
          Fernando Miranda
        </h1>
      </div>
      <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/70 md:bottom-10 md:left-8">
        <span className="h-px w-8 bg-white/60" />
        <span>{stage === 0 ? "Scroll to begin" : stage === 1 ? "Scroll to continue" : "Welcome"}</span>
      </div>

      {frame >= FIRST_STOP && (
        <div
          className="absolute bottom-20 right-5 max-w-[min(82vw,32rem)] text-right text-4xl font-light leading-[0.94] tracking-[-0.04em] text-neutral-500 md:bottom-14 md:right-8 md:text-7xl md:font-black md:text-neutral-600 lg:text-8xl"
          style={{
            opacity: 1 - insideTextProgress,
            transform: `translateY(${-insideTextProgress * 48}px)`,
            willChange: "opacity, transform",
          }}
        >
          Curious what&apos;s inside?
        </div>
      )}

      {frame >= FINAL_MESSAGE_FRAME && (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-sans text-5xl font-light leading-[0.94] tracking-[0.12em] text-neutral-700 sm:text-6xl md:text-7xl lg:text-8xl">
          LOOK CLOSER
        </div>
      )}
    </section>
  )
}