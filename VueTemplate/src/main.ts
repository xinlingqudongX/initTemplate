import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Router from './router';
import { createPinia } from 'pinia';
import * as Icons from '@element-plus/icons-vue';

const app = createApp(App);
for (const [key, componet] of Object.entries(Icons)) {
    app.component(key, componet);
}

app.use(createPinia());
app.use(ElementPlus);
app.use(Router);
app.mount('#app');
