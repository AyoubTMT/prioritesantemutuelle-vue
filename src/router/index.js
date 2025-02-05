import { createRouter, createWebHistory } from 'vue-router';
import AuditionHomeView from '../views/HomeView.vue';
import DentaireHomeView from "../views/DentaireHomeView.vue";
import MedicaleHomeView from "../views/MedicaleHomeView.vue";

const currentDomain = window.location.hostname;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:
        currentDomain === "santeproaudio.fr"
          ? AuditionHomeView
          : currentDomain === "santepromedicale.fr"
            ? MedicaleHomeView
            : currentDomain === "santeprodentaire.fr"
              ? DentaireHomeView
              : AuditionHomeView,
    },
    {
      path: '/devis',
      name: 'devis',
      component: () => import('../views/Subscription.vue'),
 
    },
    {
      path: '/devis/merci',
      name: 'merci',
      component: () => import('../views/Merci.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../views/mentions-legales.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/', // Redirect undefined routes to home 
    },
  ],
});

export default router
