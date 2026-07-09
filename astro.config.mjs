import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mrblobart.com',
  integrations: [sitemap()],
  output: 'static',
  // Old numeric artwork URLs (indexed by search engines) → new SEO slugs
  redirects: {
    '/walls/1': '/walls/desperate-world',
    '/walls/2': '/walls/50th-hip-hop',
    '/walls/3': '/walls/freestyle-167b-street-lecce',
    '/walls/4': '/walls/tree-of-life',
    '/walls/5': '/walls/collaboration-with-mate-chieri',
    '/walls/6': '/walls/more-fire',
    '/walls/7': '/walls/blobworld',
    '/walls/8': '/walls/inverted-blobworld',
    '/walls/9': '/walls',
    '/walls/10': '/walls/esho-funi',
    '/walls/11': '/walls/wynwood-private-wall-2021',
    '/walls/12': '/walls/wynwood-mural-fest-2021',
    '/walls/13': '/walls/stop-plastic',
    '/walls/14': '/walls',
    '/walls/15': '/walls/tribute-to-5pointz',
    '/walls/16': '/walls/gargoyle',
    '/walls/17': '/walls/blove',
    '/walls/18': '/walls/good',
    '/canvas/1': '/canvas/my-hypnotic-friend',
    '/canvas/2': '/canvas/the-hopeless-romantic',
    '/canvas/3': '/canvas/habemus-blob',
    '/canvas/4': '/canvas/souls-coffer',
    '/canvas/5': '/canvas/earth-queen',
    '/canvas/6': '/canvas/waterprince',
  },
});
