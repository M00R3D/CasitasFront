// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../components/SplashScreen.vue'
import InitialHome from '../components/InitialHome.vue'

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/home', component: InitialHome }
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
