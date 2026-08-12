import { landingData } from "../config/landing";
import React from "react";

export default function WhatsAppFloat() {
    return (
        <a 
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center" 
            href={landingData.contactLinks.find(l => l.id === "whatsapp")?.href} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <span className="material-symbols-outlined text-3xl">chat</span>
        </a>
    );
}
