import { landingData } from "@/src/config/landing";
import React from "react";

export default function TopBenefits() {
    const icons = ["local_shipping", "support_agent", "verified"];
    
    return (
        <div className="bg-surface-container-low py-6 border-y border-outline-variant/20">
            <div className="max-w-[1140px] mx-auto px-container-padding flex flex-wrap justify-center gap-8 md:gap-16">
                {landingData.topBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-secondary">
                        <span className="material-symbols-outlined text-primary">
                            {icons[i % icons.length]}
                        </span>
                        <span className="font-label-md text-label-md">
                            {benefit}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
