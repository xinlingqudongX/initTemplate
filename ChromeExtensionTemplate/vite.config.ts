import { defineConfig } from 'vite';
import debug from 'vite-plugin-debug';
import ManifestPlugin from './plugins/manifest_plugin';

export default defineConfig({
    plugins: [ManifestPlugin(), debug({ enabled: true })],
    root: './src',
    base: './',
    server: {
        host: '0.0.0.0',
        port: 8080,
    },
    publicDir: './src/assets',
    build: {
        outDir: '../dist',
        assetsDir: '../dist/assets',
        sourcemap: 'inline',
        write: true,
        copyPublicDir: true,
        rollupOptions: {
            input: [
                './src/manifest.ts',
                './src/background.ts',
                './src/content.ts',
                './src/option.ts',
            ],
            output: {
                entryFileNames: '[name].js',
            },
        },
        emptyOutDir: true,
    },
    assetsInclude: ['**/*'],
    appType: 'custom',
});
