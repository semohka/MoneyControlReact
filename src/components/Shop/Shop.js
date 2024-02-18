import styles from './Shop.module.css'

function Shop({shop}) {
    return (
        <div className={styles.shop}>
            <div className={styles.shopText}>
                <label>Название: </label>
                {shop}
            </div>
        </div>
    )
}

export default Shop
