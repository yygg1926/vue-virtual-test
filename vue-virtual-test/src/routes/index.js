import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/MainPage.vue'),
    },
    {
        path: '/main',
        component: () => import('@/views/MainPage.vue'),
    },
    {
        path: '/*',
        component: () => import('@/components/common/NotFoundPage.vue'),
    },
    {
        path: '/registNtf',
        component: () => import('@/views/RegistNtf.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export { router }