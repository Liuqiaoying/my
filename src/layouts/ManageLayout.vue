<template>
  <div class="manage-page">
    <!-- 页面标题 -->
    <div v-if="title" class="page-header">
      <h2 class="page-title">{{ title }}</h2>
      <div v-if="$slots.extra" class="page-extra">
        <slot name="extra" />
      </div>
    </div>

    <!-- 搜索/工具栏 -->
    <div v-if="$slots.toolbar" class="toolbar">
      <slot name="toolbar" />
    </div>

    <!-- 数据表格 -->
    <div class="table-container">
      <slot />
    </div>

    <!-- 分页 -->
    <div v-if="pagination" class="pagination-wrapper">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 50, 100]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>

    <!-- 弹框 -->
    <slot name="dialogs" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  pagination?: boolean
  modelValue?: number
  pageSize?: number
  total?: number
}

const props = withDefaults(defineProps<Props>(), {
  pagination: false,
  modelValue: 1,
  pageSize: 10,
  total: 0,
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'update:pageSize': [value: number]
  paginationChange: []
}>()

const currentPage = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const pageSize = computed({
  get: () => props.pageSize,
  set: (val) => emit('update:pageSize', val),
})

function handleSizeChange() {
  emit('paginationChange')
}

function handleCurrentChange() {
  emit('paginationChange')
}
</script>

<style scoped>
.manage-page {
  padding: 16px;
  background-color: var(--el-bg-color-page);
  min-height: 100%;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.page-title {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: var(--el-text-color-primary);
}

.toolbar {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding: 16px;
  background-color: var(--el-bg-color);
  border-radius: 4px;
}

.table-container {
  background-color: var(--el-bg-color);
  border-radius: 4px;
  padding: 16px;
}

.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  padding: 16px;
  background-color: var(--el-bg-color);
  border-radius: 4px;
}

/* 表格表头浅色主题 */
:deep(.el-table__header-wrapper th.el-table__cell) {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  font-weight: 600;
}

:deep(.el-table__header-wrapper th.el-table__cell .cell) {
  color: var(--el-text-color-primary);
  font-weight: 600;
}

:deep(.el-table__header-wrapper th.el-table__cell.is-leaf) {
  border-bottom: none;
}
</style>
