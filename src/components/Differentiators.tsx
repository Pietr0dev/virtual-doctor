import { differentiators } from '@/lib/data'

export default function Differentiators() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-heavy text-3xl sm:text-4xl text-secondary text-center">
          Nuestros diferenciales
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item) => (
            <div key={item.title} className="group rounded-2xl bg-cream p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                {item.icon === 'white-label' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'specialties' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
                {item.icon === 'certification' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" />
                  </svg>
                )}
                {item.icon === 'integration' && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
