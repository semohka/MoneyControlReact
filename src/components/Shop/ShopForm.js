import {useState} from 'react'
import styles from './ShopForm.module.css'

function ShopForm({addShop}) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addShop(text)
    setText('')
  }
  return (
      <div className={styles.shopFormContainer}>
        <form onSubmit={onSubmitHandler}>
          <label>
            Shop:
            <input
                type="text"
                placeholder="enter new shop"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button type="submit">Enter</button>
        </form>
      </div>
  )
}

export default ShopForm
