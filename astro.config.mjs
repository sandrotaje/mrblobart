import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mrblobart.com',
  integrations: [sitemap()],
  output: 'static',
});
