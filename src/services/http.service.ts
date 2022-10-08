import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { AuthResponse } from "../models/responses/AuthResponse"
import { API_URL } from "../config"

// const http = axios.create({
//   withCredentials: true,
//   baseURL: API_URL
// })

const http = axios.create()
http.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  }

  return config
})

http.interceptors.response.use(
  (config: AxiosResponse) => {
    return config
  },
  async error => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await axios.get<AuthResponse>(
          `${API_URL}/auth/login/refresh`,
          { withCredentials: true }
        )
        localStorage.setItem("token", response.data.tokens.accessToken)
        return http.request(originalRequest)
      } catch (error) {
        console.log("Не авторизован!")
      }
    }
    throw error
  }
)

export default http

// https: //cors-anywhere.herokuapp.com/
