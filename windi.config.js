import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["src/**/*.{svelte,html,js}"],
    exclude: ["node_modules/**/*"],
  },
  safelist: [],
  theme: {
    extend: {
      colors: {
        pallete: {
          100: "#222831",
          200: "#00ace6",
          300: "#e6e6e5",
        },
      },
    },
    screens: {
      sm: "1280px",
      md: "1920px",
      lg: "2560px",
      xl: "3440px",
      "2xl": "3840px",
    },
  },
});
