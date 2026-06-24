import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/overlay.scss'
import '@/styles/dark/css-vars.scss'
import il18n from './i18n'

const app = createApp(App)
app.use(createPinia()).use(il18n)
app.use(router)
app.mount('#app')
