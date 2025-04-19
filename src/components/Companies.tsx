import React from 'react';

export function Companies() {
    const companies = [
        { name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg' },
        { name: 'Instagram', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' },
        { name: 'title', isTitle: true }, // Título dentro del carrusel
        { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
        { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
        { name: 'Uber', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg' }
    ];

    const renderLogo = (company: any, index: number, isClone = false) => (
        <div
            key={`${company.name}-${index}${isClone ? '-duplicate' : ''}`}
            className="flex items-center justify-center min-w-[80px] sm:min-w-[140px] shrink-0 px-4 sm:px-6"
        >
            {company.isTitle ? (
                <>
                    {/* Texto para móvil */}
                    <span className="block sm:hidden text-center text-base font-bold text-slate-800 whitespace-nowrap min-w-[220px]">
                        Tecnología como la nuestra
                    </span>

                    {/* Texto para escritorio */}
                    <span className="hidden sm:block text-center text-2xl font-bold text-slate-800 whitespace-nowrap min-w-[300px]">
                        La misma tecnología que usan ellos
                    </span>
                </>
            ) : (
                <img
                    src={company.logo}
                    alt={company.name}
                    className="h-6 sm:h-10 w-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                />
            )}
        </div>
    );

    return (
        <div className="-mt-6 sm:mt-0 relative z-10">
            <div className="bg-white w-screen sm:w-full py-4 sm:py-6 relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

                <div className="relative flex overflow-x-hidden">
                    <div className="w-[200%] flex space-x-8 sm:space-x-20 animate-infinite-scroll-mobile sm:animate-infinite-scroll">
                        {[...companies, ...companies].map((company, index) =>
                            renderLogo(company, index)
                        )}
                    </div>

                    <div
                        className="w-[200%] flex space-x-8 sm:space-x-20 animate-infinite-scroll-mobile sm:animate-infinite-scroll"
                        aria-hidden="true"
                    >
                        {[...companies, ...companies].map((company, index) =>
                            renderLogo(company, index, true)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
