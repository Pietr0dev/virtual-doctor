import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Aseguradoras',
  description:
    'Brindá un beneficio diferencial de telemedicina para tus asegurados, mejorando la fidelización y propuesta de valor.',
}

export default function AseguradorasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Aseguradoras</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Brindá un beneficio diferencial de telemedicina para tus asegurados, mejorando la
            fidelización y propuesta de valor.
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
                  'Beneficio diferencial para asegurados',
                  'Fidelización de cartera',
                  'Sin costo de infraestructura',
                  'Implementación rápida',
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
              <h3 className="text-lg font-bold text-secondary mb-4">Cliente destacado</h3>
              <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-5 border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-secondary">Meridional Seguros</div>
                  <p className="text-sm text-gray-500">Aseguradora líder que confía en Doctor Virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heavy text-3xl text-secondary text-center">
            Por qué sumar telemedicina a tu aseguradora
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Diferenciación competitiva', desc: 'Ofrecé un servicio de salud digital que pocas aseguradoras tienen.' },
              { title: 'Fidelización de clientes', desc: 'Aumentá la retención con un beneficio de alto valor percibido.' },
              { title: 'Sin inversión en TI', desc: 'Nosotros ponemos la tecnología. Vos ponés tu marca.' },
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
