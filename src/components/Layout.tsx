import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import WhatsAppFloat from "./WhatsAppFloat";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <SEO />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
