import React from 'react';
import { Search, BarChart2, Globe, Target, TrendingUp, LineChart, Settings } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { Link } from 'react-router-dom';

interface SEOProps {
  currentLang: string;
}

export function SEO({ currentLang }: SEOProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Search className="w-16 h-16 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">{t.services.seo.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">{t.services.seo.description}</p>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
            alt="SEO y Analytics"
            className="rounded-xl shadow-2xl mb-16 w-full max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <BarChart2 className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.seo.features.analytics}</h3>
            <p className="text-slate-300">{t.services.seo.features.analyticsDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Globe className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.seo.features.optimization}</h3>
            <p className="text-slate-300">{t.services.seo.features.optimizationDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Target className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.seo.features.keywords}</h3>
            <p className="text-slate-300">{t.services.seo.features.keywordsDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Estrategias de Optimización</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Análisis de Competencia</h4>
                  <p className="text-slate-300">Estudiamos a tu competencia para identificar oportunidades y desarrollar estrategias efectivas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <LineChart className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Seguimiento de Resultados</h4>
                  <p className="text-slate-300">Monitorizamos constantemente el rendimiento para ajustar y mejorar las estrategias.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Optimización Continua</h4>
                  <p className="text-slate-300">Ajustamos constantemente nuestras estrategias basándonos en datos y resultados reales.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              alt="Análisis SEO"
              className="rounded-xl shadow-xl"
            />
          </div>
        </div>

        <div className="text-center">
          <Link
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