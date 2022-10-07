import { AxiosResponse } from "axios"
import { LoginData, RegisterData } from "../models/IUser"
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
  }
  //   logout: async (): Promise<void> => {
  //     // const { refreshToken } = parseCookies();
  //     // console.log("refreshToken", refreshToken);
  //     // return await http.get("/logout");
  //     return await http.get("/logout", {
  //       withCredentials: true,
  //       // headers: {
  //       //   Cookie: refreshToken
  //       // }
  //     })
  //   },
  //   refresh: async () => {
  //     return await axios.get<AuthResponse>(`${API_URL}/refresh`, {
  //       withCredentials: true,
  //     })
  //   },
}
export default authService
