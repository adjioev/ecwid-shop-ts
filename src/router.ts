import { createRouter, createWebHistory } from 'vue-router';
import ProductView from './views/ProductView.vue';
import ProductListView from './views/ProductListView.vue';
import App from './App.vue';

const routes = [
    // { path: '/', component: App },
    { path: '/products', component: ProductListView },
    { path: '/product', component: ProductView }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;