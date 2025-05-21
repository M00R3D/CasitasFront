// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '../components/SplashScreen.vue'
import InitialHome from '../components/InitialHome.vue'
import CabanaDetail from '../components/CabanaDetail.vue'
import Faq from '../components/Faq.vue'
import Login from '../components/Login.vue'

const routes = [
  { path: '/', component: SplashScreen },
  { path: '/home', component: InitialHome },
  { path: '/detail', component: CabanaDetail },
  { path: '/faq', component: Faq },
  { path: '/login', component: Login }
] 

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
