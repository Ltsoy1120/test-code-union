import { useState } from "react"
import Button from "../Button"
import LoginForm from "../Forms/LoginForm"
import RegisterForm from "../Forms/RegisterForm"
import Modal from "../Modal"
import styles from "./style.module.scss"

const Auth = () => {
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
      <span onClick={openModal}>Регистрация</span>
      <Button width={90} height={36} onClick={openModal}>
        Войти
      </Button>
      {showModal.register && (
        <Modal body={<RegisterForm />} close={closeModal} />
      )}
      {showModal.login && (
        <Modal body={<LoginForm openModal={openModal} />} close={closeModal} />
      )}
    </div>
  )
}

export default Auth
