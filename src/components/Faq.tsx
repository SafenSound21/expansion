import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: "¿Cuánto tiempo tardará en estar lista mi web?",
      answer: "El tiempo depende de lo que necesites, pero en general, te entregamos tu página en un plazo de 2 a 4 semanas después de tener todo claro."
    },
    {
      question: "¿Puedo integrar un sistema de reservas o formularios en mi web?",
      answer: "¡Claro! Podemos poner formularios de contacto, sistemas de reservas y todo lo que necesites para gestionar tus pedidos o reservas directamente desde tu web."
    },
    {
      question: "¿Mi página web me ayudará a que más gente me encuentre en internet?",
      answer: "Sí, trabajamos en el SEO de tu página para que salga en los primeros resultados de búsqueda y puedas llegar a más clientes potenciales."
    },
    {
      question: "¿Qué pasa si tengo algún problema con mi web después de que esté lista?",
      answer: "No te preocupes, estamos aquí para ayudarte. Ofrecemos soporte continuo para que tu página esté siempre en funcionamiento y resuelvas cualquier inconveniente."
    },
    {
      question: "¿Mi página web funcionará bien en teléfonos móviles?",
      answer: "Por supuesto, nos aseguramos de que tu web se vea perfecta en cualquier dispositivo, ya sea teléfono, tablet o computadora."
    },
    {
      question: "¿Puedo integrar mis redes sociales en la web?",
      answer: "Sí, podemos añadir tus redes sociales y otras herramientas de marketing para que puedas promocionar tu negocio y llegar a más gente."
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden pt-10">
      {/* Fondo con patrón de puntos */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.05) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Efecto de luz radial */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-slate-300">
            Resolvemos tus dudas sobre nuestros servicios
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Borde con gradiente */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-20 duration-500"></div>
              
              <div className="relative bg-slate-900/90 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {faq.question}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-indigo-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-indigo-400" />
                    )}
                  </span>
                </button>
                
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? 'max-h-96' : 'max-h-0'}
                  `}
                >
                  <div className="px-6 pb-4">
                    <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent mb-4" />
                    <p className="text-slate-300">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
