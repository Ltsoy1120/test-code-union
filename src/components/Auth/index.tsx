import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { toJS } from "mobx"
import { Context } from "../.."
import Button from "../Button"
import LoginForm from "../Forms/LoginForm"
import RegisterForm from "../Forms/RegisterForm"
import Modal from "../Modal"
import styles from "./style.module.scss"
import { observer } from "mobx-react-lite"

const Auth = () => {
  const { authUser } = useContext(Context)
  const user = toJS(authUser.user)

  // для модалки
  const [showModal, setShowModal] = useState({ register: false, login: false })
  const openModal = (
    event: React.FormEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement>
  ) => {
    switch ((event.target as HTMLElement).innerText) {
      case "Регистрация":
        return setShowModal({ ...showModal, register: true })
      case "Зарегистрироваться":
        return setShowModal({ register: true, login: false })
      default:
        return setShowModal({ ...showModal, login: true })
    }
  }
  const closeModal = () => {
    setShowModal({ register: false, login: false })
  }

  return (
    <div className={styles.auth}>
      {authUser.isAuth && user ? (
        <Link to="/profile">{user.nickname}</Link>
      ) : (
        <div className={styles.auth__wrap}>
          <span onClick={openModal}>Регистрация</span>
          <Button width={90} height={36} onClick={openModal}>
            Войти
          </Button>
        </div>
      )}

      {showModal.register && (
        <Modal
          body={<RegisterForm closeModal={closeModal} />}
          close={closeModal}
        />
      )}
      {showModal.login && (
        <Modal
          body={<LoginForm openModal={openModal} closeModal={closeModal} />}
          close={closeModal}
        />
      )}
    </div>
  )
}

export default observer(Auth)
