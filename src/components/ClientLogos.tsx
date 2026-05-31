'use client'

import { clients } from '@/lib/data'
import { useEffect, useRef } from 'react'

export default function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    let animationId: number
    let pos = 0
    const speed = 0.5

    const animate = () => {
      pos += speed
      if (pos >= el.scrollWidth / 2) {
        pos = 0
      }
      el.style.transform = `translateX(-${pos}px)`
      animationId = requestAnimationFrame(animate)
    }
    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="bg-cream py-10 sm:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Confían en nosotros
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex" ref={scrollRef}>
          {[...clients, ...clients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center justify-center shrink-0 w-40 sm:w-48 min-h-16 mx-4 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 px-4 py-3"
            >
              <span className="text-sm font-semibold text-gray-600 text-center leading-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
