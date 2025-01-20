import { useEffect } from 'react';

import ReactPixel from "react-facebook-pixel";

export function PrivacyPolicy() {

  useEffect(() => {
    const viewContentTracked = sessionStorage.getItem("PrivacyViewContentTracked");
    
    if (!viewContentTracked) {
      ReactPixel.track("ViewContent", {
        content_name: 'privacy page',
      });
      sessionStorage.setItem("PrivacyViewContentTracked", "true");
    }

  }, []);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidad</h1>
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Responsable del Tratamiento</h2>
          <p className="text-slate-300 mb-4">
            El responsable del tratamiento de los datos es SIMPLEADVISOR S.L., con domicilio en Calle Comte de Salvatierra, 30 - 8, Valencia, 46004, Valencia, y correo electrónico de contacto safensound21@gmail.com.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Finalidad del Tratamiento de Datos</h2>
          <p className="text-slate-300 mb-4">Recogemos y tratamos datos personales con las siguientes finalidades:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Responder a consultas recibidas a través de la página web o por correo electrónico.</li>
            <li>En caso de contratación de nuestros servicios, gestionar la información necesaria, incluyendo imágenes, para el desarrollo de páginas web personalizadas.</li>
            <li>Enviar comunicaciones comerciales y ofertas, siempre con el consentimiento previo del usuario.</li>
          </ul>
          <p className="text-slate-300 mb-4">Los datos tratados incluyen nombre, correo electrónico e información proporcionada por el cliente.</p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Base Jurídica del Tratamiento</h2>
          <p className="text-slate-300 mb-4">El tratamiento de datos se basa en:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>El consentimiento del usuario, para responder a sus solicitudes y enviar comunicaciones comerciales.</li>
            <li>La ejecución de un contrato, en caso de contratación de nuestros servicios.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Cesión de Datos a Terceros</h2>
          <p className="text-slate-300 mb-4">
            SIMPLEADVISOR S.L. no cede datos personales a terceros bajo ninguna circunstancia.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Transferencias Internacionales</h2>
          <p className="text-slate-300 mb-4">
            Los datos personales pueden ser transferidos desde países fuera del Espacio Económico Europeo (Panamá y Costa Rica) para ser tratados en España en el desarrollo de los servicios contratados. Estas transferencias se realizan en cumplimiento de la normativa de protección de datos aplicable, garantizando la seguridad y confidencialidad de los datos.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Plazos de Conservación</h2>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Si no se contratan nuestros servicios, los datos serán eliminados si el usuario lo solicita.</li>
            <li>En caso de comunicaciones comerciales, se incluirá en los correos la opción de darse de baja en cualquier momento.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Derechos de los Interesados</h2>
          <p className="text-slate-300 mb-4">Los usuarios tienen derecho a:</p>
          <ul className="text-slate-300 mb-4 list-disc pl-6">
            <li>Acceder, rectificar o suprimir sus datos personales.</li>
            <li>Limitar u oponerse al tratamiento.</li>
            <li>Solicitar la portabilidad de sus datos.</li>
          </ul>
          <p className="text-slate-300 mb-4">
            Para ejercer estos derechos, pueden escribirnos a safensound21@gmail.com.<br />
            En caso de incumplimiento, pueden presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD), a través de su página web: www.aepd.es.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Seguridad de los Datos</h2>
          <p className="text-slate-300 mb-4">
            Los datos personales se almacenan en un archivo Excel y/o un CRM privado, que no es accesible públicamente. Adoptamos medidas técnicas y organizativas adecuadas para garantizar la confidencialidad y seguridad de los datos.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Menores de Edad</h2>
          <p className="text-slate-300 mb-4">
            Nuestros servicios no están dirigidos a menores de edad y no recopilamos intencionadamente datos personales de ellos.
          </p>
        </div>
      </div>
    </section>
  );
}