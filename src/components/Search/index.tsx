import Button from "../Button"
import Icon from "../Icon"
import styles from "./style.module.scss"

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <h1>Найдите лучшее предложение от ресторана</h1>
        <div className={styles.search__field}>
          <div className={styles.search__input}>
            <input type="text" />
            <button className={styles.search__icon} type="submit">
              <Icon name="search" />
            </button>
          </div>
          <Button big width={199} height={61}>
            Найти
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Search
