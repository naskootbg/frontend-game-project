import { createApp } from 'vue';
import './styles/reset.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './config/router';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
