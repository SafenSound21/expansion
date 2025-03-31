import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../i18n/translations';

interface ContactProps {
  currentLang: string;
}

export function Contact({ currentLang }: ContactProps) {
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const t = translations[currentLang as keyof typeof translations];

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if privacy policy is accepted
    if (!acceptedPrivacy) {
      alert('Por favor, acepta la política de privacidad para continuar.');
      return;
    }

    // Prevent submission if already submitting
    if (isSubmitting) {
      return;
    }

    // Check if enough time has passed since last submission (15 seconds)
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;
    const minimumWaitTime = 15000; // 15 seconds in milliseconds

    if (timeSinceLastSubmission < minimumWaitTime) {
      alert(`Por favor, espera ${Math.ceil((minimumWaitTime - timeSinceLastSubmission) / 1000)} segundos antes de enviar otro mensaje.`);
      return;
    }

    try {
      setIsSubmitting(true);
      setLastSubmissionTime(now);

      // Get form data
      const formData = new FormData(e.target as HTMLFormElement);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        business: formData.get('business'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      };

      // Here you would add your form submission logic
      // For example:
      // await submitForm(data);
      
      // Clear form after successful submission
      (e.target as HTMLFormElement).reset();
      setAcceptedPrivacy(false);
      alert('Mensaje enviado correctamente');

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      // Add a small delay before allowing new submissions
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  }, [acceptedPrivacy, isSubmitting, lastSubmissionTime]);

  return (
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
        <label htmlFor="business" className="block text-white mb-2">Negocio (opcional)</label>
        <input
          type="text"
          id="business"
          name="business"
          className="w-full px-4 py-2 bg-white/10 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-white mb-2">Teléfono (opcional)</label>
        <input
          type="tel"
          id="phone"
          name="phone"
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
        disabled={isSubmitting}
        className={`w-full px-6 py-3 rounded-lg transition-colors ${
          isSubmitting 
            ? 'bg-indigo-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white`}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  );
}