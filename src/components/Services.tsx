import { Palette, Code2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface ServicesProps {
  currentLang: string;
}

export function Services({ currentLang }: ServicesProps) {
  const t = translations[currentLang as keyof typeof translations];

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-indigo-400" />,
      title: t.services.webDesign.title,
      description: t.services.webDesign.shortDesc,
      link: '/services/web-design'
    },
    {
      icon: <Code2 className="w-12 h-12 text-indigo-400" />,
      title: t.services.webDev.title,
      description: t.services.webDev.shortDesc,
      link: '/services/web-development'
    },
    {
      icon: <Search className="w-12 h-12 text-indigo-400" />,
      title: t.services.seo.title,
      description: t.services.seo.shortDesc,
      link: '/services/seo'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">{t.services.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-colors group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>
                <span className="inline-flex items-center text-indigo-400 font-medium">
                  Ver más detalles
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}