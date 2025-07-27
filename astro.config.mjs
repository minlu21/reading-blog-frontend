// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: 'sss90d9t',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-07-01"
  }), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});