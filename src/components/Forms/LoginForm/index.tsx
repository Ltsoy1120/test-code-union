import { Formik, Form, FormikProps, Field } from "formik"
import { MouseEvent } from "react"
import { LoginData } from "../../../models/IUser"
// import * as Yup from "yup"
import authService from "../../../services/AuthService"
import Button from "../../Button"
import styles from "./style.module.scss"

interface LoginFormProps {
  openModal: (event: MouseEvent<HTMLElement>) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ openModal }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={async (values: LoginData) => {
        console.log("onSubmit", values)
        // const response = await authService.login(values.email, values.password)
        // console.log("response", response)
      }}
    >
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
