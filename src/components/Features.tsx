
interface FeaturesProps {
  currentLang: string;
}

export function Features({ currentLang }: FeaturesProps) {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Primera sección */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
              alt="Mundo digital"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Alcance Global, Impacto Local</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Transformamos su presencia digital para que los viajeros encuentren su negocio durante la planificación de su viaje. 
              Nuestro enfoque especializado asegura que su empresa destaque entre la competencia, apareciendo en las búsquedas 
              de los turistas incluso antes de que lleguen a su destino.
            </p>
          </div>
        </div>

        {/* Segunda sección */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Hecho a tu medida</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Hemos identificado la vital importancia del sector turístico para los negocios en Costa Rica y Panamá. 
              Nuestro análisis detallado de cada nicho nos permite crear estrategias personalizadas que aseguran que 
              su establecimiento forme parte de los itinerarios de viaje antes de que los turistas lleguen al país.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Equipo trabajando"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Tercera sección */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Proceso de trabajo"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-white">Paso a paso</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Nuestro proceso comienza con una recopilación detallada de información sobre su negocio, incluyendo fotos 
              y detalles específicos. Dedicamos entre 2 y 6 semanas a analizar su situación y desarrollar una estrategia 
              digital personalizada que maximice su visibilidad online y atraiga a los viajeros adecuados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}