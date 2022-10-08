import { IRestaurant } from "../IRestaurant"
import { IUser } from "../IUser"

export interface RestaurantResponse {
  count: number
  restaurants: IRestaurant[]
  user: IUser
}
