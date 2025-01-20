import { ClipboardList, Palette, Code2, Rocket, MessageCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "1. Consulta Inicial",
      description: "Conversamos sobre tu proyecto, objetivos y necesidades específicas para entender completamente tu visión."
    },
    {
      icon: <ClipboardList className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "2. Planificación",
      description: "Desarrollamos una estrategia detallada y un plan de acción personalizado para tu proyecto."
    },
    {
      icon: <Palette className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "3. Diseño",
      description: "Creamos mockups y prototipos interactivos para visualizar el resultado final antes de comenzar el desarrollo."
    },
    {
      icon: <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "4. Desarrollo",
      description: "Implementamos tu sitio web utilizando las últimas tecnologías y mejores prácticas del sector."
    },
    {
      icon: <Rocket className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "5. Lanzamiento",
      description: "Realizamos pruebas exhaustivas y optimizamos el rendimiento antes del lanzamiento oficial."
    }
  ];

  return (
    <section className="relative py-16 sm:py-32 overflow-hidden">

      <div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-slate-900"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234338ca' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-500/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-lg sm:text-xl text-indigo-200 max-w-3xl mx-auto">
            Un enfoque estructurado y transparente para llevar tu proyecto al éxito
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora vertical centrada para móvil */}
          <div className="absolute left-1/2 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-indigo-400/40 to-indigo-500/20" />

          <div className="space-y-16 sm:space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Versión móvil */}
                <div className="sm:hidden">
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      {/* Círculo con gradiente */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm"></div>
                      <div className="relative w-16 h-16 rounded-full bg-slate-900/90 flex items-center justify-center z-10 shadow-xl">
                        {step.icon}
                      </div>
                      {/* Punto de conexión */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500/50 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      </div>
                    </div>
                  </div>
                  <div className={`group px-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                      <div className="relative bg-slate-900/90 p-4 rounded-lg">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Versión desktop */}
                <div className={`hidden sm:flex sm:flex-row ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } items-center gap-8 md:gap-16`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                      <div className="relative bg-slate-900/90 p-8 rounded-xl transition-all duration-500 transform group-hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-lg text-slate-300 group-hover:text-white transition-colors">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm"></div>
                    <div className="relative w-24 h-24 rounded-full bg-slate-900/90 flex items-center justify-center z-10 shadow-xl">
                      {step.icon}
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-indigo-500/50 animate-pulse" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-indigo-400" />
                    </div>
                  </div>
                  <div className="w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
