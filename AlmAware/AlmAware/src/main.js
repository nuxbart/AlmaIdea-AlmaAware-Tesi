import './assets/style.css'

import { createApp } from 'vue'; 
import App from './App.vue'; 
import Router from './router';

import { Vue3Mq } from "vue3-mq";
//const app = createApp(App);

import { ViteSSG } from 'vite-ssg'

export const app = ViteSSG(App)

app.use(Router);
/* app.use(Vue3Mq); */
app.use(Vue3Mq, {
    breakpoints: {
        mobile: 0,
        tablet: 450,
        laptop: 1250,
        desktop: Infinity,
    }
  })

app.provide('publicPath', window.location.origin + (process.env.NODE_ENV === "production" ? "/AlmaIdea/" : "/"),)

app.mount('#app');
