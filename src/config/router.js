import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import AdminPage from '../views/AdminPage.vue';
import PlayGame from '../views/PlayGame.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import { useUserStore } from '../stores/useUserStore';
import NotFound from '../views/NotFound.vue';



const routes = [
    {path: '/', name:'home', component: HomePage},
    {path: '/admin', name:'admin', component: AdminPage,
      beforeEnter: async () => {
        const store = useUserStore();
        if (!store.user) {
          return '/login'
        }
  
        const isLogged = await store.reAuthUser();
        if (!isLogged) {
          return '/login';
        }
      },
    },
    {path: '/play', name:'play', component: PlayGame},
    {path: '/login', name:'login', component: LoginPage,
      beforeEnter: async () => {
        const store = useUserStore();
        if (store.user) {
          return '/admin'
        }
  
        const isLogged = await store.reAuthUser();
        if (isLogged) {
          return '/admin';
        }
      },
    },
    {path: '/join', name:'join', component: RegisterPage},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;