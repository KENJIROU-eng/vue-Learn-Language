import './assets/tailwind.css';

// SPA vue
import { createApp } from 'vue';
import App from './App.vue';
import router from '../src/router';
import { createPinia } from 'pinia'

const app = createApp(App); // ← App.vue をルートとする Vue インスタンス生成
app.use(createPinia());
app.use(router);            // ← Vue Router を使用するように登録
app.mount('#app');          // ← DOMの id="app" に App.vue を描画（SPAの入口）


