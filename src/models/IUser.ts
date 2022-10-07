export interface IUser {
  id: string
  email: string
  nickname: string
  phone?: string
}

export interface RegisterData {
  email: string
  nickname: string
  phone: string
  password: string
  //   terms: boolean
  //   confirmPassword: string
}

export interface LoginData {
  email: string
  password: string
}
