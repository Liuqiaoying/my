<template>
  <div class="header">
    <el-menu mode="horizontal" class="top-menus">
      <el-menu-item v-for="item in menuItems" :key="item.path" :route="item">
        {{ item.name }}</el-menu-item
      >
    </el-menu>
    <LanguageChange />
    <DarkButton />
    <UserDropdown />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DarkButton from './DarkButton.vue'
import LanguageChange from './LanguageChange.vue'
import UserDropdown from './UserDropdown.vue'

const { t } = useI18n()
const menuItems = [
  {
    name: t('user.userManage'),
    path: '/users',
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
