import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'

function getInitialLocale(): string {
  const saved = localStorage.getItem('language') || 'en'
  // 兼容旧值 'zhCn'，统一映射为 'zh'
  return saved === 'zhCn' ? 'zh' : saved
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages: {
    zh,
    en,
  },
})

export default i18n
