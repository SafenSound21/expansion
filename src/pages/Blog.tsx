import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { translations } from '../i18n/translations';
import { SmallContact } from '../components/SmallContact';

interface BlogProps {
  currentLang: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
}

export function Blog({ currentLang }: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = translations[currentLang as keyof typeof translations];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'La Importancia de una Página Web en el Turismo',
      excerpt: 'Por qué una presencia web profesional es crucial para el éxito en el sector turístico.',
      content: `En la era digital, una página web no es solo una opción, es una necesidad absoluta para cualquier negocio turístico. Aquí explicamos por qué:

      1. Primera Impresión
      El 93% de los viajeros comienzan su planificación online. Tu sitio web es tu primera oportunidad para cautivar a potenciales clientes.

      2. Disponibilidad 24/7
      Una web bien diseñada proporciona información y permite reservas en cualquier momento, desde cualquier lugar del mundo.

      3. Credibilidad
      Los turistas confían más en negocios con una presencia web profesional y actualizada.

      Elementos clave de una web turística exitosa:
      - Imágenes de alta calidad
      - Información clara y actualizada
      - Sistema de reservas integrado
      - Testimonios de clientes
      - Integración con redes sociales

      Los datos muestran que los negocios turísticos con una web profesional experimentan:
      - 50% más de reservas directas
      - 30% de reducción en costos de marketing
      - 40% de aumento en la satisfacción del cliente`,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      date: '5 de Marzo, 2024'
    },
    {
      id: 2,
      title: 'El Turismo en Costa Rica: Un Paraíso Digital',
      excerpt: 'Descubre cómo Costa Rica está aprovechando el mundo digital para potenciar su turismo.',
      content: `Costa Rica se ha convertido en un destino turístico de primer nivel, y la transformación digital ha jugado un papel fundamental en este éxito.

      El país ha sabido aprovechar las herramientas digitales para:

      1. Promoción de la biodiversidad
      Las redes sociales y sitios web especializados muestran la increíble variedad de flora y fauna del país, atrayendo a amantes de la naturaleza.

      2. Experiencias locales auténticas
      Las plataformas digitales permiten a los turistas descubrir y reservar experiencias únicas con guías locales, desde caminatas en la selva hasta clases de cocina tradicional.

      3. Sostenibilidad
      La presencia digital ayuda a promover el turismo sostenible, educando a los visitantes sobre prácticas responsables.

      Impacto en el sector:
      - Aumento del 35% en reservas online
      - Mayor visibilidad de negocios locales
      - Mejor distribución del turismo en diferentes regiones

      La digitalización ha permitido a Costa Rica mostrar su belleza al mundo y facilitar la planificación de viajes para los turistas.`,
      image: 'https://images.unsplash.com/photo-1518181835702-6eef8b4b2113?auto=format&fit=crop&q=80&w=800',
      date: '10 de Marzo, 2024'
    },
    {
      id: 3,
      title: 'Caso de Éxito: TutorLink',
      excerpt: 'Cómo ayudamos a TutorLink a transformar su presencia digital y aumentar su visibilidad.',
      content: `TutorLink es una plataforma educativa que conecta a estudiantes con tutores cualificados. Cuando se acercaron a nosotros, tenían una visión clara pero necesitaban ayuda para materializarla en el mundo digital.

      Nuestro enfoque se centró en tres áreas principales:
      
      1. Diseño intuitivo y accesible
      Creamos una interfaz que facilita la búsqueda y conexión con tutores, con un sistema de filtros avanzado y perfiles detallados.

      2. Optimización para motores de búsqueda
      Implementamos una estrategia SEO completa que resultó en un aumento del 150% en el tráfico orgánico en los primeros 6 meses.

      3. Rendimiento y velocidad
      Optimizamos la carga de la plataforma para garantizar una experiencia fluida, reduciendo el tiempo de carga en un 40%.

      Los resultados fueron excepcionales:
      - Aumento del 200% en registros de nuevos usuarios
      - Mejora del 70% en el tiempo de permanencia en la página
      - Incremento del 90% en las conversiones

      Este caso demuestra cómo una presencia digital bien ejecutada puede transformar un negocio.`,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      date: '15 de Marzo, 2024'
    },
    {
      id: 4,
      title: 'Cómo Planean su Viaje los Turistas a Panamá',
      excerpt: 'Un vistazo al proceso de planificación de viajes de los turistas modernos.',
      content: `El proceso de planificación de un viaje a Panamá ha evolucionado significativamente en la era digital. Veamos el recorrido típico de un turista:

      1. Investigación Inicial (2-3 meses antes)
      - Búsqueda de hoteles y alojamientos
      - Investigación de restaurantes locales
      - Exploración de actividades y atracciones
      - Lectura de blogs y reseñas de viajeros

      2. Planificación Detallada (1-2 meses antes)
      - Reserva de vuelos y alojamiento
      - Búsqueda de guías locales
      - Creación de itinerario preliminar
      - Investigación de transporte local

      3. Preparativos Finales (2-4 semanas antes)
      - Reserva de tours y actividades
      - Confirmación de reservas en restaurantes
      - Descarga de mapas y apps útiles
      - Búsqueda de consejos de último minuto

      Principales búsquedas:
      - Restaurantes panameños auténticos
      - Mejores playas de Panamá
      - Canal de Panamá tours
      - Guías locales certificados
      - Hoteles en Ciudad de Panamá

      Este proceso demuestra la importancia de tener una fuerte presencia digital para los negocios turísticos en Panamá.`,
      image: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&q=80&w=800',
      date: '1 de Marzo, 2024'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-12">{t.nav.blog}</h1>
        
        {selectedPost ? (
          <div className="relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-white bg-slate-800/50 p-2 rounded-lg hover:bg-slate-700/50 transition-colors z-10"
            >
              <X className="w-6 h-6" />
              <span className="sr-only">Cerrar</span>
            </button>
            <div className="bg-slate-800/50 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{selectedPost.title}</h2>
                  <p className="text-slate-400 mb-6">{selectedPost.date}</p>
                  <div className="prose prose-invert max-w-none">
                    {selectedPost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 text-slate-300">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-slate-800/50 p-2 rounded-lg hover:bg-slate-700/50 transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
              <span className="sr-only">Anterior</span>
            </button>
            
            <div
              className="bg-slate-800/50 rounded-xl p-8 cursor-pointer hover:bg-slate-700/50 transition-colors"
              onClick={() => setSelectedPost(blogPosts[currentIndex])}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[currentIndex].title}</h2>
                  <p className="text-slate-400 mb-6">{blogPosts[currentIndex].date}</p>
                  <p className="text-slate-300">{blogPosts[currentIndex].excerpt}</p>
                </div>
                <div>
                  <img
                    src={blogPosts[currentIndex].image}
                    alt={blogPosts[currentIndex].title}
                    className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-slate-800/50 p-2 rounded-lg hover:bg-slate-700/50 transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
              <span className="sr-only">Siguiente</span>
            </button>
          </div>
        )}
      </div>
      <SmallContact />
    </section>
  );
}