import Shop from './Shop'
import styles from './ShopList.module.css'

function ShopList({shops}) {
  return (
      <div className={styles.shopListContainer}>
        {shops.map((shop, index) => (
            <Shop key={index} shop={shop}/>
        ))}
      </div>
  )
}

export default ShopList
