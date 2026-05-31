export const siteConfig = {
  name: 'Doctor Virtual',
  tagline: 'Innovación y accesibilidad en salud digital',
  description:
    'Transformamos el acceso a la salud pública y privada de más de 4 millones de personas a través de nuestra plataforma de telemedicina white-label.',
  email: 'administracion@itconsultsa.com',
  phone: '',
  address: 'Av. Córdoba 991, 1° piso, CABA',
  domain: 'doctorvirtual.ai',
  social: {
    instagram: 'https://instagram.com/doctorvirtual.ai',
    linkedin: 'https://linkedin.com/company/doctorvirtual',
  },
}

export const clients = [
  { name: 'OBSBA', sector: 'Obra Social' },
  { name: 'Unión Personal', sector: 'Obra Social' },
  { name: 'OSEP', sector: 'Obra Social' },
  { name: 'OSEF', sector: 'Obra Social' },
  { name: 'IOSPER', sector: 'Obra Social' },
  { name: 'OSPERYH', sector: 'Obra Social' },
  { name: 'Municipalidad de Almirante Brown', sector: 'Municipio' },
  { name: 'San Vicente', sector: 'Municipio' },
  { name: 'Tres de Febrero', sector: 'Municipio' },
  { name: 'Ezeiza', sector: 'Municipio' },
  { name: 'Cañuelas', sector: 'Municipio' },
  { name: 'Mar del Plata', sector: 'Municipio' },
  { name: 'Quilmes', sector: 'Municipio' },
  { name: 'Bahía Blanca', sector: 'Municipio' },
  { name: 'Olavarría', sector: 'Municipio' },
  { name: 'Pinamar', sector: 'Municipio' },
  { name: 'Chivilcoy', sector: 'Municipio' },
  { name: 'Bell Ville', sector: 'Municipio' },
  { name: 'Malvinas Argentinas', sector: 'Municipio' },
  { name: 'General Villegas', sector: 'Municipio' },
  { name: 'Pehuajó', sector: 'Municipio' },
  { name: 'Lanús', sector: 'Municipio' },
  { name: 'Lomas de Zamora', sector: 'Municipio' },
  { name: 'Tres Arroyos', sector: 'Municipio' },
  { name: 'Chacabuco', sector: 'Municipio' },
  { name: 'Escobar', sector: 'Municipio' },
  { name: 'Florencio Varela', sector: 'Municipio' },
  { name: 'Meridional Seguros', sector: 'Aseguradora' },
  { name: 'CAMINOA', sector: 'Empresa' },
  { name: 'Club Gimnasia y Esgrima La Plata', sector: 'Empresa' },
]

export const metrics = [
  { value: '92%', label: 'Satisfacción de pacientes' },
  { value: '4M+', label: 'Personas alcanzadas' },
  { value: '3 min', label: 'Tiempo promedio de espera' },
  { value: '25+', label: 'Municipios activos' },
  { value: '10+', label: 'Obras sociales asociadas' },
]

export const solutions = [
  {
    title: 'Telemedicina 24/7',
    description:
      'Consultas médicas por videollamada con profesionales de múltiples especialidades, disponible los 365 días del año.',
    image: '/images/telemedicina-247.jpg',
    benefits: [
      'Atención clínica general',
      'Pediatría, ginecología, dermatología',
      'Recetas y certificados digitales',
      'Historia clínica digital',
    ],
  },
  {
    title: 'Sala de Espera Virtual',
    description:
      'Contenido audiovisual educativo sobre prevención que se reproduce mientras el paciente espera su atención.',
    image: '/images/sala-espera-virtual.jpg',
    benefits: [
      'Campañas de prevención',
      'Educación en salud',
      'Contenido personalizable',
      'Sin espera presencial',
    ],
  },
  {
    title: 'Programa de Salud Mental',
    description:
      'Primera escucha psicológica 24/7 con derivación asistida cuando se requiere atención especializada.',
    image: '/images/salud-mental.jpg',
    benefits: [
      'Contención emocional inmediata',
      'Primera escucha profesional',
      'Derivación asistida',
      'Seguimiento digital',
    ],
  },
  {
    title: 'Consultorios Virtuales (Tótems)',
    description:
      'Unidades físicas de atención médica virtual instaladas en espacios públicos para patologías leves.',
    image: '/images/totems.jpg',
    benefits: [
      'Acceso en lugares remotos',
      'Atención inmediata',
      'Bajo costo operativo',
      'Integración comunitaria',
    ],
  },
]

