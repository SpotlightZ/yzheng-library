// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
// import { i } from 'vite/dist/node/types.d-aGj9QkWt'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYGFjzNrRB_8J7zb9Z9UGBovy0_spscc",
  authDomain: "week7-yiting-880d4.firebaseapp.com",
  projectId: "week7-yiting-880d4",
  storageBucket: "week7-yiting-880d4.appspot.com",
  messagingSenderId: "575347893890",
  appId: "1:575347893890:web:8ded8d42bc1328c176369b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
app.use(pinia)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
