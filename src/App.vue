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
import Header from './common/Header.vue'
import { useEpLocale } from '@/composables/useEpLocale'
const locale = useEpLocale()
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
}
</style>
