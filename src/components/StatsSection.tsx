'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { metrics } from '@/lib/data'
import { Activity, Users, Clock, MapPin, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const icons = [Activity, Users, Clock, MapPin, Building2]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    const title = titleRef.current
    const progress = progressRef.current
    const cards = cardsRef.current

    if (!section || !track || !title || !progress || cards.length === 0) return

    const ctx = gsap.context(() => {
      const chars = title.textContent?.split('') || []
      title.textContent = ''
      const charSpans = chars.map((char) => {
        const span = document.createElement('span')
        span.textContent = char === ' ' ? '\u00A0' : char
        span.style.opacity = '0'
        span.style.display = 'inline-block'
        title.appendChild(span)
        return span
      })

      gsap.to(charSpans, {
        opacity: 1,
        duration: 0.05,
        stagger: 0.04,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      })

      const animation = gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progressVal = self.progress
            progress.style.transform = `scaleX(${progressVal})`
          },
        },
      })

      gsap.fromTo(
        cards,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
        }
      )

      ScrollTrigger.refresh()
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary">
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-primary to-accent origin-left scale-x-0"
        />
      </div>

      <div className="h-screen flex items-center">
        <div ref={trackRef} className="flex items-center gap-16 px-16 will-change-transform">
          <div className="shrink-0 w-[500px]">
            <h2
              ref={titleRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
            >
              Datos que nos respaldan
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-sm">
              Resultados que hablan por sí solos. Conocé el impacto de nuestra plataforma.
            </p>
          </div>

          {metrics.map((metric, i) => {
            const Icon = icons[i] || Activity
            return (
              <div
                key={metric.label}
                ref={(el) => { if (el) cardsRef.current[i] = el }}
                className="shrink-0 w-72 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <Icon size={24} className="text-primary" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">{metric.label}</div>
              </div>
            )
          })}

          <div className="shrink-0 w-[300px] pl-8">
            <div className="text-6xl font-extrabold text-white/10">+40</div>
            <div className="mt-2 text-lg text-gray-500">Organizaciones confían en nosotros</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce">
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  )
}
