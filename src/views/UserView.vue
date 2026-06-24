<template>
  <ManageLayout :title="t('user.userManage')">
    <template #toolbar>
      <el-input
        v-model="searchKeyword"
        :placeholder="t('user.searchPlaceholder')"
        style="width: 220px"
        clearable
      />
      <el-button type="primary" @click="handleAdd">{{ t('user.add') }}</el-button>
    </template>

    <el-table :data="filteredUsers" border>
      <el-table-column prop="username" :label="t('user.username')" width="150" />
      <el-table-column prop="nickname" :label="t('user.nickname')" width="150" />
      <el-table-column prop="phone" :label="t('user.phone')" width="180" />
      <el-table-column :label="t('user.actions')" min-width="120" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" @click="handleEdit(row)">
            {{ t('user.edit') }}
          </el-button>
          <el-button link type="danger" @click="handleDelete(row)">
            {{ t('user.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <template #dialogs>
      <el-dialog v-model="dialogVisible" :title="dialogTitle" width="450px">
        <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
          <el-form-item :label="t('user.username')" prop="username">
            <el-input v-model="form.username" :disabled="isEdit" />
          </el-form-item>
          <el-form-item :label="t('user.nickname')" prop="nickname">
            <el-input v-model="form.nickname" />
          </el-form-item>
          <el-form-item :label="t('user.phone')" prop="phone">
            <el-input v-model="form.phone" />
          </el-form-item>
        </el-form>
        <template #footer>
          <el-button @click="dialogVisible = false">{{ t('button.cancel') }}</el-button>
          <el-button type="primary" @click="handleSubmit">{{ t('button.confirm') }}</el-button>
        </template>
      </el-dialog>
    </template>
  </ManageLayout>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import type { FormInstance, FormRules } from 'element-plus'
import type { User, UserForm } from '@/types/user'
import { useUserStore } from '@/stores/user'
import { toast, confirm } from '@/utils/toast'
import ManageLayout from '@/layouts/ManageLayout.vue'

const { t } = useI18n()
const userStore = useUserStore()

const searchKeyword = ref('')
const dialogVisible = ref(false)
const isEdit = ref(false)
const editingId = ref<number>()
const formRef = ref<FormInstance>()

const form = reactive<UserForm>({
  username: '',
  nickname: '',
  phone: '',
})

const rules: FormRules = {
  username: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
  nickname: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
  phone: [
    { required: true, message: () => t('error.required'), trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: () => t('error.phone'), trigger: 'blur' },
  ],
}

const dialogTitle = computed(() => (isEdit.value ? t('user.edit') : t('user.add')))

const filteredUsers = computed(() => {
  if (!searchKeyword.value) return userStore.users
  const kw = searchKeyword.value.toLowerCase()
  return userStore.users.filter(
    (u) =>
      u.username.toLowerCase().includes(kw) ||
      u.nickname.toLowerCase().includes(kw) ||
      u.phone.includes(kw),
  )
})

function resetForm() {
  form.username = ''
  form.nickname = ''
  form.phone = ''
}

function handleAdd() {
  isEdit.value = false
  editingId.value = undefined
  resetForm()
  dialogVisible.value = true
}

function handleEdit(row: User) {
  isEdit.value = true
  editingId.value = row.id
  form.username = row.username
  form.nickname = row.nickname
  form.phone = row.phone
  dialogVisible.value = true
}

function handleDelete(row: User) {
  confirm(
    t('user.deleteConfirm'),
    () => {
      userStore.deleteUser(row.id)
      toast(t('user.deleteSuccess'))
    },
    t('button.confirm'),
    t('button.cancel'),
  )
}

function handleSubmit() {
  formRef.value?.validate((valid) => {
    if (!valid) return
    if (isEdit.value && editingId.value !== undefined) {
      userStore.updateUser(editingId.value, { ...form })
      toast(t('user.updateSuccess'))
    } else {
      userStore.addUser({ ...form })
      toast(t('user.addSuccess'))
    }
    dialogVisible.value = false
    resetForm()
  })
}
</script>
