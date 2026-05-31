import type { Metadata } from 'next'
import Image from 'next/image'
import { solutions } from '@/lib/data'
import CTABanner from '@/components/CTABanner'

export const metadata: Metadata = {
  title: 'Soluciones',
  description:
    'Conocé nuestra plataforma de telemedicina: telemedicina 24/7, sala de espera virtual, salud mental y consultorios virtuales (tótems). Todo white-label.',
}

export default function SolucionesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary text-center">
            Soluciones
          </h1>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Una plataforma integral de telemedicina que se adapta a las necesidades de cada
            organización. Todo con tu marca, potenciado por nuestra tecnología.
          </p>
        </div>
      </section>

      {solutions.map((solution, i) => (
        <section
          key={solution.title}
          className={`py-16 sm:py-20 ${i % 2 === 0 ? 'bg-white' : 'bg-cream'}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className={`grid gap-12 items-center ${i % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <h2 className="text-heavy text-3xl sm:text-4xl text-secondary">{solution.title}</h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">{solution.description}</p>
                <ul className="mt-6 space-y-3">
                  {solution.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0 mt-0.5">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative overflow-hidden rounded-2xl h-64 sm:h-80 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Image
                  src={solution.image!}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-heavy text-3xl sm:text-4xl text-secondary text-center">
            Plataforma White-Label
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Todo el sistema se entrega con el branding de tu organización. Tu logo, tus colores, tu
            dominio. Doctor Virtual aporta la tecnología y la red de profesionales.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: 'Personalización total', desc: 'Logo, colores, dominio y contenidos propios.' },
              { title: 'Experiencia transparente', desc: 'Tus usuarios ven tu marca, no la nuestra.' },
              { title: 'Tecnología probada', desc: 'Más de 4M de personas ya usan la plataforma.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-cream p-6 text-center">
                <div className="text-lg font-bold text-secondary">{item.title}</div>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
