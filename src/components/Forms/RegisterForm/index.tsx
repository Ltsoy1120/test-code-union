import axios from "axios"
import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik"
import { RegisterData } from "../../../models/IUser"
// import { Link } from "react-router-dom"
// import * as Yup from "yup"
import authService from "../../../services/AuthService"
import Button from "../../Button"
import styles from "./style.module.scss"

const RegisterForm = () => {
  const initialValues = {
    email: "",
    nickname: "",
    phone: "",
    password: ""
    // terms: false
    // confirmPassword: ""
  }
  const onSubmit = async (values: RegisterData) => {
    console.log("onSubmit", values)
    // const response = await axios.post("/auth/registration/customer/new", values)
    const response = await authService.register(values)
    console.log("response", response)
  }
  //   const validate = (values: Values) => {
  //     let errors = {}
  //     return errors
  //   }
  //   const validationSchema = Yup.object({
  //     emal: Yup.string().email("Invalid").required("Req"),
  //     password: Yup.string().required("Req"),
  //     confirmPassword: Yup.string().required("Req")
  //   })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      //   validationSchema={validationSchema}
    >
      {(props: FormikProps<RegisterData>) => (
        <div className={styles.register}>
          <h2>Зарегистрироваться</h2>
          <Form>
            <div className={styles.register__form}>
              <Field id="email" name="email" placeholder="Email" />
              <ErrorMessage name="emal" />
              <Field id="nickname" name="nickname" placeholder="Nick Name" />
              <Field id="phone" name="phone" placeholder="Телефон" />
              <Field id="password" name="password" placeholder="Пароль" />
              <ErrorMessage name="password" />
              {/* <Field
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Повторите пароль"
              />
              <ErrorMessage name="confirmPassword" /> */}
              {/* <div className={styles.register__checkbox}>
                <Field id="terms" name="terms" type="checkbox" />
                <Link to="/">
                  Я принимаю условия Пользовательского соглашения, политики
                  конфиденциальности, Обработки и распространения персональных
                  данных
                </Link>
              </div> */}
              <Button type="submit" height={55}>
                Далее
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default RegisterForm
