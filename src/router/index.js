import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import AddListing from './components/AddListing.vue';
import PetDetails from './components/PetDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/add', component: AddListing },
  { path: '/pet/:id', component: PetDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
