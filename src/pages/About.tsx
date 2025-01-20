// import { translations } from '../i18n/translations';

import ReactPixel from "react-facebook-pixel";

import { useEffect } from "react";
import { SmallContact } from "../components/SmallContact";

// interface AboutProps {
//   currentLang: string;
// }

export function About() {
  // const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("AboutViewContentTracked");
    if (!viewContentTracked) {

      ReactPixel.track("ViewContent", {
        content_name: 'Sobre Nosotros',
      });
      
      sessionStorage.setItem("AboutViewContentTracked", "true");
    }
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-12 mb-16">
          <div className="w-full space-y-6">
            <h1 className="text-4xl font-bold text-white text-center mb-16">Transformamos Negocios, Creando Puentes al Mundo Digital</h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">

              {/* Card 1: Nuestra Misión */}
              <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">Nuestra Misión</h2>
                <p className="text-slate-300 leading-relaxed">
                  En un mundo cada vez más digital, ayudamos a transformar negocios tradicionales en historias de éxito online. Nuestro propósito es claro: hacer que los negocios locales trasciendan fronteras y conecten con un público más amplio, destacando frente a la competencia.
                </p>
              </div>

              {/* Card 2: ¿Quiénes Somos? */}
              <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">¿Quiénes Somos?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Somos un equipo de 8 desarrolladores apasionados por el desarrollo web. No solo creamos sitios, diseñamos experiencias digitales que potencian la visibilidad de cada comercio y abren nuevas puertas al crecimiento.
                </p>
              </div>

              {/* Card 3: Lo Que Nos Diferencia */}
              <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl shadow-xl border border-white/10 md:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-4">Lo Que Nos Diferencia</h2>
                <p className="text-slate-300 leading-relaxed">
                  Con una sólida experiencia en tecnología y un enfoque creativo, hemos trabajado en numerosos proyectos que abarcan desde páginas web optimizadas hasta plataformas más complejas. No somos solo desarrolladores; somos socios estratégicos que trabajan contigo para aprovechar al máximo las oportunidades digitales.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      <SmallContact />
    </section>
  );
}