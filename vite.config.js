import { resolve } from 'path';
import { defineConfig } from 'vite';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import { createVuePlugin as vue } from "vite-plugin-vue2";
import svg from 'vite-plugin-vue-svg';
import radar from 'vite-plugin-radar';

export default defineConfig({
  plugins: [
    vue(),
    svg(),
    pwa({ workbox: { cleanupOutdatedCaches: true, skipWaiting: true, clientsClaim: true } }),
    radar({
      analytics: { id: 'G-XXXXX' },
      gtm: [{ id: 'GTM-XXXXX' }],
      pixel: [{ id: 'XXXXXXX' }],
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '~', replacement: resolve(__dirname, 'node_modules') },
    ],
  },
});
