'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Star, Users, Clock, Activity, Building2, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '4.8', unit: null, suffix: '/5', icon: Star, label: 'Valoración de pacientes', iconBg: 'bg-amber-400/20', iconColor: 'text-amber-400' },
  { value: '4', unit: 'millones', suffix: '+', icon: Users, label: 'Personas alcanzadas', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
  { value: '3', unit: 'min', suffix: '', icon: Clock, label: 'Tiempo promedio de espera', iconBg: 'bg-accent/20', iconColor: 'text-accent' },
  { value: '92', unit: '%', suffix: '', icon: Activity, label: 'Satisfacción de pacientes', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
  { value: '25', unit: null, suffix: '+', icon: MapPin, label: 'Municipios activos', iconBg: 'bg-accent/20', iconColor: 'text-accent' },
  { value: '10', unit: null, suffix: '+', icon: Building2, label: 'Obras sociales asociadas', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
]

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

      gsap.to(track, {
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
            progress.style.transform = `scaleX(${self.progress})`
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
        <div ref={trackRef} className="flex items-center gap-10 px-16 will-change-transform">
          <div className="shrink-0 w-[420px]">
            <h2
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight"
            >
              Datos que nos respaldan
            </h2>
            <p className="mt-4 text-base text-gray-400 max-w-sm">
              Resultados que hablan por sí solos. Conocé el impacto de nuestra plataforma.
            </p>
          </div>

          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                ref={(el) => { if (el) cardsRef.current[i] = el }}
                className="shrink-0 w-[180px] bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 hover:bg-white/10"
                style={{
                  transform: hoveredIndex === i ? 'translateY(-7px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === i ? '0 20px 40px rgba(0,0,0,0.28)' : 'none',
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-9 h-9 rounded-lg ${stat.iconBg} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={stat.iconColor} />
                </div>
                <div className="flex items-baseline gap-0.5">
                  <span
                    className="font-extrabold text-white"
                    style={{ fontSize: '38px', letterSpacing: '-1px', lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span
                      className="font-semibold text-gray-400"
                      style={{ fontSize: stat.label === 'Valoración de pacientes' ? '20px' : '38px', letterSpacing: '-1px', lineHeight: 1 }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>
                {stat.unit && (
                  <div
                    className="text-gray-400 font-medium mt-0.5"
                    style={{ fontSize: '24px', lineHeight: 1.1 }}
                  >
                    {stat.unit}
                  </div>
                )}
                <div
                  className="text-gray-500 mt-2 leading-tight"
                  style={{ fontSize: '11.5px' }}
                >
                  {stat.label}
                </div>
              </div>
            )
          })}

          <div className="shrink-0 w-[180px] pl-4">
            <div
              className="font-extrabold text-white/10"
              style={{ fontSize: '38px', letterSpacing: '-1px', lineHeight: 1 }}
            >
              +40
            </div>
            <div
              className="text-gray-500 mt-1 leading-tight"
              style={{ fontSize: '11.5px' }}
            >
              Organizaciones confían en nosotros
            </div>
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
