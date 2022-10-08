import { toJS } from "mobx"
import { useContext } from "react"
import { Context } from "../.."
import styles from "./style.module.scss"

const MyProfile = () => {
  const { authUser } = useContext(Context)
  const user = toJS(authUser.user)

  return (
    <div className={styles.profile}>
      <h1>Мой профиль</h1>
      <div className={styles.profile__wrap}>
        <div className={styles.profile__image}>
          <img src="/static/avatar.jpg" alt="avatar" />
        </div>
        <div className={styles.profile__info}>
          <p>
            <span>Nick Name: </span>
            {user.nickname}
          </p>
          <p>
            <span>Email: </span>
            {user.email}
          </p>
          {user.phone && (
            <p>
              <span>Телефон: </span>
              {user.phone}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyProfile
