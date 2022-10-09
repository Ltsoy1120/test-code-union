import { Formik, Form, Field } from "formik"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../.."
import { RegisterData } from "../../../models/IUser"
import * as Yup from "yup"
import Button from "../../Button"
import styles from "./style.module.scss"
import { observer } from "mobx-react-lite"

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
  }
  const onSubmit = (userData: RegisterData) => {
    console.log("onSubmit", userData)
    authUser.register(userData)
    closeModal()
    navigate("/")
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    nickname: Yup.string().required("Обязательное поле"),
    phone: Yup.string().required("Обязательное поле"),
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
      {({ errors, touched, isValid, handleSubmit, dirty }) => (
        <div className={styles.register}>
          <h2>Зарегистрироваться</h2>
          <Form onSubmit={handleSubmit}>
            <div className={styles.register__form}>
              <Field id="email" name="email" placeholder="Email" />
              {touched.email && errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
              <Field id="nickname" name="nickname" placeholder="Nick Name" />
              {touched.nickname && errors.nickname && (
                <p className={styles.error}>{errors.nickname}</p>
              )}
              <Field id="phone" name="phone" placeholder="Телефон" />
              {touched.phone && errors.phone && (
                <p className={styles.error}>{errors.phone}</p>
              )}
              <Field id="password" name="password" placeholder="Пароль" />
              {touched.password && errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
              <Button disabled={!isValid && !dirty} type="submit" height={55}>
                Далее
              </Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default observer(RegisterForm)
