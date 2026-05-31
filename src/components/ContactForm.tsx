'use client'

import { useState, type FormEvent } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-primary/5 p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-secondary">¡Gracias por contactarnos!</h3>
        <p className="mt-3 text-gray-600">
          Recibimos tu consulta. Nos pondremos en contacto a la brevedad.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nombre completo *
          </label>
          <input
            id="name"
            type="text"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="organization" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Organización *
          </label>
          <input
            id="organization"
            type="text"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="Nombre de la organización"
          />
        </div>
      </div>

      <div>
        <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Sector *
        </label>
        <select
          id="sector"
          required
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
        >
          <option value="">Seleccioná un sector</option>
          <option value="municipio">Municipio</option>
          <option value="obra-social">Obra Social</option>
          <option value="prepaga">Prepaga</option>
          <option value="aseguradora">Aseguradora</option>
          <option value="empresa">Empresa</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="tu@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Teléfono
          </label>
          <input
            id="phone"
            type="tel"
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="+54 11 1234-5678"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mensaje *
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
          placeholder="Contanos cómo podemos ayudarte..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
      >
        Enviar consulta
      </button>
    </form>
  )
}
