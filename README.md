# Almacén de Deco — Landing Page

Landing page para **Almacén de Deco**, negocio de decoración e interiorismo para el hogar ubicado en Concordia, Entre Ríos, Argentina.

🔗 Producción: [almacen-del-deco.vercel.app](https://almacen-del-deco.vercel.app)

## Stack

- [Next.js 16](https://nextjs.org) (Pages Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 3](https://tailwindcss.com)
- Diseño visual generado con [Google Stitch 2.0](https://stitch.withgoogle.com) e implementado con [Antigravity](https://antigravity.google)
- Deploy en [Vercel](https://vercel.com)

## Estructura del proyecto

```
src/
├── components/       # Componentes de UI, uno por sección de la landing
│   ├── Layout.tsx     # Envuelve todas las páginas: SEO + Header + main + Footer
│   ├── SEO.tsx         # Metadata, Open Graph, Twitter Cards y JSON-LD LocalBusiness
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── TopBenefits.tsx
│   ├── Gallery.tsx
│   ├── Services.tsx
│   ├── Steps.tsx
│   ├── Features.tsx
│   ├── BeforeAfter.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── config/
│   └── landing.ts     # Todo el contenido editable: textos, links, imágenes, testimonios
├── pages/
│   ├── _app.tsx        # Envuelve la app con Layout
│   ├── _document.tsx
│   └── index.tsx       # Arma la página uniendo las secciones/componentes
└── styles/
    └── globals.css

public/                # Imágenes y assets estáticos (hero, galería, logo, etc.)
```

### Cómo editar contenido

La gran mayoría de los textos, links y rutas de imágenes de la landing viven en **`src/config/landing.ts`**. Para cambiar un texto, un link de contacto/redes, o qué imágenes se muestran, alcanza con editar ese archivo — no hace falta tocar los componentes.

Los componentes en `src/components/` solo definen la estructura visual (JSX + clases de Tailwind) y consumen los datos de `landing.ts`.

## Desarrollo local

Requiere Node.js 18+.

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) para ver el resultado. La página se actualiza automáticamente al guardar cambios.

Otros comandos:

```bash
npm run build   # build de producción
npm run start   # levanta el build de producción
npm run lint    # corre ESLint
```

## Deploy

El proyecto se despliega automáticamente en [Vercel](https://vercel.com) con cada push a la rama principal.

## Pendientes conocidos

- Completar `email` y `phone` en `contactLinks` dentro de `src/config/landing.ts` (actualmente vacíos)
- Revisar las rutas de imágenes en `beforeAfter` (`/before1.jpg`, `/after1.jpg`) — no coinciden con archivos existentes en `public/`