import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    root: 'src',
    base: './',
    publicDir: '/src/assets',
    build: {
        outDir: './dist',
        assetsDir: './dist/assets',
        sourcemap: 'inline',
        write: true,
        copyPublicDir: true,
    },
});
