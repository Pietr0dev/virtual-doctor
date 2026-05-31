import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://doctorvirtual.ai'

  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/soluciones`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/sectores/municipios`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sectores/obras-sociales`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sectores/aseguradoras`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/sectores/empresas`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/casos-de-exito`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/nosotros`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/contacto`, changeFrequency: 'monthly', priority: 0.7 },
  ]
}
