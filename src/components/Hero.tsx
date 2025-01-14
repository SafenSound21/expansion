import { Calendar, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface HeroProps {
  currentLang: string;
}

export function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="relative min-h-screen w-full">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 bg-hero-image"></div>

      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 opacity-50"></div>

      <div className="relative z-10 pt-40 md:pt-52 pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-2xl text-slate-200 leading-relaxed max-w-3xl">
              {t.hero.description}
            </p>
            <div className="flex gap-4 w-full max-w-xl">
              <Link 
                to="/plans"
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                <Wallet className="w-6 h-6" />
                {t.nav.plans}
              </Link>
              <Link 
                to="/contact"
                className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                <Calendar className="w-6 h-6" />
                {t.nav.contactButton}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