export const sectors = [
  {
    slug: 'municipios',
    title: 'Municipios',
    description:
      'Llevamos salud digital a comunidades cercanas con tótems de atención, telemedicina y campañas de prevención.',
    clients: clients.filter((c) => c.sector === 'Municipio'),
    highlights: [
      'Acceso a salud en comunidades alejadas',
      'Reducción de tiempos de espera',
      'Campañas de prevención digitales',
      'Tótems en barrios y espacios públicos',
    ],
  },
  {
    slug: 'obras-sociales',
    title: 'Obras Sociales y Prepagas',
    description:
      'Optimizamos prestaciones con resolución del 85% de casos en videollamada, historia clínica digital y vademécum online.',
    clients: [
      { name: 'OBSBA', sector: 'Obra Social' },
      { name: 'Unión Personal', sector: 'Obra Social' },
      { name: 'OSEP', sector: 'Obra Social' },
      { name: 'OSEF', sector: 'Obra Social' },
      { name: 'IOSPER', sector: 'Obra Social' },
      { name: 'OSPERYH', sector: 'Obra Social' },
    ],
    highlights: [
      '85% de casos resueltos en videollamada',
      'Historia clínica digital integrada',
      'Vademécum online',
      'Reducción de costos operativos',
    ],
  },
  {
    slug: 'aseguradoras',
    title: 'Aseguradoras',
    description:
      'Brindamos un beneficio diferencial de telemedicina para tus asegurados, mejorando la fidelización y propuesta de valor.',
    clients: clients.filter((c) => c.sector === 'Aseguradora'),
    highlights: [
      'Beneficio diferencial para asegurados',
      'Fidelización de cartera',
      'Sin costo de infraestructura',
      'Implementación rápida',
    ],
  },
  {
    slug: 'empresas',
    title: 'Empresas (Medicina Laboral)',
    description:
      'Cuidamos la salud de tus colaboradores con telemedicina laboral, certificados digitales y bienestar integral.',
    clients: clients.filter((c) => c.sector === 'Empresa'),
    highlights: [
      'Bienestar de colaboradores',
      'Certificados médicos digitales',
      'Fortalecimiento del clima laboral',
      'Reducción de ausentismo',
    ],
  },
]

export const testimonials = [
  {
    client: 'OBSBA',
    quote:
      'La implementación de Doctor Virtual nos permitió multiplicar nuestra capacidad de atención y mejorar significativamente la experiencia de nuestros afiliados.',
    role: 'Director de Sistemas',
  },
  {
    client: 'Municipalidad de Almirante Brown',
    quote:
      'Llevamos salud a cada rincón del municipio. Los vecinos ahora acceden a consultas médicas sin viajar largas distancias.',
    role: 'Secretario de Salud',
  },
  {
    client: 'Unión Personal',
    quote:
      'La plataforma white-label se adaptó perfectamente a nuestra identidad. Nuestros afiliados ni siquiera notan que la tecnología es de un tercero.',
    role: 'Gerente de Prestaciones',
  },
]

export const specialists = [
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
]

export const differentiators = [
  {
    title: 'Marca Blanca',
    description:
      'La plataforma se entrega 100% customizada con la identidad de tu organización. Tu logo, tus colores, tu dominio.',
    icon: 'white-label',
  },
  {
    title: 'Múltiples Especialidades',
    description:
      'Red de más de 12 especialidades médicas disponibles 24/7 vía videollamada.',
    icon: 'specialties',
  },
  {
    title: 'Habilitación Ministerio de Salud',
    description:
      'Plataforma que cumple con los marcos regulatorios vigentes en Argentina para telemedicina.',
    icon: 'certification',
  },
  {
    title: 'Integración e Interoperabilidad',
    description:
      'Nos integramos con tus sistemas existentes: padrones, historias clínicas, ERPs y sistemas de turnos.',
    icon: 'integration',
  },
]
