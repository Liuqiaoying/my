export interface User {
  id: number
  username: string
  nickname: string
  phone: string
}

export type UserForm = Omit<User, 'id'>
