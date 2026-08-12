export const landingData = {
    brand: "OHANA aromas de familia",
    location: "Concordia, Entre Ríos.", // Kept generic based on previous location or can be removed if not specified, but the template uses it. Let's just put something or empty.
    footerText: "OHANA Aromas de Familia — Hecho con amor",

    social: [
        { id: "Facebook", href: "https://www.facebook.com/ohanaaromasok" },
        { id: "Instagram", href: "https://www.instagram.com/ohana.aromas.ok/" },
        { id: "TikTok", href: "#" },
    ],

    contactLinks: [
        { id: "whatsapp", href: "https://api.whatsapp.com/send/?phone=5493456256985&text&type=phone_number&app_absent=0" },
        { id: "email", href: "mailto:alitcia2025@gmail.com" },
        { id: "phone", href: "tel:+5493454118080" },
    ],

    topBenefits: [
        "Consultar por envío",
        "Atención personalizada",
    ],

    hero: {
        title: "Aromas que sienten como hogar",
        subtitle:
            "Transformá tus espacios con la calidez de nuestras fragancias artesanales. Cada aroma es una invitación a la calma y al reencuentro.",
        primaryCTA: "Ver catálogo",
        secondaryCTA: "Contactanos",
        image: "/hero.jpg",
    },

    gallery: [
        "/galeria-1.jpg",
        "/galeria-2.jpg",
        "/galeria-3.jpg",
    ],

    features: [
        {
            title: "Hecho a mano",
            desc: "Cada producto es único, elaborado con dedicación artesanal.",
        },
        {
            title: "Aromas de larga duración",
            desc: "Esencias premium que garantizan una experiencia olfativa superior.",
        },
        {
            title: "Atención personalizada",
            desc: "Te asesoramos para encontrar tu aroma ideal.",
        },
        {
            title: "Consultar por envío",
            desc: "Llevamos la calidad de Ohana a cualquier rincón.",
        },
    ],

    steps: [
        { number: "01", title: "Elegí tu aroma", desc: "Explorá el catálogo y encontrá el que más te representa." },
        { number: "02", title: "Hacé tu pedido", desc: "Contactanos por WhatsApp o redes para coordinar." },
        { number: "03", title: "Recibilo en tu casa", desc: "Te lo enviamos con cuidado, listo para disfrutar." },
    ],

    CTA: {
        title: "¿Lista para llenar tu hogar de aromas que abrazan?",
        desc: "", // Left blank since there was no description provided in CTA
        button: "Quiero el mío",
    },

    services: [
        {
            title: "Velas aromáticas",
            desc: "Elaboradas con cera de soja natural y pabilos de algodón. Aromas intensos que perduran y transforman cualquier ambiente.",
            image: "/servicio-homespray.jpg"
        },
        {
            title: "Difusores",
            desc: "Fragancia continua y elegante para tus espacios.",
            image: "/servicio-difusores.jpg"
        },
        {
            title: "Jabones artesanales",
            desc: "Jabones elaborados a mano con ingredientes naturales para el cuidado de tu piel.",
            image: "/servicio-anexos.jpg"
        },
        {
            title: "Home spray",
            desc: "Frescura instantánea para textiles y ambientes.",
            image: "/servicio-homespray-nuevo.png"
        }
    ],

};
