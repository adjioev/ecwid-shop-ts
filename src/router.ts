import { createRouter, createWebHistory } from 'vue-router';
import ProductView from './views/ProductView.vue';
import ProductListView from './views/ProductListView.vue';
import CartView from './views/CartView.vue';
import Default from './layouts/Default.vue';

// import App from './App.vue';

const routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '',
                component: ProductListView,
            },
            {
                path: 'products',
                component: ProductListView,
            },
            {
                path: 'product',
                component: ProductView,
            },
            {
                path: 'cart',
                component: CartView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;