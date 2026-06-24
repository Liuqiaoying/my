<template>
  <el-config-provider :locale="locale">
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
import { RouterView } from 'vue-router'
import { computed, ref } from 'vue'
import Header from './common/Header.vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useLanguageStore } from '@/stores/language'
const languageStore = useLanguageStore()
const locale = computed(() => (languageStore.language === 'zhCn' ? zhCn : en))
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
}
</style>
