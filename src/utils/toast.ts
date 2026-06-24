import { ElMessage, ElMessageBox } from 'element-plus'
import type { MessageType } from 'element-plus'

export type ToastType = 'success' | 'warning' | 'error' | 'info'

/**
 * 轻提示
 * @param content - 提示内容
 * @param type - 提示类型，默认 success
 */
export function toast(content: string, type: ToastType = 'success') {
  ElMessage({ message: content, type })
}

/**
 * 二次确认框
 * @param content - 确认内容
 * @param onConfirm - 确认后的回调
 * @param confirmText - 确认按钮文字，默认"确定"
 * @param cancelText - 取消按钮文字，默认"取消"
 */
export function confirm(
  content: string,
  onConfirm: () => void,
  confirmText = '确定',
  cancelText = '取消',
) {
  ElMessageBox.confirm(content, '', {
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    type: 'warning',
  }).then(onConfirm)
}
