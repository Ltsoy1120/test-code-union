import { AxiosResponse } from "axios"
import { RestaurantResponse } from "../models/responses/RestaurantResponse"
import http from "./http.service"

const restaurantService = {
  getRestaurants: async (): Promise<AxiosResponse<RestaurantResponse>> => {
    const data = await http.get<RestaurantResponse>(
      `restaurants/all?page=1&perPage=10`
    )
    return data
  }
}
export default restaurantService
