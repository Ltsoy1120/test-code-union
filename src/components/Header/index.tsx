import { NavLink } from "react-router-dom"
import Auth from "../Auth"
import styles from "./style.module.scss"

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink to="/">Главная</NavLink>
      <Auth />
    </div>
  )
}

export default Header
