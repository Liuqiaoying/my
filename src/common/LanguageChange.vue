<template>
  <el-button @click="changeLanguage">{{ $t(language) }}</el-button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const language = computed(() => languageStore.language)
const { t } = useI18n()
function changeLanguage() {
  if (language.value === 'zh') {
    languageStore.setLanguage('en')
    locale.value = 'en'
  } else {
    languageStore.setLanguage('zh')
    locale.value = 'zh'
  }
  localStorage.setItem('language', language.value)
  console.log('ts中使用======', t('welcome'))
}
</script>

<style scoped></style>
