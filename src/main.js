import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/add.scss';
import './assets/styles/card.scss';
import './assets/styles/login.scss';
import './assets/styles/register.scss';
import './assets/styles/style.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');
