import { useEffect } from "react";

import ReactPixel from "react-facebook-pixel";

export function Terms() {

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("TermsViewContentTracked");
    
    if (!viewContentTracked) {
      ReactPixel.track("ViewContent", {
        content_name: 'terms page',
      });
      sessionStorage.setItem("TermsViewContentTracked", "true");
    }

  }, []);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Términos y Condiciones de Uso</h1>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Identificación del Titular del Sitio Web</h2>
          <p className="text-slate-300 mb-4">
            En cumplimiento con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el titular del sitio web es:<br />
            Nombre o Razón Social: SIMPLEADVISOR S.L.<br />
            CIF: B98684152<br />
            Domicilio Social: Calle Comte de Salvatierra, 30 - 8, Valencia, 46004, Valencia.<br />
            Correo Electrónico de Contacto: safensound21@gmail.com.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Descripción del Servicio</h2>
          <p className="text-slate-300 mb-4">
            SIMPLEADVISOR S.L. es una empresa dedicada a la venta y mantenimiento de páginas web, especialmente en Costa Rica y Panamá. Los usuarios pueden contratar nuestros servicios directamente a través de la web, proporcionando la información necesaria para el desarrollo de su página web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Condiciones de Uso</h2>
          <p className="text-slate-300 mb-4">Los usuarios pueden utilizar este sitio web y los servicios ofrecidos bajo las siguientes condiciones:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>No es necesario registrarse para utilizar los servicios, pero los usuarios deben enviar un correo o proporcionar su dirección de email para ser contactados.</li>
            <li>Los usuarios deben proporcionar información veraz y actualizada.</li>
            <li>No existen restricciones de edad para el uso del sitio.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Propiedad Intelectual</h2>
          <p className="text-slate-300 mb-4">
            Todo el contenido de este sitio web, incluidos textos, logotipos, imágenes y diseños, está protegido por las leyes de propiedad intelectual. Aunque algunos elementos son generados por inteligencia artificial o mediante aplicaciones, se prohíbe la copia, distribución o uso no autorizado de cualquier contenido publicado en esta web.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Limitación de Responsabilidad</h2>
          <p className="text-slate-300 mb-4">SIMPLEADVISOR S.L. no se responsabiliza de:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Problemas técnicos, errores en el contenido o interrupciones derivadas de cambios en el software utilizado.</li>
            <li>Contenidos de enlaces externos.</li>
            <li>Mal uso del sitio web o de los servicios por parte de los usuarios.</li>
          </ul>
          <p className="text-slate-300 mb-4">Sin embargo, se compromete a resolver los problemas técnicos lo antes posible.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contratación de Servicios</h2>
          <p className="text-slate-300 mb-4">
            Los usuarios pueden contratar servicios directamente a través de la página web, proporcionando la información necesaria para el desarrollo de su proyecto.<br />
            Métodos de Pago: Swift, Wise, Remitly, Payoneer, PayPal, Stripe y criptomonedas. Estos métodos pueden no estar disponibles directamente desde la web en algunos casos.<br />
            Política de Devoluciones: No existe política de reembolsos o devoluciones.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Normas de Conducta</h2>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Los usuarios no tienen permitido realizar publicaciones en el sitio web.</li>
            <li>Está prohibido el uso indebido del sitio o los servicios ofrecidos.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Enlaces de Terceros</h2>
          <p className="text-slate-300 mb-4">
            El sitio web puede contener enlaces a páginas externas, como tutorlink.es. SIMPLEADVISOR S.L. no se responsabiliza del contenido ni de las políticas de dichas páginas.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Modificaciones en los Términos y Condiciones</h2>
          <p className="text-slate-300 mb-4">
            SIMPLEADVISOR S.L. se reserva el derecho de modificar los presentes términos y condiciones. Cualquier cambio será notificado a los usuarios mediante correo electrónico.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Ley Aplicable y Jurisdicción</h2>
          <p className="text-slate-300 mb-4">
            Los presentes términos y condiciones se rigen por la legislación española. Cualquier conflicto será resuelto ante los tribunales de Valencia, España.
          </p>
        </div>
      </div>
    </section>
  );
}