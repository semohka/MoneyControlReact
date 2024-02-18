import {useState} from 'react'
import styles from './CategoryForm.module.css'

function CategoryForm({addCategory}) {
  const [text, setText] = useState('')
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addCategory(text)
    setText('')
  }

  return (
      <div className={styles.categoryFormContainer}>
        <form onSubmit={onSubmitHandler}>
          <label>
            Category:
            <input
                type="text"
                placeholder="Enter new category"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button type="submit">Enter</button>
        </form>
      </div>
  )
}

export default CategoryForm
