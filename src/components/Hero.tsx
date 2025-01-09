import React from 'react';
import { Calendar, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface HeroProps {
  currentLang: string;
}

export function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="pt-40 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-slate-300 leading-relaxed max-w-3xl">
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
    </section>
  );
}