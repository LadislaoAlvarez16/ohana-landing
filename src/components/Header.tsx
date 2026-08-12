import { landingData } from "../config/landing";
import React from "react";

export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
            <div className="flex justify-between items-center px-container-padding py-4 max-w-[1140px] mx-auto w-full">
                <a className="flex items-center gap-2 group" href="#">
                    <img alt="Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" src="/logo.png" />
                    <span className="font-headline-lg text-headline-lg text-primary tracking-wider hidden sm:block">
                        {landingData.brand.split(" ")[0]}
                    </span>
                </a>
                <nav className="hidden md:flex items-center gap-stack-lg">
                    <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md opacity-80 transition-opacity" href="#inicio">Inicio</a>
                    <a className="text-secondary font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#productos">Productos</a>
                    <a className="text-secondary font-medium font-label-md text-label-md hover:text-primary transition-colors duration-300" href="#contacto">Contacto</a>
                </nav>
                <a className="hidden md:flex items-center gap-2 bg-primary text-on-primary px-6 py-2.5 rounded-full font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm" href={landingData.contactLinks.find(l => l.id === "whatsapp")?.href} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    WhatsApp
                </a>
                <button className="md:hidden text-primary p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
