import type { Config } from "tailwindcss";
import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#faf9f6",
        "surface-dim": "#dbdad7",
        "surface-bright": "#faf9f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f3f1",
        "surface-container": "#efeeeb",
        "surface-container-high": "#e9e8e5",
        "surface-container-highest": "#e3e2e0",
        "on-surface": "#1a1c1a",
        "on-surface-variant": "#53433e",
        "inverse-surface": "#2f312f",
        "inverse-on-surface": "#f2f1ee",
        "outline": "#86736d",
        "outline-variant": "#d9c1bb",
        "surface-tint": "#904b36",
        "primary": "#884531",
        "on-primary": "#ffffff",
        "primary-container": "#a65d47",
        "on-primary-container": "#fff4f1",
        "inverse-primary": "#ffb59f",
        "secondary": "#6b5c4c",
        "on-secondary": "#ffffff",
        "secondary-container": "#f4dfcb",
        "on-secondary-container": "#716252",
        "tertiary": "#5e5851",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#777069",
        "on-tertiary-container": "#fff5ed",
        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        "primary-fixed": "#ffdbd1",
        "primary-fixed-dim": "#ffb59f",
        "on-primary-fixed": "#3a0a00",
        "on-primary-fixed-variant": "#733521",
        "secondary-fixed": "#f4dfcb",
        "secondary-fixed-dim": "#d7c3b0",
        "on-secondary-fixed": "#241a0e",
        "on-secondary-fixed-variant": "#524436",
        "tertiary-fixed": "#ebe1d8",
        "tertiary-fixed-dim": "#cec5bc",
        "on-tertiary-fixed": "#1f1b16",
        "on-tertiary-fixed-variant": "#4c463f",
        "background": "#faf9f6",
        "on-background": "#1a1c1a",
        "surface-variant": "#e3e2e0"
      },
      borderRadius: {
        "sm": "0.25rem",
        "DEFAULT": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      spacing: {
        "base": "8px",
        "container-padding": "24px",
        "gutter": "16px",
        "section-gap": "80px",
        "stack-sm": "4px",
        "stack-md": "12px",
        "stack-lg": "24px",
        "container-max": "1280px"
      },
      fontFamily: {
        "body-lg": ["var(--font-plus-jakarta-sans)"],
        "body-md": ["var(--font-plus-jakarta-sans)"],
        "label-md": ["var(--font-plus-jakarta-sans)"],
        "caption": ["var(--font-plus-jakarta-sans)"],
        "headline-xl": ["var(--font-playfair-display)"],
        "headline-lg": ["var(--font-playfair-display)"],
        "headline-lg-mobile": ["var(--font-playfair-display)"]
      },
      fontSize: {
        "headline-xl": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-lg": ["32px", { "lineHeight": "1.3", "fontWeight": "500" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.3", "fontWeight": "500" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "caption": ["12px", { "lineHeight": "1.4", "fontWeight": "400" }]
      }
    }
  },
  plugins: [
    forms,
    containerQueries
  ],
};
export default config;
