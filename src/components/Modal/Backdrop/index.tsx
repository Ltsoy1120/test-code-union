import styles from "./style.module.scss"

interface BackdropProps {
  close: () => void
}
const Backdrop: React.FC<BackdropProps> = ({ close }) => {
  return <div className={styles.backdrop} onClick={close}></div>
}
export default Backdrop
