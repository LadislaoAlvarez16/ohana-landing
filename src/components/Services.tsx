import { landingData } from "../config/landing";
import React from "react";

export default function Services() {
    // Definimos las clases y estilos específicos para cada índice del bento grid
    const getGridClasses = (index: number) => {
        switch (index) {
            case 0: return "md:col-span-8";
            case 1: return "md:col-span-4";
            case 2: return "md:col-span-5";
            case 3: return "md:col-span-7";
            default: return "md:col-span-6";
        }
    };

    return (
        <section className="py-section-gap scroll-mt-20" id="productos">
            <div className="max-w-[1140px] mx-auto px-container-padding">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Nuestra Colección</h2>
                    <div className="w-16 h-[1px] bg-outline-variant mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-stack-lg auto-rows-[300px] md:auto-rows-[400px]">
                    {landingData.services.map((service, i) => (
                        <div key={i} className={`group relative ${getGridClasses(i)} rounded-2xl overflow-hidden cursor-pointer`}>
                            <img 
                                alt={service.title} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                src={service.image} 
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${i === 0 ? 'from-black/60 via-transparent to-transparent' : 'from-black/60 to-transparent'}`}></div>
                            <div className={`absolute bottom-0 left-0 ${i === 0 || i === 3 ? 'p-8' : 'p-6'} w-full`}>
                                {i === 0 && (
                                    <span className="inline-block px-3 py-1 bg-tertiary text-on-tertiary rounded-full font-caption text-caption mb-3 backdrop-blur-sm bg-opacity-80">
                                        Más Vendido
                                    </span>
                                )}
                                <h3 className="font-headline-lg text-headline-lg-mobile text-surface-container-lowest mb-2">
                                    {service.title}
                                </h3>
                                <p className={`font-body-md text-surface-container-lowest/90 ${i === 0 ? 'line-clamp-2 max-w-md' : i === 3 ? 'max-w-sm' : 'text-sm'}`}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
