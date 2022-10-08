import { makeAutoObservable, runInAction } from "mobx"
import { IUser, LoginData, RegisterData } from "../models/IUser"
import authService from "../services/auth.service"

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
      runInAction(() => {
        this.user = data.user
      })
      this.isAuth = true
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

  *myProfile() {
    try {
      const { data } = yield authService.myProfile()
      this.isAuth = true
      this.user = data
    } catch (error) {
      console.log(error)
    }
  }
}
