'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Soluciones',
    href: '/soluciones',
    children: [
      { label: 'Telemedicina 24/7', href: '/soluciones' },
      { label: 'Salud Mental', href: '/soluciones' },
      { label: 'Sala de Espera Virtual', href: '/soluciones' },
      { label: 'Tótems', href: '/soluciones' },
    ],
  },
  {
    label: 'Sectores',
    href: '/sectores/municipios',
    children: [
      { label: 'Municipios', href: '/sectores/municipios' },
      { label: 'Obras Sociales', href: '/sectores/obras-sociales' },
      { label: 'Aseguradoras', href: '/sectores/aseguradoras' },
      { label: 'Empresas', href: '/sectores/empresas' },
    ],
  },
  { label: 'Casos de Éxito', href: '/casos-de-exito' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdownOpen(null)
  }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100/50'
          : 'bg-white/70 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-105">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" className="drop-shadow-sm">
                <line x1="12" y1="4" x2="12" y2="20" />
                <line x1="4" y1="12" x2="20" y2="12" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-lg sm:text-xl text-secondary tracking-tight block">doctor</span>
              <span className="font-semibold italic text-xs sm:text-sm text-primary -mt-0.5 block">virtual</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary-light'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>
                {item.children && dropdownOpen === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white border border-gray-100 shadow-lg shadow-gray-200/50 py-2 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-primary-light/50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="ml-4">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Solicitá una demo
              </Link>
            </div>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-50 p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-primary-light'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? 'text-primary bg-primary-light'
                            : 'text-gray-500 hover:text-primary hover:bg-gray-50'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-base font-semibold text-white shadow-md"
            >
              Solicitá una demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
