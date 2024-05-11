import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  stylesheets: [
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
  ],

  // Importa JavaScript de Slick Slider
  scripts: [
    {
      type: 'module',
      src: 'node_modules/slick-carousel/slick/slick.min.js',
    },
  ],
});