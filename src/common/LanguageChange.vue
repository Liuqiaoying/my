<template>
  <el-dropdown @command="handleCommand" trigger="click">
    <el-button>
      {{ currentLabel }}
      <span style="font-size: 12px; margin-left: 4px">▾</span>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in SUPPORTED_LANGUAGES"
          :key="item.value"
          :command="item.value"
          :class="{ 'is-active': item.value === language }"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'
import { SUPPORTED_LANGUAGES } from '@/i18n/types'

const { locale } = useI18n()
const languageStore = useLanguageStore()
const language = computed(() => languageStore.language)

// 当前语言的显示名称
const currentLabel = computed(() => {
  const match = SUPPORTED_LANGUAGES.find((item) => item.value === language.value)
  return match?.label ?? language.value
})

// 切换语言
function handleCommand(lang: string) {
  languageStore.setLanguage(lang)
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>

<style scoped></style>
