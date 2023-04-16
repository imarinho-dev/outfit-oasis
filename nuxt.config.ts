// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-quasar-ui"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
  },
  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900],
      Raleway: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
  quasar: {
    plugins: ["Notify"],
    extras: {
      font: null,
      fontIcons: ["material-icons", "fontawesome-v6"],
      svgIcons: [],
      animations: [],
    },
  },
});
