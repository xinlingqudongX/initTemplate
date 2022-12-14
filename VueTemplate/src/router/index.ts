import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HelloWorld from '../view/helloWorld.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: HelloWorld,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
