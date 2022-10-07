import Card from "../../components/Card"
import Search from "../../components/Search"
import styles from "./style.module.scss"

const Main = () => {
  return (
    <div className={styles.main}>
      <Search />
      <div className={styles.main__previews}>
        <h1>Популярные предложения</h1>
        <p>Предложения, которые любят наши клиенты</p>
        <div className={styles.main__cards}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Main
