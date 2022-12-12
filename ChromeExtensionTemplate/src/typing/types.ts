export interface manifest {
    /** 一个整数，指定您的包所需的清单文件格式的版本
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/manifest_version/
     */
    manifest_version: 3;
    /** name和清单属性short_name是用于标识扩展的简短纯文本字符串
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/name/
     */
    name: string;
    /** 一到四个点分隔的整数，用于标识此扩展的版本
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/version/
     */
    version: string;
    /** 使用chrome.actionAPI 控制 Google Chrome 工具栏中的扩展程序图标
     * @see https://developer.chrome.com/docs/extensions/reference/action/
     */
    action?: {
        /** 图标 */
        default_icon?: {
            '16'?: string;
            '24'?: string;
            '32'?: string;
        };
        /** 提示标题 */
        default_title?: string;
        /** 窗口网页地址 */
        default_popup?: string;
    };
    /** 默认语言环境
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/default_locale/
     */
    default_locale?: string;
    /**
     * 描述扩展的纯文本字符串（无 HTML 或其他格式；不超过 132 个字符）
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/description/
     */
    description?: string;
    /**
     * 代表扩展或主题的一个或多个图标
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    icons?: {
        '16': string;
        '32': string;
        '48': string;
        '128': string;
    };
    /** 作者 */
    author?: string;
    /** 自动化 */
    automation?: string;
    /** 扩展程序是基于事件的程序，用于修改或增强 Chrome 浏览体验
     * @see https://developer.chrome.com/docs/extensions/mv3/service_workers/
     */
    background?: {
        service_worker: string;
        type?: 'module';
    };
    /** 设置覆盖是扩展程序覆盖所选 Chrome 设置的一种方式
     * @see https://developer.chrome.com/docs/extensions/mv3/settings_override/
     */
    chrome_settings_overrides?: {
        /** 主页 */
        homepage?: string;
        /** 搜索引擎 */
        search_provider?: {
            name: string;
            keyword: string;
            search_url: string;
            favicon_url: string;
            suggest_url: string;
            instant_url: string;
            image_url: string;
            search_url_post_params: string;
            suggest_url_post_params: string;
            instant_url_post_params: string;
            image_url_post_params: string;
            alternate_urls: Array<string>;
            encoding: 'UTF-8';
            is_default: true;
        };
        /** 一个长度为 1 的数组，其中包含用作启动页面的 URL */
        startup_pages: [string];
    };
    /** 未知 */
    chrome_url_overrides?: {};
    /**使用命令 API 添加触发扩展中操作的键盘快捷键
     * @see https://developer.chrome.com/docs/extensions/reference/commands/
     */
    commands?: {
        [key: string]: {
            suggested_key: {
                default: string;
                mac?: string;
                windows?: string;
                chromeos?: string;
                linux?: string;
            };
            description: string;
            global?: true;
        };
    };
    /** 未知 */
    content_capabilities?: string;
    /** 内容脚本是在网页上下文中运行的文件
     * @see https://developer.chrome.com/docs/extensions/mv3/content_scripts/
     */
    content_scripts?: Array<{
        /** 指定此内容脚本将被注入到哪些页面 */
        matches: Array<string>;
        /** 要注入匹配页面的 CSS 文件列表  */
        css: Array<string>;
        /** 要注入匹配页面的 JavaScript 文件列表 */
        js: Array<string>;
        /** 脚本是否应该注入about:blank父框架或开启者框架与中声明的模式之一相匹配的框架matches */
        match_about_blank?: boolean;
        /** 脚本是否应注入由匹配源创建但其 URL 或源可能不直接匹配模式的帧 */
        match_origin_as_fallback?: boolean;
    }>;
    /** 扩展的内容安全策略
     * @see https://developer.chrome.com/docs/extensions/mv3/mv3-migration/#content-security-policy
     */
    content_security_policy?: {
        extension_pages: string;
        sandbox?: string;
    };
    /** 未知 */
    converted_from_user_script?: string;
    /** 清单键允许扩展程序为对扩展程序来源的请求
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    cross_origin_embedder_policy?: {
        value: string;
    };
    /** manifest key 允许扩展为扩展源请求的
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    cross_origin_opener_policy?: {
        value: string;
    };
    /** 未知 */
    current_locale?: string;
    /** 未知 */
    declarate_net_request?: {};
    /**
     * DevTools 扩展为 Chrome DevTools 添加了功能
     * @see https://developer.chrome.com/docs/extensions/mv3/devtools/
     */
    devtools_page?: string;
    /** 未知 */
    differential_fingerprint?: string;
    /** manifest属性提供了一种机制来添加规则
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/event_rules/
     */
    event_rules?: Array<{
        event: string;
        actions: Array<{
            type: string;
        }>;
        conditions: Array<{
            type: string;
            css: Array<string>;
        }>;
    }>;
    /** 清单externally_connectable属性声明哪些扩展程序、应用程序和网页可以通过runtime.connect和runtime.sendMessage连接到您的扩展程序
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/externally_connectable/
     */
    externally_connectable?: {
        /** 允许连接的扩展程序或应用程序的 ID。如果留空或未指定，则无法连接任何扩展程序或应用程序 */
        ids?: Array<string>;
        /** 允许连接的网页的 URL 模式。这不会影响内容脚本。如果留空或未指定，则无法连接任何网页 */
        matches?: Array<string>;
        accepts_tls_channel_id?: boolean;
    };
    /** 使用chrome.fileBrowserHandlerAPI 扩展 Chrome OS 文件浏览器
     * @see https://developer.chrome.com/docs/extensions/reference/fileBrowserHandler/
     */
    file_browser_handles?: Array<{
        id: string;
        default_title: string;
        file_filter: Array<string>;
    }>;
    /** 使用chrome.fileSystemProviderAPI 创建文件系统
     * @see https://developer.chrome.com/docs/extensions/reference/fileSystemProvider/
     */
    file_system_provider_capabilities?: {
        /** 是否支持通过onConfigureRequested 配置 */
        configurable?: boolean;
        /** 是否支持设置观察者和通知变化 */
        watchable?: boolean;
        /** 是否支持多个（多个）挂载的文件系统 */
        multiple_mounts: true;
        /** 挂载文件系统的数据源 */
        source: 'network' | 'file' | 'device';
    };
    /** 主页链接地址 */
    homepage_url?: string;
    /** 使用API在运行时而不是在安装时chrome.permissions请求声明的可选权限
     * @see https://developer.chrome.com/docs/extensions/reference/permissions/
     */
    host_permissions?: Array<string>;
    /** 共享模块是无需许可的资源集合，可以在其他扩展程序和应用程序之间共享
     * @see https://developer.chrome.com/docs/extensions/mv2/getstarted/
     */
    import?: Array<{
        id: string;
        minimum_version?: string;
    }>;
    /** 共享模块是无需许可的资源集合，可以在其他扩展程序和应用程序之间共享
     * @see https://developer.chrome.com/docs/extensions/mv2/getstarted/
     */
    export?: {
        allowlist: Array<string>;
    };
    /** "incognito"将清单键与"spanning"或 一起使用"split"，以指定如果允许以隐身模式运行此扩展程序的行为方式
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    incognito?: string;
    /** 未知 */
    input_components?: string;
    /** 该值可用于控制在开发期间加载扩展、应用程序或主题时的唯一 ID
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/key/
     */
    key?: string;
    /** 未知 */
    minimum_chrome_version?: string;
    /** 从 MIME 类型到处理每种类型的 Native Client 模块的一个或多个映射
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    nacl_modules?: Array<{
        /** Native Client 清单（文件）在扩展目录中的位置 */
        path: string;
        /**  MIME 类型 */
        mime_type: string;
    }>;
    /** 未知 */
    natively_connectable?: string;
    /** 未知 */
    oauth2?: string;
    offline_enabled?: true;
    /** 多功能框 API 允许您使用 Google Chrome 的地址栏注册关键字，也称为多功能框
     * @see https://developer.chrome.com/docs/extensions/reference/omnibox/
     */
    omnibox?: {
        [key: string]: string;
    };
    /** 使用与权限字段相同的格式，使用密钥在您的扩展清单中声明可选权限
     * @see https://developer.chrome.com/docs/extensions/reference/permissions/
     */
    optional_host_permissions?: Array<string>;
    /** 使用与权限字段相同的格式，使用密钥在您的扩展清单中声明可选权限
     * @see https://developer.chrome.com/docs/extensions/reference/permissions/
     */
    optional_permissions?: Array<string>;
    /** 允许用户通过提供选项页面来自定义扩展的行为
     * @see https://developer.chrome.com/docs/extensions/mv3/options/
     */
    options_page?: string;
    /** 允许用户通过提供选项页面来自定义扩展的行为 */
    options_ui?: {
        page: string;
        open_in_table: boolean;
    };
    /** 确定哪些权限是必需的
     * @see https://developer.chrome.com/docs/extensions/reference/permissions/
     */
    permissions?: Array<Permissions>;
    /** 未知 */
    platforms?: string;
    /** 未知 */
    replacement_web_app?: string;
    /** 扩展所需的技术
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/requirements/
     */
    requirements?: {
        '3D': {
            features: Array<'webgl'>;
        };
    };
    /** 定义要在沙盒唯一源中提供的扩展页面集合 */
    sandbox?: {
        pages: Array<string>;
    };
    /** name和清单属性short_name是用于标识扩展的简短纯文本字符串 */
    short_name?: string;
    /** local与存储区不同的是sync
     * @see https://developer.chrome.com/docs/extensions/mv3/manifest/storage/
     */
    storage?: {
        [key: string]: string;
    };
    /** 未知 */
    system_indicator?: string;
    /** 使用chrome.ttsEngineAPI 通过扩展实现文本转语音 (TTS) 引擎
     * @see https://developer.chrome.com/docs/extensions/reference/ttsEngine/
     */
    tts_engine?: {
        voices: Array<{
            voice_name: string;
            lang: string;
            event_type: Array<
                'start' | 'marker' | 'end' | 'word' | 'sentence' | 'error'
            >;
        }>;
    };
    /** 分机托管
     * @see https://developer.chrome.com/docs/extensions/mv3/external_extensions/
     */
    updte_url?: string;
    /** 除了用于更新目的的版本字段之外，version_name 可以设置为描述性版本字符串
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    version_name?: string;
    /** Web 可访问资源是扩展中的文件，可以通过网页或其他扩展访问
     * @see https://developer.chrome.com/docs/extensions/mv3/architecture-overview/
     */
    web_accessible_resources?: Array<{
        resources: Array<string>;
        matches: Array<string>;
        extension_ids: Array<string>;
        use_dynamic_url: boolean;
    }>;
}

