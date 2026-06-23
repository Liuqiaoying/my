# vue-i18n + Pinia 国际化实现笔记

## 一、整体架构

```
main.ts
  ├── createPinia()           ← Pinia 安装
  ├── il18n                   ← vue-i18n 实例
  ├── router
  └── App.vue
        ├── el-config-provider    ← Element Plus 组件语言
        ├── Header.vue
        │     ├── $t('welcome')   ← vue-i18n 翻译
        │     └── LanguageChange.vue  ← 语言切换按钮
        └── RouterView
```

## 二、各文件职责

### 1. 翻译文本 — `src/i18n/locales/{zh,en}.json`

zh.json：
```json
{
  "welcome": "欢迎",
  "login": { "title": "用户登录", "submit": "登录" },
  "greeting": "你好，{name}！",
  "button": { "confirm": "确认", "cancel": "取消" }
}
```

en.json：
```json
{
  "welcome": "Welcome",
  "login": { "title": "User Login", "submit": "Sign In" },
  "greeting": "Hello, {name}!",
  "button": { "confirm": "Confirm", "cancel": "Cancel" }
}
```

纯 JSON，中英文 key 结构完全一致。支持参数插值 `{name}`。

### 2. i18n 实例 — `src/i18n/index.ts`

```ts
import { createI18n } from 'vue-i18n'
import zh from './locales/zh.json'
import en from './locales/en.json'

function getInitialLocale(): string {
  const saved = localStorage.getItem('language') || 'en'
  return saved === 'zhCn' ? 'zh' : saved  // 兼容旧值
}

const i18n = createI18n({
  locale: getInitialLocale(),   // 首次加载时从 localStorage 读取
  fallbackLocale: 'en',         // 找不到翻译时的兜底语言
  messages: { zh, en },
})

export default i18n
```

**注意**：`locale` 只在 `createI18n` 时读取一次 `localStorage`，之后运行时完全靠 `i18n.global.locale` 来切换。`localStorage` 只管"刷新后记住"。

### 3. 类型安全 — `src/i18n/types.ts`

```ts
import type { DefineLocaleMessage } from 'vue-i18n'

export type MessageSchema = typeof import('./locales/zh.json')
export type Locale = 'zh' | 'en'

declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
}
```

通过 TypeScript module augmentation，让 `$t()` 使用时获得 key 的自动补全和类型检查。

### 4. 语言 Store — `src/stores/language.ts`

```ts
export const useLanguageStore = defineStore('language', () => {
  const language = ref(localStorage.getItem('language') || 'en')

  function setLanguage(lang: string) {
    language.value = lang
  }

  return { language, setLanguage }
})
```

**作用**：作为**桥梁**，让 `App.vue` 能响应式地切换 Element Plus 组件语言。

### 5. 入口注册 — `src/main.ts`

```ts
const app = createApp(App)
app.use(createPinia()).use(il18n)
app.use(router)
app.mount('#app')
```

由于 i18n 模块不依赖 Pinia store（直接用 `localStorage` 读初始值），`app.use(il18n).use(createPinia())` 也可以正常工作。

### 6. Element Plus 国际化 — `src/App.vue`

```vue
<template>
  <el-config-provider :locale="locale">
    <Header />
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useLanguageStore } from '@/stores/language'

const languageStore = useLanguageStore()
const locale = computed(() => languageStore.language === 'zh' ? zhCn : en)
</script>
```

`<el-config-provider>` 控制 Element Plus 内置组件（日期选择器、分页等）的语言。

### 7. 在模板中使用 — `Header.vue`

```vue
<template>
  {{ $t('welcome') }}
  {{ $t('login.title') }}
  {{ $t('greeting', { name: '张三' }) }}   <!-- 参数插值 -->
</template>
```

### 8. 语言切换按钮 — `src/common/LanguageChange.vue`

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/stores/language'

const { locale } = useI18n()           // i18n.global.locale 的响应式引用
const languageStore = useLanguageStore()

function changeLanguage() {
  if (languageStore.language === 'zh') {
    languageStore.setLanguage('en')     // ① 更新 Pinia → 触发 App.vue computed → Element Plus 切换
    locale.value = 'en'                 // ② 更新 i18n.global.locale → 所有 $t() 重新渲染
  } else {
    languageStore.setLanguage('zh')
    locale.value = 'zh'
  }
  localStorage.setItem('language', languageStore.language)  // ③ 持久化
}
</script>
```

## 三、核心流程总结

### 初始化
```
页面加载 → createPinia() 安装
        → createI18n({ locale: localStorage 读到的值 })
        → 模板中 $t() 根据初始 locale 渲染
        → App.vue 通过 store.language 决定 Element Plus locale
```

### 运行时切换
```
点击按钮 → ① locale.value = 'zh'        → $t() 所有翻译即时响应式切换
         → ② store.setLanguage('zh')  → App.vue computed 更新 → Element Plus 组件语言切换
         → ③ localStorage.setItem()   → 下次刷新时恢复当前语言
```

### 三条线的分工

| 操作 | 影响范围 | 目的 |
|---|---|---|
| `locale.value = 'zh'` | `$t()` 翻译文本 | 运行时实时切换 |
| `store.setLanguage('zh')` | Element Plus 组件文字 | 运行时实时切换 |
| `localStorage.setItem()` | 无（只管持久化） | 刷新后恢复语言 |

## 四、常见坑

1. **`createI18n` 时不能访问 Pinia store**：模块加载阶段 Pinia 尚未安装，直接用 `localStorage` 读取初始值即可规避。修复后 `app.use(createPinia()).use(il18n)` 和 `app.use(il18n).use(createPinia())` 两种顺序都可以。

2. **不能只改 `localStorage` 就期望翻译切换**：`i18n.global.locale` 不会自动监听 `localStorage` 变化，运行时切换必须通过 `locale.value = 'zh'` 直接赋值。

3. **切换语言必须同时更新两条线**：`locale.value`（vue-i18n 翻译）和 `store.language`（Element Plus 组件），漏掉任何一个都会导致部分文字没切换。

4. **语言 code 要保持一致**：vue-i18n 用 `'zh'`/`'en'`，Element Plus 也用对应的 `'zh'`/`'en'`，避免出现 `'zhCn'` 等不一致的值。
