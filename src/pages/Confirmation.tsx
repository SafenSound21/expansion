import { useEffect } from 'react';

import ReactPixel from "react-facebook-pixel";

import { translations } from '../i18n/translations';

interface ConfirmationProps {
  currentLang: string;
}

export function Confirmation({ currentLang }: ConfirmationProps) {

  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("ConfirmationViewContentTracked");
    if (!viewContentTracked) {

      ReactPixel.track("ViewContent", {
        content_name: 'Confirmation Page',
      });
      
      sessionStorage.setItem("ConfirmationViewContentTracked", "true");

    }
  }, []);

  return (
    <main className="pt-40 pb-32 flex flex-col items-center justify-center">
      <div className="max-w-lg text-center p-6 bg-slate-800/50 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">{t.confirmation.detail}</h1>
        <p className="text-lg text-white mb-6">
          {t.confirmation.message}
        </p>
        <a href="/" className="inline-block px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md">
          {t.confirmation.backToHome}
        </a>
      </div>
    </main>
  );
}
