import { Formik, Form, FormikProps, Field } from "formik"
import { MouseEvent, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../.."
import { LoginData } from "../../../models/IUser"
// import * as Yup from "yup"
import Button from "../../Button"
import styles from "./style.module.scss"

interface LoginFormProps {
  openModal: (event: MouseEvent<HTMLElement>) => void
  closeModal: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ openModal, closeModal }) => {
  const { authUser } = useContext(Context)
  const navigate = useNavigate()

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = (userData: LoginData) => {
    console.log("onSubmit", userData)
    authUser.login(userData)
    closeModal()
    navigate("/")
  }
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(props: FormikProps<LoginData>) => (
        <div className={styles.register}>
          <h2>Войти</h2>
          <Form>
            <div className={styles.register__form}>
              <Field id="email" name="email" placeholder="Email" />
              <Field id="password" name="password" placeholder="Пароль" />
              <Button type="submit" height={55}>
                Далее
              </Button>
            </div>
          </Form>
          <span onClick={openModal}>Зарегистрироваться</span>
          {/* <a href="#">Забыли пароль?</a> */}
        </div>
      )}
    </Formik>
  )
}

export default LoginForm
