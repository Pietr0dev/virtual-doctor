import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Obras Sociales y Prepagas',
  description:
    'Optimizá prestaciones con resolución del 85% de casos en videollamada, historia clínica digital y vademécum online.',
}

const highlights = [
  '85% de casos resueltos en videollamada',
  'Historia clínica digital integrada',
  'Vademécum online',
  'Reducción de costos operativos',
]

const clientLogos = ['OBSBA', 'Unión Personal', 'OSEP', 'OSEF', 'IOSPER', 'OSPERYH']

export default function ObrasSocialesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Obras Sociales y Prepagas</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Optimizá prestaciones con resolución del 85% de casos en videollamada, historia clínica
            digital y vademécum online.
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
              <h3 className="text-lg font-bold text-secondary mb-4">Clientes destacados</h3>
              <div className="space-y-3">
                {clientLogos.map((name) => (
                  <div key={name} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-700">{name}</span>
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
            Beneficios para tu obra social
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Ahorro de prestaciones', desc: 'Resolvé el 85% de las consultas por videollamada, reduciendo costos operativos.' },
              { title: 'Marca blanca', desc: 'La plataforma se entrega con tu identidad. Tus afiliados ven tu marca, no la nuestra.' },
              { title: 'Integración total', desc: 'Nos integramos con tus sistemas de padrones, historia clínica y vademécum.' },
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
