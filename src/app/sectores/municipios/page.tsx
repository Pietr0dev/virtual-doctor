import Link from 'next/link'
import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Municipios',
  description:
    'Llevamos salud digital a comunidades cercanas con tótems de atención, telemedicina y campañas de prevención.',
}

const highlights = [
  'Acceso a salud en comunidades alejadas',
  'Reducción de tiempos de espera',
  'Campañas de prevención digitales',
  'Tótems en barrios y espacios públicos',
]

const municipalities = [
  'Almirante Brown', 'Tres de Febrero', 'San Vicente', 'Ezeiza', 'Cañuelas',
  'Mar del Plata', 'Quilmes', 'Bahía Blanca', 'Olavarría', 'Pinamar',
  'Chivilcoy', 'Bell Ville', 'Malvinas Argentinas', 'General Villegas', 'Pehuajó',
  'Lanús', 'Lomas de Zamora', 'Tres Arroyos', 'Chacabuco', 'Escobar',
  'Florencio Varela',
]

export default function MunicipiosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Municipios</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Llevamos salud digital a comunidades cercanas con tótems de atención, telemedicina y
            campañas de prevención. Más de 20 municipios ya confían en nosotros.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-heavy text-3xl text-secondary">Propuesta de valor</h2>
              <ul className="mt-8 space-y-4">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0 mt-0.5">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-cream rounded-2xl p-8">
              <h3 className="text-lg font-bold text-secondary mb-4">Municipios activos</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {municipalities.map((m) => (
                  <div key={m} className="text-sm text-gray-600 bg-white rounded-lg px-3 py-2 border border-gray-100">
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heavy text-3xl text-secondary text-center">
          ¿Por qué Doctor Virtual?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Implementación rápida', desc: 'En semanas, no meses. Sin obra civil ni grandes inversiones.' },
              { title: 'Tótems en terreno', desc: 'Unidades físicas de atención en barrios, plazas y centros comunitarios.' },
              { title: 'Cobertura total', desc: 'Llegá a cada rincón del municipio con atención médica de calidad.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
