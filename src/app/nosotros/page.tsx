import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conocé la historia de Doctor Virtual S.A., nuestra misión, visión y habilitaciones del Ministerio de Salud.',
}

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Nosotros</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            IT Consult S.A. ahora es <span className="font-semibold text-primary">Doctor Virtual S.A.</span>,
            una empresa argentina de salud digital que moderniza el acceso al sistema de salud público y privado.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-heavy text-3xl text-secondary">Nuestra historia</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nacimos como IT Consult S.A., una empresa de tecnología especializada en soluciones de
                salud digital. Con el lanzamiento de nuestra plataforma de telemedicina Doctor Virtual,
                y tras atender a más de 4 millones de personas, decidimos alinear nuestra identidad
                corporativa con nuestro producto estrella.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Hoy, Doctor Virtual S.A. es la compañía líder en telemedicina B2B en Argentina, con
                presencia en más de 20 municipios y 10 obras sociales y prepagas.
              </p>
            </div>
            <div className="bg-cream rounded-2xl p-8 sm:p-12">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-secondary mb-2">Misión</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Democratizar el acceso a la salud de calidad mediante tecnología accesible, segura y
                  personalizable.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-bold text-secondary mb-2">Visión</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ser la plataforma de telemedicina white-label líder en Latinoamérica, potenciando a
                  organizaciones públicas y privadas.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary mb-2">Valores</h3>
                <ul className="space-y-2">
                  {[
                    'Innovación centrada en las personas',
                    'Excelencia en la atención',
                    'Compromiso con la salud pública',
                    'Transparencia y confianza',
                  ].map((v) => (
                    <li key={v} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {v}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heavy text-3xl text-secondary text-center">
            Habilitaciones y certificaciones
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Cumplimos con todos los marcos regulatorios vigentes en Argentina para la prestación de
            servicios de telemedicina.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Habilitación Ministerio de Salud', desc: 'Plataforma habilitada para la prestación de telemedicina en todo el territorio argentino.' },
              { title: 'Ley de Telesalud', desc: 'Cumplimiento de la normativa nacional de telemedicina y protección de datos de salud.' },
              { title: 'Seguridad de la información', desc: 'Estándares de seguridad para el manejo de datos sensibles conforme Ley 25.326.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
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
