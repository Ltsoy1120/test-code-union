import { Link } from "react-router-dom"
import { IRestaurant } from "../../models/IRestaurant"
import Button from "../Button"
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
        <img className={styles.card__image} src={images[0].url} alt="photo" />
      ) : (
        <img
          className={styles.card__image}
          src="/static/restaurant.jpg"
          alt="photo"
        />
      )}
      <div className={styles.card__info}>
        <div className={styles.card__context}>
          <Link to={`/restaurants/${id}`} state={{ restaurant }}>
            <h3>{title}</h3>
          </Link>
          <div className={styles.card__geo}>
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.24807 18.6788L8.25007 18.6778L8.25506 18.6744L8.27005 18.6629L8.32899 18.6206C8.37893 18.5838 8.45186 18.53 8.54376 18.4593C8.72756 18.319 8.98829 18.1124 9.29946 17.8471C10.1163 17.1512 10.8801 16.3959 11.5845 15.5872C13.2368 13.6827 14.953 10.9644 14.953 7.85675C14.953 6.00006 14.2168 4.21803 12.9061 2.90391C12.2583 2.25352 11.4879 1.73722 10.6391 1.38474C9.79028 1.03227 8.87991 0.850565 7.96038 0.850098C7.04088 0.8505 6.13053 1.03212 5.28173 1.38451C4.43294 1.73691 3.66245 2.25311 3.01461 2.90341C1.70271 4.22054 0.966893 6.00139 0.967774 7.85725C0.967774 10.9644 2.68396 13.6827 4.33621 15.5872C5.04065 16.3959 5.80445 17.1512 6.62129 17.8471C6.93296 18.1124 7.19319 18.319 7.37699 18.4593C7.46715 18.5286 7.55822 18.5966 7.6502 18.6634L7.66619 18.6744L7.67068 18.6778L7.67268 18.6788C7.845 18.7998 8.07575 18.7998 8.24807 18.6788ZM10.4577 7.81892C10.4577 8.47901 10.1946 9.11206 9.72628 9.57882C9.25793 10.0456 8.62272 10.3078 7.96038 10.3078C7.29804 10.3078 6.66282 10.0456 6.19448 9.57882C5.72613 9.11206 5.46302 8.47901 5.46302 7.81892C5.46302 7.15883 5.72613 6.52578 6.19448 6.05903C6.66282 5.59228 7.29804 5.33006 7.96038 5.33006C8.62272 5.33006 9.25793 5.59228 9.72628 6.05903C10.1946 6.52578 10.4577 7.15883 10.4577 7.81892Z"
                fill="#424F5E"
              />
            </svg>
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
