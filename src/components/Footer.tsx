import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';
import { translations } from '../i18n/translations';

interface FooterProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <footer className="bg-slate-800/50 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Links a la izquierda */}
          <div className="space-y-3">
            <h3 className="font-semibold text-white mb-4">Información</h3>
            <Link to="/about" className="block text-slate-300 hover:text-indigo-400">
              {t.nav.about}
            </Link>
            <Link to="/privacy-policy" className="block text-slate-300 hover:text-indigo-400">
              Política de Privacidad
            </Link>
            <Link to="/cookies-policy" className="block text-slate-300 hover:text-indigo-400">
              Política de Cookies
            </Link>
            <Link to="/terms" className="block text-slate-300 hover:text-indigo-400">
              Términos y Condiciones
            </Link>
            <Link to="/legal" className="block text-slate-300 hover:text-indigo-400">
              Aviso Legal
            </Link>
          </div>

          {/* Logo en el centro */}
          <div className="flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <Code2 className="w-8 h-8 text-indigo-400" />
              <span className="font-bold text-xl">Agency</span>
            </Link>
          </div>

          {/* Contacto a la derecha */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">{t.footer.contact}</h3>
            <div className="flex items-center gap-2 text-slate-300">
              <Mail className="w-4 h-4" />
              info@expansion-digital.com
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Introduzca su correo"
                className="w-full px-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}