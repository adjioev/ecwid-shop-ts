import { createRouter, createWebHistory } from 'vue-router';
import ProductView from './views/ProductView.vue';
import ProductListView from './views/ProductListView.vue';
import CartView from './views/CartView.vue';
import Default from './layouts/Default.vue';
import AboutView from "./views/AboutView.vue";

const routes = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '',
                name: "Home",
                component: ProductListView,
            },
            {
                path: 'products',
                name: "ProductsList",
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
                name: "Cart",
                component: CartView,
            },
            {
                path: 'about',
                name: "About",
                component: AboutView,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;