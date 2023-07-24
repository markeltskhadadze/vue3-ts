import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import AdminLayout from './components/layouts/AdminLayout.vue'
import BaseLayout from './components/layouts/BaseLayout.vue'
import AuthLayout from './components/layouts/AuthLayout.vue'
import './index.css'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(AOS.init())

app.component('admin-layout', AdminLayout)
app.component('base-layout', BaseLayout)
app.component('auth-layout', AuthLayout)

app.mount('#app')
