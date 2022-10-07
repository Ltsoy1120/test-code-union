import axios, { AxiosRequestConfig } from "axios"
// import { API_URL } from "../config"

// const http = axios.create({
//   withCredentials: true,
//   baseURL: "http://188.225.83.80:6719/api/v1"
// })

const http = axios.create()
http.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`
  }

  return config
})

export default http

// https: //cors-anywhere.herokuapp.com/
