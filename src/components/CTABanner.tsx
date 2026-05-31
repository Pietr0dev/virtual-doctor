import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-heavy text-3xl sm:text-4xl text-white">
          Innovemos juntos el acceso a la salud
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          Transformá la experiencia de salud de tu comunidad con una plataforma probada por más de 4
          millones de personas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary hover:bg-gray-100 transition-colors shadow-lg"
          >
            Solicité una demo
          </Link>
          <Link
            href="/casos-de-exito"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Ver casos de éxito
          </Link>
        </div>
      </div>
    </section>
  )
}
