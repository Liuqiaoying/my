<template>
  <div class="user-dropdown">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="user-info">
        <el-icon><User /></el-icon>
        <span class="username">{{ username }}</span>
        <el-icon class="arrow"><ArrowDown /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="password">
            <el-icon><Lock /></el-icon>
            {{ t('user.changePassword') }}
          </el-dropdown-item>
          <el-dropdown-item command="logout" divided>
            <el-icon><SwitchButton /></el-icon>
            {{ t('user.logout') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <!-- 修改密码弹框 -->
    <el-dialog v-model="pwdDialogVisible" :title="t('user.changePassword')" width="400px">
      <el-form ref="pwdFormRef" :model="pwdForm" :rules="pwdRules" label-position="top">
        <el-form-item :label="t('user.oldPassword')" prop="oldPassword">
          <el-input v-model="pwdForm.oldPassword" type="password" show-password />
        </el-form-item>
        <el-form-item :label="t('user.newPassword')" prop="newPassword">
          <el-input v-model="pwdForm.newPassword" type="password" show-password />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="pwdDialogVisible = false">{{ t('button.cancel') }}</el-button>
        <el-button type="primary" @click="handleChangePassword">{{
          t('button.confirm')
        }}</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { User, ArrowDown, Lock, SwitchButton } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import { toast, confirm } from '@/utils/toast'

const { t } = useI18n()
const pwdDialogVisible = ref(false)
const pwdFormRef = ref<FormInstance>()
const username = ref('Admin')

const pwdForm = reactive({
  oldPassword: '',
  newPassword: '',
})

const pwdRules: FormRules = {
  oldPassword: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
  newPassword: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
}

function handleCommand(command: string) {
  if (command === 'password') {
    pwdDialogVisible.value = true
  } else if (command === 'logout') {
    confirm(
      t('user.logoutConfirm'),
      () => {
        toast(t('user.logoutSuccess'))
      },
      t('button.confirm'),
      t('button.cancel'),
    )
  }
}

function handleChangePassword() {
  pwdFormRef.value?.validate((valid) => {
    if (valid) {
      toast(t('user.passwordChanged'))
      pwdDialogVisible.value = false
      pwdForm.oldPassword = ''
      pwdForm.newPassword = ''
    }
  })
}
</script>

<style scoped>
.user-dropdown {
  margin-left: 16px;
  display: flex;
  align-items: center;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  user-select: none;
}
.username {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.arrow {
  font-size: 12px;
}
</style>
