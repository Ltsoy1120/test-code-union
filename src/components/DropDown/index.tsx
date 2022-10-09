import "./DropDown.scss"

import {
  Children,
  ComponentProps,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState
} from "react"
import { classWithModifiers } from "../../utils/common"

export interface DropDownProps<V> {
  name?: string
  default?: V
  relative?: boolean
  expanded: boolean
  onChange(value: V, children: ReactNode): void

  children:
    | ReactElement<ComponentProps<"option">>
    | ReactElement<ComponentProps<"option">>[]
}

function DropDown<V = string | undefined>(props: DropDownProps<V>) {
  const parentRef = useRef<HTMLDivElement>(null)
  const options = Children.map(props.children, child => child.props)
  const initChoice = props.default
    ? options.findIndex(option => option.value === props.default)
    : -1
  const [choice, Choose] = useState<number>(initChoice)

  useEffect(() => {
    if (!props.expanded) return
    if (parentRef.current == null) return
    const parentElement = parentRef.current
    const parentElementRect = parentElement.getBoundingClientRect()

    const choiceElement = parentElement.children.item(choice)
    const choiceElementRect = choiceElement?.getBoundingClientRect()
    if (choiceElementRect == null) return

    const offsetTop = choiceElementRect.top - parentElementRect.top
    const middle =
      offsetTop - parentElementRect.height / 2 + choiceElementRect.height / 2
    parentElement.scrollBy(0, middle)
  }, [props.expanded, choice])

  return (
    <div
      className={classWithModifiers(
        "drop-down",
        props.expanded && "expanded",
        props.relative && "relative"
      )}
      aria-expanded={props.expanded}
      ref={parentRef}
    >
      {options?.map((option, index) => (
        <button
          className={classWithModifiers(
            "drop-down__option",
            choice === index && "selected"
          )}
          onClick={() => {
            Choose(index)
            props.onChange(option.value as unknown as V, option.children)
          }}
          disabled={!props.expanded}
          key={index}
        >
          {option.children}
        </button>
      ))}
      {props.name && (
        <input type="hidden" name={props.name} value={options[choice]?.value} />
      )}
    </div>
  )
}

export default DropDown
