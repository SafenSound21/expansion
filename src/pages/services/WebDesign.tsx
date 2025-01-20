import { useEffect } from 'react';

import ReactPixel from "react-facebook-pixel";

import { Palette, Layout, Smartphone, PaintBucket, Figma, Users, Zap } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { Link } from 'react-router-dom';

interface WebDesignProps {
  currentLang: string;
}

export function WebDesign({ currentLang }: WebDesignProps) {
  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("WebDesViewContentTracked");
    
    if (!viewContentTracked) {
      ReactPixel.track("ViewContent", {
        content_name: 'Web design page',
      });
      sessionStorage.setItem("WebDesViewContentTracked", "true");
    }

  }, []);

  const handleLinkClick = () => {
    ReactPixel.track('clickWebDesignStartNow');
  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Palette className="w-16 h-16 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">{t.services.webDesign.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">{t.services.webDesign.description}</p>
          <img
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200"
            alt="Diseño Web"
            className="rounded-xl shadow-2xl mb-16 w-full max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Layout className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDesign.features.ui}</h3>
            <p className="text-slate-300">{t.services.webDesign.features.uiDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Smartphone className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDesign.features.responsive}</h3>
            <p className="text-slate-300">{t.services.webDesign.features.responsiveDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <PaintBucket className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDesign.features.branding}</h3>
            <p className="text-slate-300">{t.services.webDesign.features.brandingDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Nuestro Proceso de Diseño</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Figma className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Prototipado y Wireframes</h4>
                  <p className="text-slate-300">Creamos prototipos interactivos que permiten visualizar la experiencia del usuario antes de comenzar el desarrollo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Diseño Centrado en el Usuario</h4>
                  <p className="text-slate-300">Cada decisión de diseño se toma pensando en la experiencia del usuario final y en facilitar la navegación.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Optimización y Rendimiento</h4>
                  <p className="text-slate-300">Optimizamos cada elemento visual para garantizar tiempos de carga rápidos sin sacrificar la calidad.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800"
              alt="Proceso de diseño"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="text-center">
          <Link
            onClick={handleLinkClick}
            to="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
          >
            Comienza tu proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}