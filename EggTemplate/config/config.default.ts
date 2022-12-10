import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig>;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1670665952511_4627';

    // add your egg config in here
    config.middleware = [];

    //  安全策略
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true,
        },
        domainWhiteList: [],
    };

    //  跨域配置
    config.cors = {
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
        credentials: true,
        origin: ctx => ctx.get('origin'),
    };

    //	服务监听地址
    config.cluster = {
        // https: {
        //     key: Path.join(__dirname, '../cert/2_51kefu.online.key'),
        //     cert: Path.join(__dirname, '../cert/1_51kefu.online_bundle.crt'),
        // },
        listen: {
            port: 7001,
            hostname: '0.0.0.0',
            path: '',
        },
    };

    // add your special config in here
    const bizConfig = {
        sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
    };

    // the return config will combines to EggAppConfig
    return {
        ...config,
        ...bizConfig,
    };
};
