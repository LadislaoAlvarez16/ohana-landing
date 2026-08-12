import { landingData } from "../config/landing";
import React from "react";

export default function CTA() {
    return (
        <section className="bg-surface-container-low py-24 relative overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="max-w-3xl mx-auto px-container-padding text-center relative z-10">
                <h2 className="font-headline-xl text-headline-xl md:text-4xl text-primary mb-8 leading-tight">
                    {landingData.CTA.title}
                </h2>
                <a className="inline-block bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-lg shadow-primary/20 min-h-[48px]" href="https://api.whatsapp.com/send/?phone=5493456256985&text=Hola!%20Quiero%20conocer%20m%C3%A1s%20sobre%20los%20productos%20y%20hacer%20un%20pedido." target="_blank" rel="noopener noreferrer">
                    {landingData.CTA.button}
                </a>
            </div>
        </section>
    );
}
