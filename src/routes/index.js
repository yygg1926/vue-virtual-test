import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/hello',
        component: () => import('@/components/MainPage.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;