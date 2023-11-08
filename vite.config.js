import { VitePWA } from 'vite-plugin-pwa'
const urlBase = "/bbva-exercise";

export default {
  root: './src',
  base: urlBase,
  build: {
    outDir: '../dist',
  },
  plugins: [
    VitePWA({
      manifest: {
        icons: [
          {
            src: `${urlBase}/icons/android-chrome-36x36.png`,
            sizes: "36x36",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-48x48.png`,
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-72x72.png`,
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-96x96.png`,
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-144x144.png`,
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-192x192.png`,
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: `${urlBase}/icons/android-chrome-256x256.png`,
            sizes: "256x256",
            type: "image/png"
          }
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
      }
    })
  ],
  server: {
    host: '0.0.0.0'
  }
};