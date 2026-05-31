import { metrics } from '@/lib/data'

export default function MetricsBar() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl text-heavy text-primary">{metric.value}</div>
              <div className="mt-2 text-sm sm:text-base text-gray-300">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
