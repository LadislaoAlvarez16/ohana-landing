import Head from "next/head";
import { landingData } from "../config/landing";

export default function SEO() {
    const phoneObj = landingData.contactLinks?.find((l) => l.id === "phone");
    const phone = phoneObj ? phoneObj.href.replace("tel:", "") : "";
    const ogImageFallback = "/logo.png"; // Using new logo as fallback

    return (
        <Head>
            <title>{`${landingData.brand} – Diseño & Decoración`}</title>
            <meta name="description" content={landingData.hero.subtitle} />

            {/* ==== FAVICONS ==== */}
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="icon" href="/icon.png" type="image/png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* ==== OPEN GRAPH ==== */}
            <meta property="og:title" content={`${landingData.brand} – Diseño & Decoración`} />
            <meta property="og:description" content={landingData.hero.subtitle} />
            <meta property="og:image" content={ogImageFallback} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="es_AR" />
            <meta property="og:site_name" content={landingData.brand} />

            {/* ==== TWITTER CARDS ==== */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${landingData.brand} – Diseño & Decoración`} />
            <meta name="twitter:description" content={landingData.hero.subtitle} />
            <meta name="twitter:image" content={ogImageFallback} />

            {/* ==== SCHEMA LOCAL BUSINESS ==== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        name: landingData.brand,
                        telephone: phone || "",
                        image: ogImageFallback,
                        address: {
                            "@type": "PostalAddress",
                            streetAddress: landingData.location,
                            addressLocality: "Entre Ríos",
                            addressRegion: "ER",
                            addressCountry: "AR",
                        },
                    }),
                }}
            />
        </Head>
    );
}
