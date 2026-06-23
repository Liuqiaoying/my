<template>
  <div class="header">
    <DarkButton />
    {{ $t('welcome') }}
    <LanguageChange />
  </div>
</template>

<script setup lang="ts">
import DarkButton from './DarkButton.vue'
import LanguageChange from './LanguageChange.vue'
</script>

<style scoped lang="scss">
.header {
  height: 80px;
}
</style>
