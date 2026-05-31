import Link from 'next/link'
import { sectors } from '@/lib/data'

export default function SectorsGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-heavy text-3xl sm:text-4xl text-secondary text-center">
          Sectores que atendemos
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Soluciones adaptadas a las necesidades específicas de cada tipo de organización.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectores/${sector.slug}`}
              className="group rounded-2xl bg-cream p-8 hover:bg-primary hover:text-white transition-all"
            >
              <h3 className="text-xl font-bold group-hover:text-white text-secondary transition-colors">
                {sector.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-colors">
                {sector.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-white transition-colors">
                Ver más
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 3l5 5-5 5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
