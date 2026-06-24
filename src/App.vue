<template>
  <el-config-provider :locale="epLocale">
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main><RouterView></RouterView></el-main>
      </el-container>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import Header from './common/Header.vue'
import { useEpLocale } from '@/composables/useEpLocale'

const { t } = useI18n()
const epLocale = useEpLocale()

// 动态设置 document.title
watch(
  () => t('app.title'),
  (title) => {
    document.title = title
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
}
</style>
