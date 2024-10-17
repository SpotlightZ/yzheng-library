import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import FirebaseSigninView from '../views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import WeatherView from '../views/WeatherView.vue'
// import { useUserStore } from "@/store";

const routes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("../views/LoginView.vue")
  // },
  {
    path: "/",
    redirect: "/home",
    component: MainView,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'About',
        component: AboutView
      },
      {
        path: 'firelogin',
        name: 'Firelogin',
        component: FirebaseSigninView
      },
      {
        path: 'fireregister',
        name: 'FireRegister',
        component: FirebaseRegisterView
      },
      {
        path: 'weather',
        name: 'WeatherView',
        component: WeatherView
      }
    ]
  }
]

// let userStore = useUserStore;

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes
})

// function getUserAuthStatus() {
//   // Determine user whether to log in
//   return Boolean(localStorage.getItem('loggedInUser'));
// }

// router.beforeEach((to, _, next) => {
//   const isAuthenticated = getUserAuthStatus();
//   if (!userStore) {
//     userStore = useUserStore();   
//   }

//   if (to.path !== "/login" && !isAuthenticated) {
//     next("/login");
//     return;
//   }
//   next();
// });

export default router