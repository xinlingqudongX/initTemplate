import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    publicDir: 'public',
    server: {
        port: 8080,
        host: '0.0.0.0',
    },
    base: './',
    build: {
        outDir: Path.join(__dirname, 'dist'),
        emptyOutDir: true,
    },
    root: Path.join(__dirname, 'src'),
});