/** chrome extension权限枚举
 * @see https://developer.chrome.com/docs/extensions/reference/permissions/
 */
export enum Permissions {
    /** 请求根据activeTab规范授予扩展权限 */
    activeTab = 'activeTab',
    /** 使您的扩展程序可以访问chrome.alarms API */
    alarms = 'alarms',
    /** 使 Chrome 早启动晚关闭，这样扩展程序可以有更长的生命周期 */
    background = 'background',
    /** 	使您的扩展程序可以访问chrome.bookmarks API */
    bookmarks = 'bookmarks',
    /** 	使您的扩展程序可以访问chrome.browsingData API */
    browsingData = 'browsingData',
    /** 使您的扩展程序可以访问chrome.certificateProvider API */
    certificateProvider = 'certificateProvider',
    /** 如果扩展使用document.execCommand('paste') */
    clipboardRead = 'clipboardRead',
    /** 如果扩展使用document.execCommand('copy')or 则必需document.execCommand('cut') */
    clipboardWrite = 'clipboardWrite',
    /** 使您的扩展程序可以访问chrome.contentSettings API */
    contentSettings = 'contentSettings',
    /** 使您的扩展程序可以访问chrome.contextMenus API */
    contextMenus = 'contextMenus',
    /** 使您的扩展程序可以访问chrome.cookies API */
    cookies = 'cookies',
    /** chrome.debugger API 用作 Chrome远程调试协议的替代传输 */
    debugger = 'debugger',
    /** 使您的扩展程序可以访问chrome.declarativeContent API */
    declarativeContent = 'declarativeContent',
    /** 授予扩展访问chrome.declarativeNetRequest API 的权限 */
    declarativeNetRequest = 'declarativeNetRequest',
    /** 授予扩展程序访问chrome.declarativeNetRequest API 中的事件和方法的权限 */
    declarativeNetRequestFeedback = 'declarativeNetRequestFeedback',
    /** 使您的扩展程序能够访问chrome.desktopCapture API */
    desktopCapture = 'desktopCapture',
    /** 使您的扩展程序可以访问chrome.documentScan API */
    documentScan = 'documentScan',
    /** 使您的扩展程序可以访问chrome.downloads API */
    downloads = 'downloads',
    /** 允许扩展以扩展Chrome DevTools功能 */
    devtools = 'devtools',
    /** 仅限Canary和Dev 频道。授予扩展程序访问chrome.experimental API 的权限 */
    experimental = 'experimental',
    /** 使您的扩展程序可以访问chrome.fileBrowserHandler API */
    fileBrowserHandler = 'fileBrowserHandler',
    /** 使您的扩展程序可以访问chrome.fileSystemProvider API */
    fileSystemProvider = 'fileSystemProvider',
    /** 使您的扩展程序可以访问chrome.fontSettings API */
    fontSettings = 'fontSettings',
    /** 使您的扩展程序可以访问chrome.gcm API */
    gcm = 'gcm',
    /** 允许扩展程序使用 HTML5地理定位API */
    geolocation = 'geolocation',
    /** 使您的扩展程序可以访问chrome.history API */
    history = 'history',
    /** 使您的扩展程序可以访问chrome.identity API */
    identity = 'identity',
    /** 使您的扩展程序可以访问chrome.idle API */
    idle = 'idle',
    /** 使您的扩展程序可以访问chrome.loginState API */
    loginState = 'loginState',
    /** 使您的扩展程序可以访问chrome.management API */
    management = 'management',
    /** 授予扩展访问chrome.mdns API 的权限 */
    mdns = 'mdns',
    /** 使您的扩展程序可以访问本机消息传递 API */
    nativeMessaging = 'nativeMessaging',
    /** 使您的扩展程序可以访问chrome.notifications API */
    notifications = 'notifications',
    /** 使您的扩展程序可以访问chrome.pageCapture API */
    pageCapture = 'pageCapture',
    /** 使您的扩展程序可以访问chrome.platformKeys API */
    platformKeys = 'platformKeys',
    /** 使您的扩展程序可以访问chrome.power API */
    power = 'power',
    /** 使您的扩展程序可以访问chrome.printerProvider API */
    printerProvider = 'printerProvider',
    /** 使您的扩展程序可以访问chrome.printing API */
    printing = 'printing',
    /** 使您的扩展程序可以访问chrome.printingMetrics API */
    printingMetrics = 'printingMetrics',
    /** 使您的扩展程序可以访问chrome.privacy API */
    privacy = 'privacy',
    /** 使您的扩展程序可以访问chrome.processes API */
    processes = 'processes',
    /** 授予扩展程序访问chrome.proxy API 的权限，以管理 Chrome 的代理设置 */
    proxy = 'proxy',
    /** 使您的扩展程序可以访问chrome.scripting API */
    scripting = 'scripting',
    /** 使您的扩展程序可以访问chrome.search API */
    search = 'search',
    /** 使您的扩展程序可以访问chrome.sessions API */
    sessions = 'sessions',
    /** 使您的扩展程序可以访问chrome.signedInDevices API */
    signedInDevices = 'signedInDevices',
    /** 使您的扩展程序可以访问chrome.storage API */
    storage = 'storage',
    /** 使您的扩展程序可以访问chrome.tabCapture API */
    tabCapture = 'tabCapture',
    /** 使您的扩展程序可以访问chrome.tabGroups API */
    tabGroups = 'tabGroups',
    /** 使您的扩展程序可以访问Tab多个 API 使用的对象的特权字段 */
    tabs = 'tabs',
    /** 使您的扩展程序可以访问chrome.topSites API */
    topSites = 'topSites',
    /** hrome.tts API 播放合成的文本转语音 (TTS) */
    tts = 'tts',
    /** chrome.ttsEngine API 使用扩展实现文本转语音 (TTS) 引擎 */
    ttsEngine = 'ttsEngine',
    /** 提供无限配额用于存储客户端数据，例如数据库和本地存储文件 */
    unlimitedStorage = 'unlimitedStorage',
    /** 使您的扩展程序可以访问chrome.vpnProvider API */
    vpnProvider = 'vpnProvider',
    /** 仅限 Chrome 操作系统。使用chrome.wallpaper API 更改 ChromeOS 壁纸 */
    wallpaper = 'wallpaper',
    /** 使您的扩展程序可以访问chrome.webNavigation API */
    webNavigation = 'webNavigation',
    /** 使您的扩展程序可以访问chrome.webRequest API */
    webRequest = 'webRequest',
    /** 如果扩展程序以阻塞方式使用chrome.webRequest API，则为必需 */
    webRequestBlocking = 'webRequestBlocking',
}
