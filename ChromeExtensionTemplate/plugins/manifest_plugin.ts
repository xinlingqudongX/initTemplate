import { ConfigEnv, UserConfig } from 'vite';

export default function () {
    let config: any;

    return {
        name: 'manifest_build',
        buildStart(options: any) {
            console.log(options);
        },
        config(config: any, params: any) {
            console.log(config);
        },
        configResolved(resolvedConfig: any) {},
        // transform() {
        //     console.log('transform');
        // },
        resolveId(id: any) {
            console.log(id);
        },
        load(id: any) {
            console.log(id);
        },
        handleHotUpdate(ctx: any) {
            console.log(ctx);
        },
        watchChange() {
            console.log('change');
        },
        closeWatcher() {
            console.log('close watcher');
        },
    };
}
