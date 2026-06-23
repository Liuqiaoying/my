<template>
  <el-button type="primary" @click="toggleDark">{{ isDark ? '开灯' : '关灯' }}</el-button>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
const isDark = useDark()
const toggleDark = () => {
  isDark.value = !isDark.value
}
</script>

<style scoped></style>
