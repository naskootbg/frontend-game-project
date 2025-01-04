import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import AdminPage from '../views/AdminPage.vue';
import PlayGame from '../views/PlayGame.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';

const routes = [
    {path: '/', name:'home', component: HomePage},
    {path: '/admin', name:'admin', component: AdminPage},
    {path: '/play', name:'play', component: PlayGame},
    {path: '/login', name:'login', component: LoginPage},
    {path: '/join', name:'join', component: RegisterPage},

];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;