import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { i18n } from './i18n'
import { VueQueryPlugin } from '@tanstack/vue-query'

createApp(App).use(i18n).use(VueQueryPlugin).mount('#app')
