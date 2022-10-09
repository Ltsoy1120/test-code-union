import { Link } from "react-router-dom"
import { IRestaurant } from "../../models/IRestaurant"
import Button from "../Button"
import Icon from "../Icon"
import styles from "./style.module.scss"

interface CardProps {
  restaurant: IRestaurant
}
const Card: React.FC<CardProps> = ({ restaurant }) => {
  const { title, description, coords, images, id } = restaurant

  let sliced = description.slice(0, 100)
  if (sliced.length < description.length) {
    sliced += "..."
  }

  return (
    <div className={styles.card}>
      {images[0] ? (
        <img
          className={styles.card__image}
          src={images[0].url}
          alt="restaurant"
        />
      ) : (
        <img
          className={styles.card__image}
          src="/static/restaurant.jpg"
          alt="restaurant"
        />
      )}
      <div className={styles.card__info}>
        <div className={styles.card__context}>
          <Link to={`/restaurants/${id}`} state={{ restaurant }}>
            <h3>{title}</h3>
          </Link>
          <div className={styles.card__geo}>
            <Icon name="geo" />
            <p>{coords.address_name}</p>
          </div>
          <p style={{ height: "5em" }}>{sliced}</p>
          <span>от $56 000 000</span>
        </div>
        <Link to={`/restaurants/${id}`} state={{ restaurant }}>
          <Button width={165} height={35} mt={40}>
            Подробнее
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Card
