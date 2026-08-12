import { landingData } from "../config/landing";
import React from "react";

export default function Features() {
    const icons = ["volunteer_activism", "air", "forum", "package_2"];
    
    return (
        <section className="bg-surface-container-lowest py-section-gap border-y border-outline-variant/20">
            <div className="max-w-[1140px] mx-auto px-container-padding">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-stack-lg">
                    {landingData.features.map((feature, i) => (
                        <div key={i} className="text-center p-6 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-secondary-fixed flex items-center justify-center mb-4 text-primary">
                                <span className="material-symbols-outlined text-3xl">
                                    {icons[i % icons.length]}
                                </span>
                            </div>
                            <h4 className="font-label-md text-label-md text-primary mb-2">
                                {feature.title}
                            </h4>
                            <p className="font-caption text-caption text-secondary">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
