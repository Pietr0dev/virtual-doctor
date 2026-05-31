import Link from 'next/link'
import ClientLogos from '@/components/ClientLogos'
import MetricsBar from '@/components/MetricsBar'
import Differentiators from '@/components/Differentiators'
import SolutionsGrid from '@/components/SolutionsGrid'
import SectorsGrid from '@/components/SectorsGrid'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-cream to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-40 right-40 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-heavy text-4xl sm:text-5xl lg:text-6xl text-secondary leading-tight">
              Innovación y accesibilidad en salud digital
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
              Transformamos el acceso a la salud pública y privada de más de{' '}
              <span className="font-semibold text-primary">4 millones de personas</span> a través de
              nuestra plataforma de telemedicina white-label.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
              >
                Solicité una demo
              </Link>
              <Link
                href="/casos-de-exito"
                className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-8 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-heavy text-3xl sm:text-4xl text-secondary">¿Quiénes somos?</h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Somos una empresa argentina de salud digital que moderniza el acceso al sistema de salud
              público y privado. A través de nuestra plataforma de telemedicina white-label, más de 40
              organizaciones —municipios, obras sociales, prepagas, aseguradoras y empresas— brindan
              atención médica de calidad a sus comunidades.
            </p>
            <Link
              href="/nosotros"
              className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
            >
              Conocenos
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 3l5 5-5 5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Differentiators />

      <MetricsBar />

      <SolutionsGrid />

      <SectorsGrid />

      <TestimonialsCarousel />

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-heavy text-3xl sm:text-4xl text-secondary">
              Especialidades médicas
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Acceso a más de 12 especialidades médicas disponibles 24/7 vía videollamada.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Clínica médica',
              'Pediatría',
              'Ginecología',
              'Dermatología',
              'Salud mental',
              'Nutrición',
              'Cardiología',
              'Traumatología',
              'Oftalmología',
              'Neurología',
              'Endocrinología',
              'Neumonología',
            ].map((specialty) => (
              <div
                key={specialty}
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-sm border border-gray-100"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-medium text-gray-700">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
