'use client'

import { useEffect, useRef } from 'react'
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

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean)
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-14">
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
            className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
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

        <div className="grid gap-8 lg:grid-cols-2">
          {solutions.map((solution, i) => {
            const Icon = solutionIcons[i]
            return (
              <div
                key={solution.title}
                ref={(el) => { if (el) cardsRef.current[i] = el }}
                className="group flex flex-col sm:flex-row rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden bg-secondary">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <Icon size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center sm:hidden">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">
                      {solution.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-1.5">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-xs text-gray-500"
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
