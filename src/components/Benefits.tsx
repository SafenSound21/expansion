import { Search, Shield, Trophy, FileSpreadsheet, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Benefits() {
  const benefits = [
    {
      icon: <Search className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "Pérdida de clientes a diario",
      description: "El 97% de tus clientes potenciales buscan online antes de decidir."
    },
    {
      icon: <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "Falta de credibilidad",
      description: "El 75% de los usuarios confían más en un negocio con WEB."
    },
    {
      icon: <Trophy className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "Supera a tu competencia",
      description: "Si tu competencia tiene web y tú no, tendrá más visibilidad y por tanto, vende más."
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "Pérdida de oportunidades",
      description: "Tu página web podría captar interesados 24/7. Sin ella, pierdes oportunidades."
    },
    {
      icon: <ShoppingCart className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-400" />,
      title: "Ventas online desaprovechadas",
      description: "El e-commerce creció 48% en Costa Rica. Sin web, estás fuera de este mercado."
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
            ¿Tu negocio aún no tiene web?
          </h2>
          <p className="text-lg sm:text-xl text-indigo-200 max-w-3xl mx-auto">
            Esto te estás perdiendo:
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora vertical centrada */}
          <div className="absolute left-1/2 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/20 via-indigo-400/40 to-indigo-500/20" />

          <div className="space-y-16 sm:space-y-16 relative">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative">
                {/* Versión móvil */}
                <div className="sm:hidden">
                  <div className="flex justify-center mb-12">
                    <div className="relative">
                      {/* Círculo con gradiente */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm"></div>
                      <div className="relative w-16 h-16 rounded-full bg-slate-900/90 flex items-center justify-center z-10 shadow-xl">
                        {benefit.icon}
                      </div>
                      {/* Punto de conexión */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500/50 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      </div>
                    </div>
                  </div>
                  <div className="group px-4">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                      <div className="relative bg-slate-900/90 p-4 rounded-lg text-left">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors text-left">
                          {index + 1}. {benefit.title}
                        </h3>
                        <p className="text-sm text-slate-300 group-hover:text-white transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Versión desktop */}
                <div className={`hidden sm:flex sm:flex-row ${
                  index % 2 === 1 ? 'sm:flex-row-reverse' : ''
                } items-center gap-8 md:gap-16`}>
                  <div className={`w-1/2 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-30 group-hover:opacity-100 transition duration-500 blur"></div>
                      <div className="relative bg-slate-900/90 p-8 rounded-xl transition-all duration-500 transform group-hover:-translate-y-1">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors text-left">
                          {index + 1}. {benefit.title}
                        </h3>
                        <p className="text-lg text-slate-300 group-hover:text-white transition-colors text-left">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm"></div>
                    <div className="relative w-24 h-24 rounded-full bg-slate-900/90 flex items-center justify-center z-10 shadow-xl">
                      {benefit.icon}
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

        {/* Sección final con título, subtítulo y botón */}
        <div className="mt-16 sm:mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            ¿Listo para aumentar tus ventas?
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto mb-8">
            No esperes más para tener la página web que tu negocio merece. Comienza hoy mismo y destaca en el mundo digital.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            AUMENTA TUS VENTAS
          </Link>
        </div>
      </div>
    </section>
  );
}