<template>
  <div class="login-container">
    <el-card class="login-card">
      <template #header>
        <h2>{{ t('login.title') }}</h2>
      </template>
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top">
        <el-form-item :label="t('login.username')" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item :label="t('login.password')" prop="password">
          <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="handleLogin">
            {{ t('login.submit') }}
          </el-button>
        </el-form-item>
        <div class="forgot-link">
          <el-link type="info">{{ t('login.forgot') }}</el-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

const { t, locale } = useI18n()
const formRef = ref<FormInstance>()

watch(
  locale,
  () => {
    document.title = t('login.title')
  },
  { immediate: true },
)

const form = reactive({
  username: '',
  password: '',
})

const rules: FormRules = {
  username: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
  password: [{ required: true, message: () => t('error.required'), trigger: 'blur' }],
}

function handleLogin() {
  formRef.value?.validate((valid) => {
    if (valid) {
      ElMessage.success(t('login.submit'))
    }
  })
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-card {
  width: 400px;
}

.login-card h2 {
  margin: 0;
  text-align: center;
}

.forgot-link {
  text-align: right;
}
</style>
