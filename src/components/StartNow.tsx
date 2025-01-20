import { Link } from 'react-router-dom';

export function StartNow() {
  

  return (

    <section className="py-12 px-6 sm:px-12 pb-16 border-y bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900">

      <div className="max-w-3xl mx-auto text-center text-white">

        <h2 className="text-3xl font-bold mt-2">¿Listo para Impulsar tu Presencia Digital?</h2>
        <p className="mt-4 text-slate-300 text-lg">
          No esperes más para tener la página web que tu negocio merece. Comienza hoy mismo y destaca en el mundo digital.
        </p>

        <Link to="/contact" className="inline-block mt-8 bg-indigo-600 text-white hover:bg-indigo-700 transition-colorse py-4 px-8 rounded-lg text-lg font-semibold">
          Comienza tu Proyecto
        </Link>
        
      </div>

  </section>

  );
}
