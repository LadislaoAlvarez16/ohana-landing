import { landingData } from "@/src/config/landing";
import React from "react";

export default function Hero() {
    const hero = landingData.hero;

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden" id="inicio">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10"></div>
                <img alt="Hero Background" className="w-full h-full object-cover" src={hero.image} />
            </div>
            <div className="relative z-20 max-w-[1140px] mx-auto px-container-padding text-center">
                <div className="bg-surface/85 backdrop-blur-md border border-outline-variant/30 p-8 md:p-12 rounded-2xl max-w-3xl mx-auto shadow-[0_10px_30px_rgba(166,93,71,0.08)]">
                    <h1 className="font-headline-xl text-headline-lg-mobile md:text-5xl text-primary mb-6">
                        {hero.title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-secondary mb-8 max-w-2xl mx-auto">
                        {hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-md min-h-[48px] flex items-center justify-center" href="#productos">
                            {hero.primaryCTA}
                        </a>
                        <a className="w-full sm:w-auto bg-transparent text-primary border border-primary px-8 py-4 rounded-full font-label-md text-label-md hover:bg-primary-fixed transition-colors min-h-[48px] flex items-center justify-center" href="#contacto">
                            {hero.secondaryCTA}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
