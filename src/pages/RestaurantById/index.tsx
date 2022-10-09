import { useLocation } from "react-router-dom"
import styles from "./style.module.scss"

const RestaurantById = () => {
  const { state } = useLocation()
  const { title, description, schedule, images } = state.restaurant

  return (
    <div className={styles.restaurant}>
      <h1>{title}</h1>
      <div className={styles.restaurant__wrap}>
        <div className={styles.restaurant__image}>
          {images[0] ? (
            <img src={images[0].url} alt="restaurant" />
          ) : (
            <img src="/static/restaurant.jpg" alt="restaurant" />
          )}
        </div>
        <div className={styles.restaurant__info}>
          <p>
            <span>Описание: </span>
            {description}
          </p>
          <p>
            <span>Адрес: </span>
            {description}
          </p>
          <p>
            <span>Расписание: </span>с {schedule.opening} до {schedule.closing}
          </p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantById
