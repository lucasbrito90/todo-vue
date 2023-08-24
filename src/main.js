import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import i18n from "./i18n"

createApp(App)
    .use(i18n)
    .use(createPinia())
    .mount('#app')
