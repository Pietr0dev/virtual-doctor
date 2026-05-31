import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Doctor Virtual — Innovación y accesibilidad en salud digital',
    template: '%s | Doctor Virtual',
  },
  description:
    'Transformamos el acceso a la salud pública y privada de más de 4 millones de personas. Plataforma de telemedicina white-label para municipios, obras sociales, prepagas, aseguradoras y empresas.',
  openGraph: {
    title: 'Doctor Virtual — Salud Digital',
    description:
      'Plataforma de telemedicina white-label para municipios, obras sociales, prepagas, aseguradoras y empresas.',
    url: 'https://doctorvirtual.ai',
    siteName: 'Doctor Virtual',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalOrganization',
      name: 'Doctor Virtual S.A.',
      description:
        'Plataforma de telemedicina white-label para municipios, obras sociales, prepagas, aseguradoras y empresas.',
      url: 'https://doctorvirtual.ai',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Córdoba 991, 1° piso',
        addressLocality: 'CABA',
        addressCountry: 'AR',
      },
    }),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
