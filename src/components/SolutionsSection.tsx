'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  IconVideo,
  IconDeviceTv,
  IconHeartHandshake,
  IconBuildingCommunity,
} from '@tabler/icons-react'
import { solutions } from '@/lib/data'

gsap.registerPlugin(ScrollTrigger)

const solutionIcons = [
  IconVideo,
  IconDeviceTv,
  IconHeartHandshake,
  IconBuildingCommunity,
]

const COLLAPSED = 62
const GAP = 8
const CONTENT_PX = 1104 // 1200 - 48*2
const EXPANDED = CONTENT_PX - 3 * COLLAPSED - 3 * GAP // ~894

export default function SolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-12">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              Nuestras soluciones
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-tight tracking-tight">
              Todo lo que necesitás
              <br />
              para tu salud digital
            </h2>
          </div>
          <Link
            href="/soluciones"
            className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group shrink-0"
          >
            Ver todas
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>

        <div
          className="flex gap-2 h-[480px]"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {solutions.slice(0, 4).map((solution, i) => {
            const Icon = solutionIcons[i]
            const isActive = activeIndex === i

            return (
              <div
                key={solution.title}
                className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out bg-secondary"
                style={{
                  flex: `0 0 ${isActive ? EXPANDED : COLLAPSED}px`,
                  height: 480,
                }}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between py-5 transition-opacity duration-300 ${
                    isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                  <span
                    className="text-[10px] font-semibold text-white/50 tracking-[2px] uppercase"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    {solution.title}
                  </span>
                </div>

                <div
                  className={`absolute inset-0 flex transition-opacity duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="relative w-[46%] h-full overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                  </div>

                  <div className="w-[54%] bg-secondary p-[26px_22px] flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-5">
                      {solution.description}
                    </p>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-center gap-2 text-xs text-gray-300"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="text-primary shrink-0"
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Ver todas las soluciones
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
