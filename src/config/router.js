import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import AdminPage from '../views/AdminPage.vue';
import PlayGame from '../views/PlayGame.vue';

const routes = [
    {path: '/', name:'home', component: HomePage},
    {path: '/admin', name:'admin', component: AdminPage},
    {path: '/play', name:'play', component: PlayGame},
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;