import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import WeatherView from '../views/WeatherView.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/firelogin',
    name: 'Firelogin',
    component: FirebaseSigninView
  },
  {
    path: '/fireregister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/weather',
    name: 'WeatherView',
    component: WeatherView
  }
]

const router = createRouter({
  // history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  history: createWebHistory('/yzheng-library'),
  routes
})

export default router