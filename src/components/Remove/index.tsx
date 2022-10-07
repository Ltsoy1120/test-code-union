import styles from "./style.module.scss"

interface RemoveProps {
  onClick: () => void
  position?: boolean
}
export default function Remove({ onClick, position }: RemoveProps) {
  return (
    <div
      className={
        position ? `${styles.btn} ${styles.position}` : `${styles.btn}`
      }
      onClick={onClick}
    >
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
        <path d="M10.2072 8.49977L16.183 2.52391C16.6546 2.05237 16.6546 1.28802 16.183 0.816486C15.7116 0.345025 14.9472 0.345025 14.4756 0.816486L8.49977 6.79242L2.52391 0.816559C2.05237 0.345098 1.28802 0.345098 0.816486 0.816559C0.345025 1.28802 0.345025 2.05245 0.816486 2.52398L6.79235 8.49984L0.816486 14.4757C0.345025 14.9471 0.345025 15.7116 0.816486 16.1831C1.28802 16.6546 2.05237 16.6546 2.52391 16.1831L8.49977 10.2072L14.4756 16.183C14.9472 16.6545 15.7115 16.6545 16.183 16.183C16.6546 15.7116 16.6546 14.9472 16.183 14.4756L10.2072 8.49977Z" />
      </svg>
    </div>
  )
}
