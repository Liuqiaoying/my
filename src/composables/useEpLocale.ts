import { computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import ja from 'element-plus/es/locale/lang/ja'
import ko from 'element-plus/es/locale/lang/ko'

// Element Plus locale 映射
const EP_LOCALE_MAP: Record<string, typeof zhCn> = {
  zh: zhCn,
  en,
  ja,
  ko,
}

export function useEpLocale() {
  const languageStore = useLanguageStore()
  return computed(() => EP_LOCALE_MAP[languageStore.language] ?? en)
}
