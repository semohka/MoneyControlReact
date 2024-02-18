import {RiDeleteBin2Line, RiTodoFill} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
import styles from './Product.module.css'

function Product(props) {
  const {product, deleteProduct, toggleProduct} = props
  return (
      <div
          className={`${styles.product} ${
              product.isComplited ? styles.completedProduct : ''
          }`}
          // onDoubleClick={() => deleteProduct(product.id)}
      >
        <RiTodoFill className={styles.productIcon}/>
        <div>
          <div className={styles.productText}>
            <label>Название: </label>
            {product.product}
          </div>
          <div className={styles.productText}>
            <label>Цена: </label>
            {product.price}
          </div>
        </div>
        <RiDeleteBin2Line
            className={styles.deletedIcon}
            onClick={() => deleteProduct(product.id)}
        />
        <FaCheck
            className={styles.checkIcon}
            onClick={() => toggleProduct(product.id)}
        />
      </div>
  )
}

export default Product
