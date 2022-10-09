import { ChangeEvent, useRef, useState } from "react"
import { IRestaurant } from "../../models/IRestaurant"
import Button from "../Button"
import DropDown from "../DropDown"
import Icon from "../Icon"
import styles from "./style.module.scss"

interface SearchProps {
  restaurants: IRestaurant[] | undefined
  onChange: (value: string) => void
}

const Search: React.FC<SearchProps> = ({ restaurants, onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const [expanded, setExpanded] = useState(false)

  function updateValue(value: string) {
    setValue(value)
    setExpanded(false)
    onChange(value)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget
    setValue(target.value)
    onChange(target.value)
  }
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <h1>Найдите лучшее предложение от ресторана</h1>
        <div className={styles.search__field}>
          <div className={styles.search__input}>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              onFocus={() => setExpanded(true)}
              ref={inputRef}
            />
            <div>
              <button
                className={styles.search__close}
                onClick={() => updateValue("")}
              >
                <Icon name="cross" />
              </button>
              <button
                onClick={() => updateValue?.(inputRef.current?.value || "")}
              >
                <Icon name="search" />
              </button>
            </div>
          </div>
          {restaurants && (
            <DropDown expanded={expanded} onChange={updateValue}>
              {restaurants &&
                restaurants.map((restaurant, index) => (
                  <option value={restaurant.title || "unknown"} key={index}>
                    {restaurant.title || "unknown"}
                  </option>
                ))}
            </DropDown>
          )}
          <Button
            onClick={() => updateValue?.(inputRef.current?.value || "")}
            big
            width={199}
            height={61}
          >
            Найти
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Search
