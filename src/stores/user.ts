import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User, UserForm } from '@/types/user'

let nextId = 4

export const useUserStore = defineStore('user', () => {
  const users = ref<User[]>([
    { id: 1, username: 'admin', nickname: '管理员', phone: '13800138000' },
    { id: 2, username: 'zhangsan', nickname: '张三', phone: '13800138001' },
    { id: 3, username: 'lisi', nickname: '李四', phone: '13800138002' },
  ])

  function getUserById(id: number) {
    return users.value.find((u) => u.id === id)
  }

  function addUser(form: UserForm) {
    const user: User = { id: nextId++, ...form }
    users.value.push(user)
    return user
  }

  function updateUser(id: number, form: UserForm) {
    const index = users.value.findIndex((u) => u.id === id)
    if (index !== -1) {
      users.value[index] = { id, ...form }
      return users.value[index]
    }
  }

  function deleteUser(id: number) {
    const index = users.value.findIndex((u) => u.id === id)
    if (index !== -1) {
      users.value.splice(index, 1)
    }
  }

  return { users, getUserById, addUser, updateUser, deleteUser }
})
