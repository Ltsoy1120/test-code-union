import { makeAutoObservable } from "mobx"
import { IUser, LoginData, RegisterData } from "../models/IUser"
import authService from "../services/AuthService"

export default class User {
  user = {} as IUser
  isAuth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  async register(userData: RegisterData) {
    try {
      const { data } = await authService.register(userData)
      localStorage.setItem("token", data.tokens.accessToken)
      this.isAuth = true
      this.user = data.user
    } catch (error) {
      console.log(error)
    }
  }

  async login(userData: LoginData) {
    try {
      const { data } = await authService.login(userData)
      localStorage.setItem("token", data.tokens.accessToken)
      this.isAuth = true
      this.user = data.user
    } catch (error) {
      console.log(error)
    }
  }
}
