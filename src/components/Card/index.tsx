import Button from "../Button"
import styles from "./style.module.scss"

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card__image} alt="hotel" />
      <div className={styles.card__info}>
        <h3>Infinity Plaza</h3>
        <div className={styles.card__geo}>
          <p>Анталья, Турция</p>
        </div>
        <p>Один из крупнейших ресторанов</p>
        <span>от $56 000 000</span>
        <Button width={165} height={35} mt={40}>
          Подробнее
        </Button>
      </div>
    </div>
  )
}

export default Card
