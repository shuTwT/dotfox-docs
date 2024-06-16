import { defineConfig } from 'astro/config';

import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import alpine from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'dotfox保姆级文档',
    }),
    tailwind(),
    alpine({ entrypoint: '/src/entrypoint' })
  ]
});