import type { Metadata } from 'next'
import CTABanner from '@/components/CTABanner'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Solicitá una demo o comunicate con nuestro equipo comercial. Transformemos juntos el acceso a la salud.',
}

export default function ContactoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-white via-cream to-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-heavy text-4xl sm:text-5xl text-secondary">Contacto</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Completá el formulario y nos pondremos en contacto a la brevedad para contarte cómo
            Doctor Virtual puede transformar el acceso a la salud de tu organización.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ContactForm />
            <div className="space-y-8">
              <div>
                <h2 className="text-heavy text-2xl text-secondary">Información de contacto</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0 mt-0.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" />
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Email comercial</p>
                      <a href="mailto:administracion@itconsultsa.com" className="text-sm text-gray-500 hover:text-primary transition-colors">
                        administracion@itconsultsa.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary shrink-0 mt-0.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Dirección</p>
                      <p className="text-sm text-gray-500">
                        Av. Córdoba 991, 1° piso
                        <br />
                        CABA, Argentina
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-heavy text-2xl text-secondary">Redes sociales</h2>
                <div className="mt-4 flex gap-4">
                  <a
                    href="https://instagram.com/doctorvirtual.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cream px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    @doctorvirtual.ai
                  </a>
                  <a
                    href="https://linkedin.com/company/doctorvirtual"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cream px-5 py-3 text-sm font-medium text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Doctor Virtual
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-cream p-6">
                <h3 className="text-lg font-bold text-secondary mb-2">Brochure institucional</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Descargá nuestro brochure en PDF con información completa de la plataforma.
                </p>
                <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Descargar brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
