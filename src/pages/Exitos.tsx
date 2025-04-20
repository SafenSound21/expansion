import React from 'react';
import { Testimonios } from '../components/Testimonios';
import { Companies2 } from '../components/Companies2';
import { SmallContact } from '../components/SmallContact';

export function Exitos() {
    return (
        <div className="bg-slate-900 min-h-screen py-16 sm:py-24">
            {/* Contenido principal con título y testimonios */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
                    Casos de Éxito
                </h1>
                <Testimonios />
            </div>

            <div className="mt-16">
                <Companies2 />
            </div>

            <div className="mt-16">
                <SmallContact />
            </div>
        </div>
    );
}
