import node from '@astrojs/node';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  output: 'server',
  integrations: [
    react()
  ],
  vite: {
    esbuild: {
      legalComments: 'none',
      treeShaking: true
    }
  }
});
