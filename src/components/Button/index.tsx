import styles from "./style.module.scss"

interface ButtonProps {
  big?: boolean
  type?: "button" | "submit" | "reset" | undefined
  mb?: number
  mr?: number
  mt?: number
  width?: number
  height?: number
  disabled?: boolean
  onClick?: (
    e: React.FormEvent<HTMLButtonElement> | React.MouseEvent<HTMLElement>
  ) => void
  children: React.ReactNode
}
const Button: React.FC<ButtonProps> = ({
  big,
  type,
  mb,
  mr,
  mt,
  width,
  height,
  disabled,
  onClick,
  children
}) => {
  return (
    <button
      style={{
        marginBottom: mb,
        marginRight: mr,
        marginTop: mt,
        width,
        height
      }}
      className={`${styles.button} ${big ? styles.big : styles.small}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
export default Button
