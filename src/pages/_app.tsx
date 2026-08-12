import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/src/components/Layout";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
    display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plus-jakarta-sans",
    display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${playfairDisplay.variable} ${plusJakartaSans.variable}`}>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </div>
    );
}
