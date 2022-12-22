module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        commonjs: true,
        amd: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {},
    parser: 'vue-eslint-parser',
};
