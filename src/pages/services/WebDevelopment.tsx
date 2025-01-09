import React from 'react';
import { Code2, Cpu, Shield, Zap, Database, Cloud, GitBranch } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { Link } from 'react-router-dom';

interface WebDevelopmentProps {
  currentLang: string;
}

export function WebDevelopment({ currentLang }: WebDevelopmentProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Code2 className="w-16 h-16 text-indigo-400 mb-6" />
          <h1 className="text-4xl font-bold text-white mb-6">{t.services.webDev.title}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">{t.services.webDev.description}</p>
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200"
            alt="Desarrollo Web"
            className="rounded-xl shadow-2xl mb-16 w-full max-w-4xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Cpu className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDev.features.backend}</h3>
            <p className="text-slate-300">{t.services.webDev.features.backendDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Shield className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDev.features.security}</h3>
            <p className="text-slate-300">{t.services.webDev.features.securityDesc}</p>
          </div>
          <div className="bg-slate-800/50 p-8 rounded-xl transform hover:scale-105 transition-transform">
            <Zap className="w-10 h-10 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4">{t.services.webDev.features.performance}</h3>
            <p className="text-slate-300">{t.services.webDev.features.performanceDesc}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
              alt="Tecnologías de desarrollo"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Tecnologías que Utilizamos</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Database className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Bases de Datos Modernas</h4>
                  <p className="text-slate-300">Implementamos soluciones con bases de datos SQL y NoSQL según las necesidades específicas de cada proyecto.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Cloud className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Arquitectura en la Nube</h4>
                  <p className="text-slate-300">Desarrollamos aplicaciones escalables utilizando servicios cloud de última generación.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <GitBranch className="w-6 h-6 text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Control de Versiones</h4>
                  <p className="text-slate-300">Utilizamos sistemas de control de versiones para garantizar un desarrollo organizado y colaborativo.</p>
                </div>
              </div>
            </div>
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