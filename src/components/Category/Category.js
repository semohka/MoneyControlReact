import styles from './Category.module.css'

function Category({category}) {
    return (
        <div className={styles.category}>
            <div className={styles.categoryText}>
                <label>Название: </label>
                {category}
            </div>
        </div>
    )
}

export default Category
