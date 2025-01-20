import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';
import image from "../assets/images/image.png";


interface FooterProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

export function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <footer className="bg-slate-900 text-white py-10 border-t">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo y enlaces */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link to={'/'} className="inline-block">
              <img src={image} alt="Expansion Digital logo" width="180px" className="mx-auto md:mx-0" />
            </Link>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-6 text-center md:text-left">
            <Link to="/about" className="text-slate-300 hover:text-indigo-400 mb-2 md:mb-0">
              {t.nav.about}
            </Link>
            <Link to="/privacy-policy" className="text-slate-300 hover:text-indigo-400 mb-2 md:mb-0">
              Política de Privacidad
            </Link>
            <Link to="/cookies-policy" className="text-slate-300 hover:text-indigo-400 mb-2 md:mb-0">
              Política de Cookies
            </Link>
            <Link to="/terms" className="text-slate-300 hover:text-indigo-400 mb-2 md:mb-0">
              Términos y Condiciones
            </Link>
            <Link to="/legal" className="text-slate-300 hover:text-indigo-400 mb-2 md:mb-0">
              Aviso Legal
            </Link>
          </div>
        </div>

        {/* Línea divisora */}
        <hr className="my-8 border-slate-700" />

        {/* Copyright y redes sociales */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Expansion Digital. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="mailto:info@expansion-digital.com" className="text-slate-300 hover:text-indigo-400">
              <Mail size={20} />
            </a>
            <a href="#" className="text-slate-300 hover:text-indigo-400">
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
