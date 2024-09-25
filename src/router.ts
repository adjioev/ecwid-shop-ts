import { createRouter, createWebHistory } from 'vue-router';
import ProductView from './views/ProductView.vue';
import ProductListView from './views/ProductListView.vue';
import CartView from './views/CartView.vue';
import Default from './layouts/Default.vue';

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
                path: 'products/:id',
                name: "ProductDetail",
                component: ProductView,
                props: true,
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