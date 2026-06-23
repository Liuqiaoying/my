import type { DefineLocaleMessage } from 'vue-i18n'
// 从 zh.json 推导类型（确保类型安全）
// 注意：这里需要导入 zh.json 的内容
import zh from './locales/zh.json'
// 推导出完整的消息类型
export type MessageSchema = typeof zh

// 定义支持的语言代码
export type Locale = 'zh' | 'en'

// 扩展 vue-i18n 的全局类型
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
}

// 语言配置信息
export interface LanguageInfo {
  value: Locale
  label: string
  flag?: string
}

// 语言列表
export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { value: 'zh', label: '中文' },
  { value: 'en', label: 'English' },
]
