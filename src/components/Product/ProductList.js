// import Product from './Product'

import {useSelector} from 'react-redux'
import './ProductList.module.css'

const ProductList = () => {
    const products = useSelector((state) => state.products)
    console.log(products)
    console.log(useSelector)
    return (
        <div className="app-block product-list">
            <h2>Product</h2>

            <ul>
                {/* {products.map((product, i) => (
          <li key={i}>
            <div className="product-info">{product}</div>
          </li>
        ))} */}
            </ul>
        </div>
    )
    // const { products, deleteProduct, toggleProduct } = props
    // console.log(products)
    // return (
    //   <div className="app-block product-list">
    //     {!products.length && <h2>List is empty</h2>}
    //     {products.map((product) => (
    //       <Product
    //         key={product.id}
    //         product={product}
    //         deleteProduct={deleteProduct}
    //         toggleProduct={toggleProduct}
    //       />
    //     ))}
    //   </div>
    // )
}

export default ProductList
