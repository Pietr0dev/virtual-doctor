'use client'

import { useState } from 'react'
import { testimonials } from '@/lib/data'

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-heavy text-3xl sm:text-4xl text-secondary text-center">
          Casos de éxito
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Organizaciones que confían en nosotros y los resultados que logramos juntos.
        </p>
        <div className="mt-12 max-w-3xl mx-auto relative">
          <div className="bg-cream rounded-2xl p-6 sm:p-12 text-center">
            <svg className="mx-auto mb-6 text-primary/30" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>
            <blockquote className="text-base sm:text-xl text-gray-700 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <div className="font-bold text-secondary">{t.client}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors shrink-0"
              aria-label="Anterior"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M10 3l-5 5 5 5" />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current ? 'w-8 h-2.5 bg-primary' : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-primary hover:text-primary transition-colors shrink-0"
              aria-label="Siguiente"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
