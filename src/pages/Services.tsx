import React from 'react';
import { translations } from '../i18n/translations';

interface ServicesProps {
  currentLang: string;
}

export function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">{t.nav.services}</h1>
        {/* Add your services content here */}
      </div>
    </section>
  );
}