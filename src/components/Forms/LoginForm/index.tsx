import { Formik, Form, Field } from "formik"
import { MouseEvent, useContext, useState } from "react"
import * as Yup from "yup"
import { useNavigate } from "react-router-dom"
import { Context } from "../../.."
import { LoginData } from "../../../models/IUser"
import Button from "../../Button"
import styles from "./style.module.scss"
import { observer } from "mobx-react-lite"

interface LoginFormProps {
  openModal: (event: MouseEvent<HTMLElement>) => void
  closeModal: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({ openModal, closeModal }) => {
  const { authUser } = useContext(Context)
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const initialValues = {
    email: "",
    password: ""
  }

  const onSubmit = async (userData: LoginData) => {
    await authUser.login(userData)

    if (!authUser.error) {
      closeModal()
      navigate("/")
    } else if (authUser.error === "Request failed with status code 422") {
      setError("Неправильный email или пароль")
    }
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .required("Обязательное поле")
  })

  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <div className={styles.register}>
          <h2>Войти</h2>
          <Form>
            <div className={styles.register__form}>
              <Field id="email" name="email" placeholder="Email" />
              {touched.email && errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
              <Field id="password" name="password" placeholder="Пароль" />
              {touched.password && errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
              {error && <p className={styles.error}>{error}</p>}
              <Button type="submit" height={55}>
                Далее
              </Button>
            </div>
          </Form>
          <span onClick={openModal}>Зарегистрироваться</span>
        </div>
      )}
    </Formik>
  )
}

export default observer(LoginForm)
