import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Path from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

const resolvePath = (path: string) => {
    return Path.resolve(__dirname, path);
};
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
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
    resolve: {
        alias: {
            '@': resolvePath('./src'),
        },
    },
});
