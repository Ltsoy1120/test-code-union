import { SVGAttributes } from "react"
import styles from "./style.module.scss"

interface IconProps extends Exclude<SVGAttributes<SVGElement>, "aria-hidden"> {
  size?: string
  name?: string
}

const Icon = (props: IconProps) => {
  return (
    <svg {...props} aria-hidden="true" className={styles.icon}>
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  )
}

export default Icon
