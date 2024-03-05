import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addProducts} from '../../redux/products/actionCreators'
import './ProductForm.css'
// import styles from './ProductForm.module.css'
// import Button from '../UI/Button'

function ProductForm(props) {
  const {addProduct} = props
  const [data, setData] = useState({product: '', price: ''})
  const dispatch = useDispatch()
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addProduct(data)
    // alert(JSON.stringify(data))
    const prod = data
    console.log(addProducts(prod))
    dispatch(addProducts(prod))
    setData({product: '', price: ''})
  }
  const inputChangeHandle = (text, name) => {
    setData({...data, [name]: text.target.value})
  }
  return (
      <div className="app-block product-form">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Product: </label>
            <input
                type="text"
                placeholder="Enter new product"
                value={data.product}
                onChange={(e) => inputChangeHandle(e, 'product')}
            />
          </div>
          <div>
            <label>Price: </label>
            <input
                type="text"
                placeholder="Enter price"
                value={data.price}
                onChange={(e) => inputChangeHandle(e, 'price')}
            />
          </div>

          <button type="submit">Enter</button>
        </form>
      </div>
  )
}

export default ProductForm
