import Category from './Category'
import styles from './CategoryList.module.css'

function CategoryList({categories}) {
  return (
      <div className={styles.categoryListContainer}>
        {categories.map((category, index) => (
            <Category key={index} category={category}/>
        ))}
      </div>
  )
}

export default CategoryList
