import { defineConfig, fontProviders } from "astro/config";

const fontDir = "./src/assets/fonts";

export default defineConfig({
  fonts: [
    {
      // Lauftext / Fließtext
      provider: fontProviders.local(),
      name: "PP Neue Montreal Text",
      cssVariable: "--font-text",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          { src: [`${fontDir}/PPNeueMontrealText-Book.woff2`], weight: "400", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontrealText-BookItalic.woff2`], weight: "400", style: "italic", display: "swap" },
        ],
      },
    },
    {
      // Überschriften / Display
      provider: fontProviders.local(),
      name: "PP Neue Montreal",
      cssVariable: "--font-heading",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          { src: [`${fontDir}/PPNeueMontreal-Hairline.woff2`], weight: "100", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-HairlineItalic.woff2`], weight: "100", style: "italic", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-Light.woff2`], weight: "300", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-LightItalic.woff2`], weight: "300", style: "italic", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-Regular.woff2`], weight: "400", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-Italic.woff2`], weight: "400", style: "italic", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-Semibold.woff2`], weight: "600", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-SemiboldItalic.woff2`], weight: "600", style: "italic", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-Extrabold.woff2`], weight: "800", style: "normal", display: "swap" },
          { src: [`${fontDir}/PPNeueMontreal-ExtraboldItalic.woff2`], weight: "800", style: "italic", display: "swap" },
        ],
      },
    },
  ],
});
