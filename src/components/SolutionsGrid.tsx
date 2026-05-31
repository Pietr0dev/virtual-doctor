import Link from 'next/link'
import { solutions } from '@/lib/data'

export default function SolutionsGrid() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-heavy text-3xl sm:text-4xl text-secondary">Soluciones</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Una plataforma integral de telemedicina que se adapta a las necesidades de cada organización.
            </p>
          </div>
          <Link
            href="/soluciones"
            className="hidden sm:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
          >
            Ver todas
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-secondary">{solution.title}</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">{solution.description}</p>
              <ul className="mt-4 space-y-2">
                {solution.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 text-primary font-semibold"
          >
            Ver todas las soluciones
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 3l5 5-5 5" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
