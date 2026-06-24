<template>
  <div class="header">
    <el-menu mode="horizontal" class="top-menus">
      <el-menu-item v-for="item in menuItems" :key="item.path" :route="item">
        {{ item.name }}</el-menu-item
      >
    </el-menu>
    <DarkButton />
    <LanguageChange />
  </div>
</template>

<script setup lang="ts">
import DarkButton from './DarkButton.vue'
import LanguageChange from './LanguageChange.vue'
const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top-menus {
  flex: 1;
}
</style>
