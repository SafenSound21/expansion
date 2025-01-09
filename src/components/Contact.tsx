import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface ContactProps {
  currentLang: string;
}

export function Contact({ currentLang }: ContactProps) {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedPrivacy) {
      alert('Por favor, acepta la política de privacidad para continuar.');
      return;
    }
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-white mb-2">Nombre *</label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email *</label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="business" className="block text-white mb-2">Negocio (opcional)</label>
        <input
          type="text"
          id="business"
          className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-white mb-2">Teléfono (opcional)</label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-white mb-2">Mensaje *</label>
        <textarea
          id="message"
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
  );
}