import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://greenvillescfixandflip.loansapp.cfd',
  output: 'server',
  adapter: cloudflare(),
  trailingSlash: 'always',
  build: { format: 'directory' }
});
