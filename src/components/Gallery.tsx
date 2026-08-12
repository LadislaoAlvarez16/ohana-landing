import React from "react";
import { landingData } from "../config/landing";

export default function Gallery() {
    const alts = ["Velas en ambiente", "Difusor de aromas", "Detalle de vela"];
    return (
        <section className="py-section-gap px-container-padding max-w-[1140px] mx-auto scroll-mt-20" id="galeria">
            <div className="text-center mb-16">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Nuestros Espacios</h2>
                <div className="w-16 h-[1px] bg-outline-variant mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {landingData.gallery.map((image, index) => (
                    <img 
                        key={index}
                        alt={alts[index] || `Espacio ${index + 1}`}
                        className="w-full h-80 object-cover rounded-2xl shadow-ambient hover:opacity-90 transition-opacity" 
                        src={image} 
                    />
                ))}
            </div>
        </section>
    );
}
