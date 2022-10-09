import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Context } from "../.."
import Card from "../../components/Card"
import Search from "../../components/Search"
import { IRestaurant } from "../../models/IRestaurant"
import restaurantService from "../../services/restaurant.service"
import styles from "./style.module.scss"

const Main = () => {
  const { authUser } = useContext(Context)
  const [restaurants, setRestaurants] = useState<IRestaurant[]>()
  const [filteredRestaurants, setFilterRestaurants] = useState<IRestaurant[]>()
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function getRestaurants() {
      const { data } = await restaurantService.getRestaurants()
      setRestaurants(data.restaurants)
    }
    getRestaurants()
  }, [authUser.isAuth])

  useEffect(() => {
    let filterdRest
    if (search) {
      filterdRest = restaurants?.filter(rest =>
        rest.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
    } else {
      filterdRest = restaurants
    }
    setFilterRestaurants(filterdRest ?? [])
  }, [search, restaurants])

  if (authUser.isLoading) return <h2>Идет загрузка...</h2>

  return (
    <div className={styles.main}>
      {!authUser.isLoading && authUser.isAuth ? (
        <>
          <Search
            restaurants={filteredRestaurants ?? restaurants}
            onChange={setSearch}
          />
          <div className={styles.main__previews}>
            <h1>Популярные предложения</h1>
            <h4>Предложения, которые любят наши клиенты</h4>

            <div className={styles.main__cards}>
              {filteredRestaurants && filteredRestaurants[0] ? (
                filteredRestaurants.map(rest => (
                  <Card restaurant={rest} key={rest.id} />
                ))
              ) : restaurants ? (
                restaurants.map(rest => (
                  <Card restaurant={rest} key={rest.id} />
                ))
              ) : (
                <h4>Данных пока нет</h4>
              )}
            </div>
          </div>
        </>
      ) : (
        <h2>Доступно только для авторизованных пользователей!</h2>
      )}
    </div>
  )
}

export default observer(Main)
