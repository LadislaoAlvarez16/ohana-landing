import { landingData } from "../config/landing";
import React from "react";

export default function Steps() {
    return (
        <section className="py-section-gap">
            <div className="max-w-[1140px] mx-auto px-container-padding">
                <div className="text-center mb-16">
                    <h2 className="font-headline-lg text-headline-lg text-primary mb-4">¿Cómo comprar?</h2>
                    <div className="w-16 h-[1px] bg-outline-variant mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start relative max-w-4xl mx-auto">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-6 left-0 w-full h-[2px] bg-outline-variant/30 -z-10"></div>
                    
                    {landingData.steps.map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center bg-background px-4 z-10 w-full md:w-1/3 mb-8 md:mb-0">
                                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-lg mb-4 shadow-sm">
                                    {i + 1}
                                </div>
                                <h4 className="font-label-md text-label-md text-primary text-center mb-2">
                                    {step.title}
                                </h4>
                                <p className="font-caption text-caption text-secondary text-center">
                                    {step.desc}
                                </p>
                            </div>
                            {i < landingData.steps.length - 1 && (
                                <div className="hidden md:block w-px h-8 bg-outline-variant/30 md:hidden my-2"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
