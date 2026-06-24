import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'

function getInitialLocale(): string {
  const saved = localStorage.getItem('language') || 'zh'
  return saved === 'zhCn' ? 'zh' : saved
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'zh',
  messages: {
    zh,
    en,
    ja,
    ko,
  },
})

export default i18n
