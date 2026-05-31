'use client'

import { useState } from 'react'
import { Star, Users, Clock, Activity, Building2, MapPin } from 'lucide-react'

const stats = [
  { value: '4.8', unit: null, suffix: '/5', icon: Star, label: 'Valoración de pacientes', iconBg: 'bg-amber-400/20', iconColor: 'text-amber-400' },
  { value: '4', unit: 'millones', suffix: '+', icon: Users, label: 'Personas alcanzadas', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
  { value: '3', unit: 'min', suffix: '', icon: Clock, label: 'Tiempo promedio de espera', iconBg: 'bg-accent/20', iconColor: 'text-accent' },
  { value: '92', unit: '%', suffix: '', icon: Activity, label: 'Satisfacción de pacientes', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
  { value: '25', unit: null, suffix: '+', icon: MapPin, label: 'Municipios activos', iconBg: 'bg-accent/20', iconColor: 'text-accent' },
  { value: '10', unit: null, suffix: '+', icon: Building2, label: 'Obras sociales asociadas', iconBg: 'bg-primary/20', iconColor: 'text-primary' },
]

export default function StatsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Datos que nos <span className="text-primary">respaldan</span>
        </h2>
        <p className="mt-3 text-base text-gray-400 max-w-lg mx-auto">
          Resultados que hablan por sí solos. Conocé el impacto de nuestra plataforma.
        </p>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10"
                style={{
                  transform: hoveredIndex === i ? 'translateY(-7px)' : 'translateY(0)',
                  boxShadow: hoveredIndex === i ? '0 20px 40px rgba(0,0,0,0.28)' : 'none',
                  transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s',
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon size={22} className={stat.iconColor} />
                </div>
                <div className="flex items-baseline justify-center gap-0.5">
                  <span
                    className="font-extrabold text-white"
                    style={{ fontSize: '38px', letterSpacing: '-1px', lineHeight: 1 }}
                  >
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span
                      className="font-semibold text-gray-400"
                      style={{ fontSize: stat.label === 'Valoración de pacientes' ? '20px' : '38px', letterSpacing: '-1px', lineHeight: 1 }}
                    >
                      {stat.suffix}
                    </span>
                  )}
                </div>
                {stat.unit && (
                  <div
                    className="text-gray-400 font-medium mt-0.5 text-center"
                    style={{ fontSize: '24px', lineHeight: 1.1 }}
                  >
                    {stat.unit}
                  </div>
                )}
                <div
                  className="text-gray-500 mt-2 leading-tight text-center"
                  style={{ fontSize: '11.5px' }}
                >
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10">
          <div className="inline-flex items-center gap-3 bg-white/5 rounded-2xl border border-white/10 px-6 py-4"
            style={{
              transform: hoveredIndex === -1 ? 'translateY(-7px)' : 'translateY(0)',
              boxShadow: hoveredIndex === -1 ? '0 20px 40px rgba(0,0,0,0.28)' : 'none',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            onMouseEnter={() => setHoveredIndex(-1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="font-extrabold text-white"
              style={{ fontSize: '38px', letterSpacing: '-1px', lineHeight: 1 }}
            >
              +40
            </div>
            <div
              className="text-gray-500 leading-tight text-left"
              style={{ fontSize: '11.5px' }}
            >
              Organizaciones confían<br />en nosotros
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
