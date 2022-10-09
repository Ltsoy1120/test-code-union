import { AxiosResponse } from "axios"
import { IUser, LoginData, RegisterData } from "../models/IUser"
import { AuthResponse } from "../models/responses/AuthResponse"
import http from "./http.service"

const authService = {
  register: async (
    userData: RegisterData
  ): Promise<AxiosResponse<AuthResponse>> => {
    return await http.post<AuthResponse>(
      "/auth/registration/customer/new",
      userData
    )
  },
  login: async (userData: LoginData): Promise<AxiosResponse<AuthResponse>> => {
    return await http.post<AuthResponse>("/auth/login", userData)
  },
  myProfile: async (): Promise<AxiosResponse<IUser>> => {
    return await http.get<IUser>("auth/login/profile")
  }
}
export default authService
