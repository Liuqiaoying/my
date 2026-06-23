import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const language = ref(localStorage.getItem('language') || 'en')
  function setLanguage(lang: string) {
    language.value = lang
  }
  return { language, setLanguage }
})
