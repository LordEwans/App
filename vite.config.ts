import { defineConfig } from 'vite';
import godotPlugin from 'vite-plugin-godot';

export default defineConfig({
  plugins: [
    godotPlugin({
      // Set this to your exported name
      projectName: 'example2d',
      // Reload the page when detected changes in main.js
      reload: ['src/main.js'],
    }),
  ],
});