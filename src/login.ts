import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import zh from './i18n/locales/zh.json'
import en from './i18n/locales/en.json'
import ja from './i18n/locales/ja.json'
import ko from './i18n/locales/ko.json'
import LoginView from './views/LoginView.vue'

const savedLocale = localStorage.getItem('language') || 'zh'
const i18n = createI18n({
  locale: savedLocale,
  fallbackLocale: 'zh',
  messages: { zh, en, ja, ko },
})

const app = createApp(LoginView)
app.use(createPinia()).use(i18n)
app.mount('#app')
