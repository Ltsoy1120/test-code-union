import React, { Fragment } from "react"
import Remove from "../Remove"
import Backdrop from "./Backdrop"
import styles from "./style.module.scss"

interface ModalProps {
  body: JSX.Element
  close: () => void
}

const Modal: React.FC<ModalProps> = ({ body, close }) => {
  return (
    <Fragment>
      <Backdrop close={close} />
      <div className={styles.modal}>
        <div className={styles.container}>
          {body}
          <Remove position onClick={close} />
        </div>
      </div>
    </Fragment>
  )
}

export default Modal
