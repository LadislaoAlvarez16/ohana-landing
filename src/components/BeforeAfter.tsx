import React from "react";

export default function BeforeAfter() {
    return (
        <section className="py-section-gap px-container-padding bg-surface-container-lowest" id="transformacion">
            <div className="max-w-[1140px] mx-auto w-full">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="font-headline-lg text-headline-lg md:text-4xl text-primary mb-4">El antes y el después</h2>
                    <p className="font-body-md text-body-md text-secondary">
                        Descubrí cómo un detalle aromático puede cambiar por completo la esencia de tus espacios.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                    {/* Antes */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-md border border-outline-variant/30">
                        <img src="/antes.png" alt="Antes" className="w-full h-full object-cover grayscale brightness-75 opacity-90 transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full font-label-md text-sm shadow-sm font-semibold border border-primary/10">
                            Antes
                        </div>
                    </div>
                    {/* Después */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-md border border-outline-variant/30">
                        <img src="/despues.png" alt="Después" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-on-primary px-4 py-1.5 rounded-full font-label-md text-sm shadow-sm font-semibold border border-primary-container/20">
                            Después
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
