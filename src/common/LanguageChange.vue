<template>
  <el-button @click="changeLanguage">中/英文</el-button>
  <div>{{ language }}</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLanguageStore } from '@/stores/language'
const languageStore = useLanguageStore()
const language = computed(() => languageStore.language)

function changeLanguage() {
  if (language.value === 'zhCn') {
    languageStore.setLanguage('en')
  } else {
    languageStore.setLanguage('zhCn')
  }
  localStorage.setItem('language', language.value)
}
</script>

<style scoped></style>
