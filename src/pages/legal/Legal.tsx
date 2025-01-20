import { useEffect } from 'react';

import ReactPixel from "react-facebook-pixel";

export function Legal() {

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("LegalViewContentTracked");
    
    if (!viewContentTracked) {
      ReactPixel.track("ViewContent", {
        content_name: 'legal page',
      });
      sessionStorage.setItem("LegalViewContentTracked", "true");
    }

  }, []);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Aviso Legal</h1>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Titular del Sitio Web</h2>
          <p className="text-slate-300 mb-4">
            Nombre o Razón Social: SIMPLEADVISOR S.L.<br />
            CIF: B98684152<br />
            Domicilio Social: Calle Comte de Salvatierra, 30 - 8, Valencia, 46004, Valencia.<br />
            Correo Electrónico: safensound21@gmail.com
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Objeto del Sitio Web</h2>
          <p className="text-slate-300 mb-4">
            El presente sitio web tiene como finalidad proporcionar información sobre los servicios de diseño, desarrollo y mantenimiento de páginas web ofrecidos por SIMPLEADVISOR S.L., principalmente orientados a clientes en Costa Rica y Panamá. Los usuarios también pueden contratar servicios y realizar consultas directamente a través de esta web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Condiciones de Uso</h2>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>El acceso y uso de este sitio web atribuyen la condición de usuario, lo que implica la aceptación de las condiciones descritas en el presente aviso legal.</li>
            <li>Los usuarios deben hacer un uso adecuado del sitio web y los servicios ofrecidos.</li>
            <li>Está prohibido el uso del sitio para actividades ilícitas o contrarias a la buena fe.</li>
            <li>Los usuarios son responsables de proporcionar información veraz y actualizada.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Propiedad Intelectual e Industrial</h2>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>El diseño del sitio web, sus logotipos, textos, imágenes y demás contenido están protegidos por derechos de propiedad intelectual e industrial.</li>
            <li>Aunque algunas imágenes y textos se generan mediante herramientas de inteligencia artificial o aplicaciones, el contenido de este sitio web no podrá ser reproducido, distribuido, ni utilizado sin autorización expresa de SIMPLEADVISOR S.L.</li>
            <li>Cualquier uso no autorizado será considerado una infracción de los derechos de propiedad intelectual del titular.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitación de Responsabilidad</h2>
          <p className="text-slate-300 mb-4">SIMPLEADVISOR S.L. no se hace responsable de:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Errores técnicos o interrupciones del servicio debidos a causas externas, como fallos en el software utilizado.</li>
            <li>Contenidos de sitios web de terceros a los que se pueda acceder a través de enlaces en esta web (por ejemplo, tutorlink.es).</li>
            <li>Daños ocasionados por el uso indebido del sitio web o de los servicios ofrecidos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Enlaces de Terceros</h2>
          <p className="text-slate-300 mb-4">
            El sitio web incluye enlaces a páginas externas para ofrecer información adicional. SIMPLEADVISOR S.L. no se responsabiliza de los contenidos ni de las políticas de privacidad de dichas páginas externas.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Legislación Aplicable y Jurisdicción</h2>
          <p className="text-slate-300 mb-4">
            Este aviso legal se rige por la legislación española. Para cualquier conflicto que pueda surgir en relación con el sitio web o los servicios ofrecidos, las partes se someten expresamente a los tribunales de Valencia, España.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Modificaciones</h2>
          <p className="text-slate-300 mb-4">
            SIMPLEADVISOR S.L. se reserva el derecho de actualizar o modificar este aviso legal en cualquier momento. Cualquier cambio será comunicado a los usuarios en la página web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Contacto</h2>
          <p className="text-slate-300 mb-4">
            Para cualquier consulta o reclamación, los usuarios pueden ponerse en contacto a través del correo electrónico safensound21@gmail.com.
          </p>
        </div>
      </div>
    </section>
  );
}