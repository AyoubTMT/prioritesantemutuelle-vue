import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/devis',
      name: 'devis',
      component: () => import('../views/Subscription.vue'), // Parent component for all steps
 
    },
    {
      path: '/devis/merci',
      name: 'merci',
      component: () => import('../views/Merci.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
})

export default router
