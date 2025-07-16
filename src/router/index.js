import { createRouter, createWebHistory } from 'vue-router';

// ページ（ビュー）コンポーネントを読み込む
import LearningCreate from '../components/LearningCreate.vue';
import LearningFile from '../components/LearningFile.vue';
import LearningList from '../components/LearningList.vue';
import LearningMemorize from '../components/LearningMemorize.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
    { path: '/', redirect: '/dashboard'},//初期ページの指定
    { path: '/dashboard', name: 'dashboard', component: Dashboard},
    { path: '/learn/create', component: LearningCreate},
    { path: '/learn/fileList', component: LearningFile},
    { path: '/learn/:id/index', component: LearningList},
    { path: '/learn/:id/memorize', component: LearningMemorize},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
