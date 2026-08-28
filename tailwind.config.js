/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "on-primary-container": "#858383",
        "outline-variant": "#c4c7c7",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#e5e2e1",
        "on-primary-fixed-variant": "#474746",
        "surface-dim": "#dbdada",
        "on-secondary": "#ffffff",
        "on-secondary-fixed-variant": "#5d4201",
        "surface-tint": "#5f5e5e",
        "error": "#ba1a1a",
        "surface-variant": "#e4e2e2",
        "primary-container": "#1c1b1b",
        "on-primary": "#ffffff",
        "tertiary-fixed-dim": "#dec1ac",
        "secondary": "#775a19",
        "on-tertiary-fixed": "#28180b",
        "tertiary-fixed": "#fbddc7",
        "on-tertiary": "#ffffff",
        "on-error": "#ffffff",
        "tertiary": "#000000",
        "primary": "#000000",
        "on-background": "#1b1c1c",
        "on-primary-fixed": "#1c1b1b",
        "primary-fixed-dim": "#c8c6c5",
        "surface": "#fbf9f9",
        "surface-container-low": "#f5f3f3",
        "surface-container-highest": "#e4e2e2",
        "on-surface": "#1b1c1c",
        "error-container": "#ffdad6",
        "on-secondary-fixed": "#261900",
        "on-tertiary-container": "#987f6d",
        "on-tertiary-fixed-variant": "#574333",
        "inverse-on-surface": "#f2f0f0",
        "tertiary-container": "#28180b",
        "inverse-surface": "#303031",
        "surface-container-high": "#e9e8e8",
        "on-error-container": "#93000a",
        "surface-container": "#efeded",
        "inverse-primary": "#c8c6c5",
        "on-surface-variant": "#444748",
        "secondary-fixed-dim": "#e9c176",
        "surface-bright": "#fbf9f9",
        "outline": "#747878",
        "on-secondary-container": "#785a1a",
        "secondary-container": "#fed488",
        "secondary-fixed": "#ffdea5",
        "background": "#fbf9f9",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },

      spacing: {
        gutter: "32px",
        unit: "8px",
        "container-max": "1280px",
        "stack-lg": "80px",
        "stack-md": "48px",
        "margin-mobile": "24px",
        "margin-desktop": "64px",
      },

      fontFamily: {
        "headline-lg": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "label-sm": ["Montserrat", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "body-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "headline-lg-mobile": ["Playfair Display", "serif"],
      },

      fontSize: {
        "headline-lg": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],

        "headline-md": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],

        "label-sm": [
          "12px",
          {
            lineHeight: "16px",
            letterSpacing: "0.1em",
            fontWeight: "600",
          },
        ],

        "display-lg": [
          "72px",
          {
            lineHeight: "84px",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],

        "body-lg": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],

        "body-md": [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "400",
          },
        ],

        "headline-lg-mobile": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "600",
          },
        ],
      },
    },
  },

  plugins: [],
};