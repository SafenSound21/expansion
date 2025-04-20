import React from 'react';

export function Testimonios() {
    const cases = [
        {
            name: "Café Del Mar",
            image: "/CafeDelMar.png",
            website: "www.cafe-del-mar.es",
            description: [
                "Situación inicial: Dificultad para llenar el local en temporada alta.",
                "Solución: Renovación completa de imagen y presencia web.",
                "Resultado: Ocupación completa en temporada alta y aumento en otros períodos.",
                "Logro destacado: Aumento del 22% en reservas en menos de un año.",
                "Impacto: Record histórico de la última década en número de reservas."
            ],
            imagePosition: "left",
            stats: {
                value: "22%",
                label: "Aumento en reservas"
            }
        },
        {
            name: "TutorLink",
            image: "/TutorLink.png",
            website: "www.TutorLink.es",
            description: [
                "Objetivo: Expandir alcance y mejorar presencia digital.",
                "Estrategia: Marketing digital integral y optimización web.",
                "Resultado: Aumento del 17% en ventas totales.",
                "Impacto: Mayor conexión entre estudiantes y tutores cualificados.",
                "Beneficio adicional: Mejora en la experiencia de usuario de la plataforma."
            ],
            imagePosition: "right",
            stats: {
                value: "17%",
                label: "Incremento en ventas"
            }
        },
        {
            name: "RestaurantePro",
            image: "/restaurantepro.png",
            website: "www.restaurantepro.es",
            description: [
                "Desafío: Necesidad de transformación digital completa.",
                "Solución: Diseño web intuitivo y estrategias de marketing digital.",
                "Resultado: Crecimiento del 40% en ventas.",
                "Alcance: Mayor visibilidad online y captación de nuevos clientes.",
                "Innovación: Implementación de sistema de reservas online."
            ],
            imagePosition: "left",
            stats: {
                value: "40%",
                label: "Crecimiento en ventas"
            }
        }
    ];

    return (
        <div className="space-y-24">
            {cases.map((case_, index) => (
                <div key={case_.name}>
                    <div className={`bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl sm:flex ${case_.imagePosition === 'right' ? 'sm:flex-row-reverse' : ''} ${case_.name === 'Café Del Mar' ? 'h-fit' : ''}`}>
                        <div className="sm:flex items-stretch">
                            <div className={`sm:w-1/2 flex flex-col ${case_.imagePosition === 'right' ? 'sm:order-2' : ''}`}>
                                <a
                                    href={`https://${case_.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={case_.image}
                                        alt={case_.name}
                                        className="w-full object-cover cursor-pointer transition-opacity hover:opacity-90"
                                    />
                                </a>
                                <a
                                    href={`https://${case_.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center py-4 px-4 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                                >
                                    {case_.website}
                                </a>
                            </div>

                            <div className={`sm:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col justify-center ${case_.imagePosition === 'right' ? 'sm:order-1' : ''}`}>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                    {case_.name}
                                </h2>
                                <ul className="space-y-2">
                                    {case_.description.map((point, i) => (
                                        <li key={i} className="flex items-start text-slate-300">
                                            <span className="w-2 h-2 mt-2 mr-3 rounded-full bg-indigo-500/50"></span>
                                            <span className="flex-1">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                            <span className="text-2xl font-bold mr-2">{case_.stats.value}</span>
                            <span className="text-sm opacity-80">{case_.stats.label}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
