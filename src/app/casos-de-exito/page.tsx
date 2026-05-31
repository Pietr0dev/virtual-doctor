import type { Metadata } from 'next'
import { clients } from '@/lib/data'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Casos de Éxito',
  description:
    'Conocé cómo municipios, obras sociales, prepagas, aseguradoras y empresas transformaron el acceso a la salud con Doctor Virtual.',
}

const caseStudies = [
  {
    client: 'OBSBA',
    sector: 'Obra Social',
    problem: 'Necesitaban ampliar la capacidad de atención sin incrementar costos de infraestructura.',
    solution:
      'Implementación de plataforma de telemedicina white-label con atención 24/7 y múltiples especialidades.',
    results: ['+300% consultas diarias', '92% satisfacción de afiliados', '3 min tiempo de espera promedio'],
  },
  {
    client: 'Municipalidad de Almirante Brown',
    sector: 'Municipio',
    problem: 'Comunidades alejadas sin acceso a atención médica presencial.',
    solution:
      'Instalación de tótems de telemedicina en barrios y plataforma de consultas virtuales.',
    results: ['800+ consultas mensuales', 'Cobertura en 15 barrios', 'Reducción de derivaciones a hospitales'],
  },
  {
    client: 'Unión Personal',
    sector: 'Obra Social',
    problem: 'Alta demanda de consultas que saturada la línea telefónica y los centros de atención.',
    solution:
      'Plataforma white-label con branding propio integrada a sus sistemas de padrón.',
    results: ['65% de consultas resueltas sin derivación', 'Ahorro significativo en prestaciones', 'NPS +85'],
  },
  {
    client: 'Municipalidad de Escobar',
    sector: 'Municipio',
    problem: 'Falta de acceso a especialistas en zonas periféricas del partido.',
    solution:
      'Red de tótems de telemedicina en puntos estratégicos con especialidades variadas.',
    results: ['Atención en 8 localidades', 'Pediatría, ginecología y clínica disponibles', 'Alta adherencia vecinal'],
  },
  {
    client: 'Meridional Seguros',
    sector: 'Aseguradora',
    problem: 'Buscaban un beneficio innovador para fidelizar asegurados.',
    solution:
      'Incorporación de telemedicina 24/7 como beneficio exclusivo para asegurados.',
    results: ['Nuevo beneficio diferencial', 'Alta tasa de uso en primeros 6 meses', 'Mejora en retención de cartera'],
  },
  {
    client: 'OSEP',
    sector: 'Obra Social',
    problem: 'Afiliados en toda la provincia de Mendoza con acceso limitado a especialistas.',
    solution:
      'Plataforma de telemedicina multicanal con integración a la red de prestadores existente.',
    results: ['Cobertura provincial completa', 'Lista de espera reducida en 70%', 'Recetas digitales activas'],
  },
]

export default function CasosDeExitoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Casos de Éxito</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Conocé cómo organizaciones de todo el país transformaron el acceso a la salud con nuestra
            plataforma.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <article
                key={cs.client}
                className="rounded-2xl bg-cream overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-secondary">{cs.client}</h3>
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      {cs.sector}
                    </span>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Problema</h4>
                    <p className="text-sm text-gray-600">{cs.problem}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Solución</h4>
                    <p className="text-sm text-gray-600">{cs.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Resultados</h4>
                    <div className="flex flex-wrap gap-2">
                      {cs.results.map((r) => (
                        <span key={r} className="text-xs font-semibold text-white bg-primary rounded-full px-3 py-1">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heavy text-3xl text-secondary text-center">
            Todas las organizaciones que confían en nosotros
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {clients.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200"
              >
                {c.name}
                <span className="text-xs text-gray-400">({c.sector})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
