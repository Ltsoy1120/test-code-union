import { toJS } from "mobx"
import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Context } from "../.."
import Card from "../../components/Card"
import Search from "../../components/Search"
import { IRestaurant } from "../../models/IRestaurant"
import restaurantService from "../../services/restaurant.service"
import styles from "./style.module.scss"

const Main = observer(() => {
  const { authUser } = useContext(Context)

  const [restaurants, setRestaurants] = useState<IRestaurant[]>()

  useEffect(() => {
    async function getRestaurants() {
      const { data } = await restaurantService.getRestaurants()
      setRestaurants(data.restaurants)
    }
    getRestaurants()
  }, [])

  return (
    <div className={styles.main}>
      {authUser.isAuth ? (
        <>
          <Search />
          <div className={styles.main__previews}>
            <h1>Популярные предложения</h1>
            <h4>Предложения, которые любят наши клиенты</h4>

            <div className={styles.main__cards}>
              {restaurants &&
                restaurants.map(rest => (
                  <Card restaurant={rest} key={rest.id} />
                ))}
            </div>
          </div>
        </>
      ) : (
        <h2>Доступно только для авторизованных пользователей!</h2>
      )}
    </div>
  )
})

export default Main
