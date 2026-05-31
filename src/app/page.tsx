import Image from 'next/image'
import Link from 'next/link'
import { Shield, BarChart3, Users, Clock } from 'lucide-react'
import ClientLogos from '@/components/ClientLogos'
import StatsSection from '@/components/StatsSection'
import Differentiators from '@/components/Differentiators'
import SolutionsSection from '@/components/SolutionsSection'
import SectorsGrid from '@/components/SectorsGrid'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-white to-cream" />
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-20 right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-60 right-20 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-lighter px-4 py-1.5 text-sm font-medium text-primary mb-6">
                <Shield size={14} />
                <span>Plataforma white-label</span>
              </div>
              <h1 className="text-heavy text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-secondary leading-[1.08] tracking-tight">
                Innovación y accesibilidad{' '}
                <span className="text-primary">en salud digital</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-xl">
                Transformamos el acceso a la salud pública y privada de más de{' '}
                <span className="font-semibold text-gray-700">4 millones de personas</span> a
                través de nuestra plataforma de telemedicina white-label.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Solicité una demo
                </Link>
                <Link
                  href="/casos-de-exito"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Ver casos de éxito
                </Link>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
                {[
                  { icon: Clock, label: '3 min espera promedio' },
                  { icon: BarChart3, label: '92% satisfacción' },
                  { icon: Users, label: '4M+ pacientes' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium text-gray-600 leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <Image
                  src="/images/telemedicina-247.jpg"
                  alt="Plataforma de telemedicina Doctor Virtual"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg shadow-gray-200/50 p-5 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                    <Shield size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary">Habilitación MSAL</p>
                    <p className="text-xs text-gray-500">Ministerio de Salud</p>
                  </div>
                </div>
              </div>
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

      <StatsSection />

      <SolutionsSection />

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
