import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export function useEpLocale() {
  const languageStore = useLanguageStore()
  return computed(() => (languageStore.language === 'zh' ? zhCn : en))
}
