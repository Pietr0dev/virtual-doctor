import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Empresas (Medicina Laboral)',
  description:
    'Cuidamos la salud de tus colaboradores con telemedicina laboral, certificados digitales y bienestar integral.',
}

export default function EmpresasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">
            Empresas <span className="text-primary">·</span> Medicina Laboral
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Cuidamos la salud de tus colaboradores con telemedicina laboral, certificados digitales y
            bienestar integral.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-heavy text-3xl text-secondary">Propuesta de valor</h2>
              <ul className="mt-8 space-y-4">
                {[
                  'Bienestar de colaboradores',
                  'Certificados médicos digitales',
                  'Fortalecimiento del clima laboral',
                  'Reducción de ausentismo',
                ].map((h) => (
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
                {[
                  { name: 'Club Gimnasia y Esgrima La Plata', desc: 'Club profesional de fútbol' },
                  { name: 'CAMINOA', desc: 'Concesionaria oficial' },
                ].map((client) => (
                  <div key={client.name} className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">{client.name}</div>
                      <p className="text-sm text-gray-500">{client.desc}</p>
                    </div>
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
            Beneficios para tu empresa
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Colaboradores más sanos', desc: 'Acceso a atención médica inmediata desde el celular.' },
              { title: 'Gestión digital', desc: 'Certificados médicos, recetas e historias clínicas digitales.' },
              { title: 'Clima laboral positivo', desc: 'Demostrá que te preocupás por la salud de tu equipo.' },
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
