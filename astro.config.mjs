import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// Import the Vercel adapter
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://reijane.github.io',
  base: '/',
  integrations: [tailwind(), sitemap()],
  output: 'static'
});
