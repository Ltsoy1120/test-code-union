import { makeAutoObservable } from "mobx"
import { IUser, LoginData, RegisterData } from "../models/IUser"
import authService from "../services/auth.service"

export default class User {
  user = {} as IUser
  isAuth = false
  error = ""
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }

  *register(userData: RegisterData) {
    try {
      this.isLoading = true
      const { data } = yield authService.register(userData)
      localStorage.setItem("token", data.tokens.accessToken)
      this.user = data.user
      this.isAuth = true
    } catch (error) {
      console.log(error)
    } finally {
      this.isLoading = false
    }
  }

  *login(userData: LoginData) {
    try {
      this.isLoading = true
      const { data } = yield authService.login(userData)
      localStorage.setItem("token", data.tokens.accessToken)
      this.isAuth = true
      this.user = data.user
      this.error = ""
    } catch (error) {
      if (error instanceof Error) {
        console.log("login-error", error.message)
        this.error = error.message
      }
    } finally {
      this.isLoading = false
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
