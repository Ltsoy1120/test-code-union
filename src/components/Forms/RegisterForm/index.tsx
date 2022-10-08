import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../.."
import { RegisterData } from "../../../models/IUser"
// import { Link } from "react-router-dom"
// import * as Yup from "yup"
import Button from "../../Button"
import styles from "./style.module.scss"

interface RegisterFormProps {
  closeModal: () => void
}

const RegisterForm: React.FC<RegisterFormProps> = ({ closeModal }) => {
  const { authUser } = useContext(Context)
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    nickname: "",
    phone: "",
    password: ""
    // terms: false
    // confirmPassword: ""
  }
  const onSubmit = (userData: RegisterData) => {
    console.log("onSubmit", userData)
    authUser.register(userData)
    closeModal()
    navigate("/")
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
