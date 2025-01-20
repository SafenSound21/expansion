import { useEffect } from "react";

import ReactPixel from "react-facebook-pixel";


export function CookiesPolicy() {
  
  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("CookiesViewContentTracked");
    
    if (!viewContentTracked) {
      ReactPixel.track("ViewContent", {
        content_name: 'Cookies policy page',
      });
      sessionStorage.setItem("CookiesViewContentTracked", "true");
    }

  }, []);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. ¿Qué son las Cookies?</h2>
          <p className="text-slate-300 mb-4">
            Una cookie es un pequeño archivo de texto que se almacena en el navegador del usuario al visitar un sitio web. Estas permiten al sitio recordar información sobre la visita, como el idioma preferido, los datos de inicio de sesión o las preferencias del usuario, para mejorar la experiencia de navegación.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Tipos de Cookies Utilizadas en este Sitio Web</h2>
          <p className="text-slate-300 mb-4">SIMPLEADVISOR S.L. utiliza las siguientes categorías de cookies en su página web:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>
              <strong className="text-white">Cookies Técnicas o Necesarias:</strong><br />
              Son esenciales para el funcionamiento básico del sitio web, como recordar la sesión activa o permitir la navegación.
            </li>
            <li>
              <strong className="text-white">Cookies de Personalización:</strong><br />
              Permiten recordar preferencias del usuario, como el idioma o la región geográfica.
            </li>
            <li>
              <strong className="text-white">Cookies de Análisis:</strong><br />
              Recopilan información sobre el comportamiento de los usuarios en el sitio web, como las páginas visitadas y el tiempo de navegación. Utilizamos herramientas como Google Analytics para obtener estadísticas anónimas.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Finalidad de las Cookies</h2>
          <p className="text-slate-300 mb-4">Las cookies que utilizamos tienen las siguientes finalidades:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Garantizar el correcto funcionamiento del sitio web.</li>
            <li>Recopilar estadísticas sobre la navegación para mejorar la experiencia del usuario.</li>
            <li>Recordar las preferencias de los usuarios.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Cookies de Terceros</h2>
          <p className="text-slate-300 mb-4">Este sitio web utiliza cookies gestionadas por terceros, incluyendo:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Google Analytics: Para el análisis del tráfico y comportamiento del usuario.</li>
            <li>Otros servicios integrados: Como widgets de redes sociales (Facebook, Instagram) o servicios de vídeo (YouTube).</li>
          </ul>
          <p className="text-slate-300 mb-4">
            Para más información sobre las políticas de cookies de estos terceros, puedes consultar sus respectivas páginas web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Duración de las Cookies</h2>
          <p className="text-slate-300 mb-4">Las cookies pueden ser:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>De sesión: Se eliminan al cerrar el navegador.</li>
            <li>Persistentes: Permanecen almacenadas hasta que son eliminadas manualmente o alcanzan su fecha de expiración.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Herramienta de Consentimiento de Cookies</h2>
          <p className="text-slate-300 mb-4">Al acceder a nuestra página web, se mostrará un aviso de cookies donde podrás:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Aceptar todas las cookies.</li>
            <li>Rechazar todas las cookies no esenciales.</li>
            <li>Configurar las cookies según tus preferencias.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Cómo Desactivar o Eliminar Cookies</h2>
          <p className="text-slate-300 mb-4">
            El usuario puede modificar la configuración de su navegador para bloquear o eliminar cookies. A continuación, se indican enlaces a las guías de los navegadores más comunes:
          </p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Safari</li>
            <li>Microsoft Edge</li>
          </ul>
          <p className="text-slate-300 mb-4">
            Ten en cuenta que la desactivación de algunas cookies puede afectar el funcionamiento de la página web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Actualizaciones de la Política de Cookies</h2>
          <p className="text-slate-300 mb-4">
            SIMPLEADVISOR S.L. se reserva el derecho de modificar esta política de cookies en función de cambios en la normativa o en las funcionalidades del sitio web. Las modificaciones se publicarán en esta página.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Contacto</h2>
          <p className="text-slate-300 mb-4">
            Para cualquier duda relacionada con nuestra política de cookies, puedes escribirnos a safensound21@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}