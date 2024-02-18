import Product from './Product'
import styles from './ProductList.module.css'

function ProductList(props) {
  const {products, deleteProduct, toggleProduct} = props
  console.log(products)
  return (
      <div className={styles.productListContainer}>
        {!products.length && <h2>List is empty</h2>}
        {products.map((product) => (
            <Product
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
                toggleProduct={toggleProduct}
            />
        ))}
      </div>
  )
}

export default ProductList
