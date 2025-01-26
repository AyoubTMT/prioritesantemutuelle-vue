import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import { VueSpinnersPlugin } from 'vue3-spinners';
import ErrorComponent from './components/ErrorComponent.vue';

import App from './App.vue'
import router from './router'
import axios from 'axios';

import jQuery from "jquery";
const $ = jQuery;
window.$ = $;


const app = createApp(App)

// Register a global custom directive called `v-focus`
app.directive('focus', {
    // When the bound element is mounted into the DOM...
    mounted(el) {
      // Focus the element
      el.focus()
    }
  })
app.component('ErrorComponent', ErrorComponent);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(VueSpinnersPlugin);
app.use(pinia)
app.use(router)
app.config.globalProperties.$axios = axios;


app.mount('#app')
