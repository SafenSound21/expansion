import { translations } from '../i18n/translations';

interface AboutProps {
  currentLang: string;
}

export function About({ currentLang }: AboutProps) {
  const t = translations[currentLang as keyof typeof translations];

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-2xl mx-auto px-6">
        <div className="flex flex-col gap-12 mb-16">
          <div className="w-full space-y-6">
            <h1 className="text-4xl font-bold text-white">{t.nav.about}</h1>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Empresa dedicada a digitalizar comercios en Costa Rica y en Panamá, para ayudarles a ganar más visibilidad en los turistas, para que partan de una ventaja inicial importante respecto a sus competidores.
              </p>
              <p>
                Con experiencia en el mundo de la creación de Apps, nos hemos pasado al sector web ya que identificamos una gran oportunidad para ayudar a comercios locales de Costa Rica.
              </p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
              alt="Equipo trabajando"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}