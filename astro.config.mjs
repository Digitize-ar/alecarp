// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  // Agrega la configuración para el renderizador de React
  // En este ejemplo, se habilita el renderizador de React
  // Puedes personalizarlo según tus necesidades
  // Si no usas TypeScript, cambia '@astro/typescript' a '@astro/javascript'
  renderers: ['@astro/typescript', '@astro/react'],
  integrations: [react(), tailwind()],
  output: "server",
  adapter: netlify()
});