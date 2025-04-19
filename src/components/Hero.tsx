import { Link } from 'react-router-dom';
import ReactPixel from 'react-facebook-pixel';
import { translations } from '../i18n/translations';

interface HeroProps {
  currentLang: string;
}

export function Hero({ currentLang }: HeroProps) {
  const t = translations[currentLang as keyof typeof translations];

  const handleLinkClick = () => {
    const buttonClicked = sessionStorage.getItem(`ButtonContactHeroClicked`);
    if (!buttonClicked) {
      ReactPixel.track('clickContactHero');
      sessionStorage.setItem("ButtonContactHeroClicked", "true");
    }
  };

  return (
    <section className="relative w-full">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-cover bg-[center_top] sm:bg-center bg-no-repeat opacity-80 bg-hero-image h-full"></div>

      {/* Gradiente superpuesto */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 opacity-50 h-full"></div>

      <div className="relative z-10 pt-[120px] md:pt-[240px] pb-[112px] md:pb-[160px] max-h-[630px] overflow-hidden sm:max-h-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col text-center max-w-4xl mx-auto gap-8">
            <h1 className="text-5xl text-left md:text-6xl font-medium text-white leading-tight">
              Diseñamos, desarrollamos, mantenemos. Fácil
            </h1>
            <p className="text-lg text-justify text-slate-100 leading-relaxed max-w-3xl mb-2">
              {t.hero.description}
            </p>
            <div className="flex gap-4 w-full max-w-xl flex-wrap">
              <Link 
                onClick={handleLinkClick}
                to="/contact"
                className="flex items-center font-semibold justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
              >
                Hablemos de tu proyecto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
