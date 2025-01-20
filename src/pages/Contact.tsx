import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface ContactProps {
  currentLang: string;
}

export function Contact({ currentLang }: ContactProps) {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) {
      alert('Por favor, acepta la política de privacidad para continuar.');
      return;
    }

    const formData = new FormData(e?.target as HTMLFormElement);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      // Asegurarse de que el valor es un string antes de añadirlo al objeto
      if (typeof value === 'string') {
        data[key] = value;
      }
    });

    try {
      // Hacer la solicitud POST a la ruta API
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Manejar la respuesta
      if (response.ok) {
        window.location.href = '/confirmation';
      } else {
        alert('Hubo un error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la solicitud');
    }

  };

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="px-6 max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="w-full space-y-6">
            <h1 className="text-4xl font-bold text-white">{t.nav.contact}</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              ¿Listo para dar el siguiente paso? Completa el formulario y nuestro equipo se pondrá en contacto contigo lo antes posible.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Nombre *</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="business" className="block text-white mb-2">Nombre del negocio (opcional)</label>
            <input
              type="text"
              name="business"
              id="business"
              className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-white mb-2">Teléfono (opcional)</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            ></textarea>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="privacy"
              checked={acceptedPrivacy}
              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
              className="mt-1"
            />
            <label htmlFor="privacy" className="text-sm text-slate-300">
              He leído y acepto la <Link to="/privacy-policy" className="text-indigo-400 hover:text-indigo-300">política de privacidad</Link> *
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
