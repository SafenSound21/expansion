import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { translations } from '../i18n/translations';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function Header({ currentLang, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const t = translations[currentLang as keyof typeof translations];
  const isHomePage = location.pathname === '/';

  return (
    <header className="fixed w-full bg-slate-800/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          {!isHomePage && (
            <Link to="/" className="text-slate-300 hover:text-indigo-400">
              {t.nav.home}
            </Link>
          )}
        </div>
        
        <Link to={isHomePage ? '#' : '/'} className="flex items-center gap-2">
          <Code2 className="w-8 h-8 text-indigo-400" />
          <span className="font-bold text-xl text-white">Agency</span>
        </Link>

        <div className="flex-1 flex items-center justify-end gap-4">
          <select
            value={currentLang}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer text-slate-300"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="de">DE</option>
          </select>

          <Link to="/plans" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            {t.nav.plans}
          </Link>

          <Link to="/contact" className="text-white px-4 py-2 rounded-lg hover:text-indigo-400 transition-colors">
            {t.nav.contactButton}
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-indigo-400"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 w-64 bg-slate-800/95 backdrop-blur-sm py-4 px-6 mr-6 rounded-lg shadow-lg">
          <nav className="flex flex-col gap-4">
            <Link to="/about" className="text-slate-300 hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>
              {t.nav.about}
            </Link>
            <Link to="/blog" className="text-slate-300 hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>
              {t.nav.blog}
            </Link>
            <Link to="/contact" className="text-slate-300 hover:text-indigo-400" onClick={() => setIsMenuOpen(false)}>
              {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}