import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: "PP Neue Montreal Text",
      cssVariable: "--font-heading",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontrealText-Book.woff2"],
            weight: "400",
            style: "normal",
            display: "optional",
          },
        ],
      },
    },
  ],
});