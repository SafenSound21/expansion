import React from 'react';
import { Testimonios } from '../components/Testimonios';
import { Companies } from '../components/Companies';
import { SmallContact } from '../components/SmallContact';

export function Exitos() {
    return (
        <div className="bg-slate-900 min-h-screen pt-24 sm:pt-32">
            {/* Contenido principal con título y testimonios */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                    Casos de Éxito
                </h1>
                <Testimonios />
            </div>

            {/* Scroll de empresas */}
            <div className="mt-12">
                <Companies />
            </div>

            {/* Formulario pegado al scroll y al footer */}
            <div className="-mt-8 mb-[-70px]">
                <SmallContact />
            </div>
        </div>
    );
}
