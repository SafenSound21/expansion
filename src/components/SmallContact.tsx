import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';

export function SmallContact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
        console.log(response);
        alert('Hubo un error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la solicitud');
    }
  
  };

  return (
    <section className="relative py-20 overflow-hidden pb-32">

      <div className="relative max-w-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="text-lg text-slate-300">
            Déjanos tu mensaje y te contactaremos pronto
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu email"
              required
              className="relative w-full px-6 py-4 bg-slate-900/90 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-30 group-hover:opacity-100 transition duration-500"></div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tu mensaje"
              required
              rows={4}
              className="relative w-full px-6 py-4 bg-slate-900/90 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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

          <div className="relative group">
            <button
              type="submit"
              className="relative w-full bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 group border-none"
            >
              <span>Enviar mensaje</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
