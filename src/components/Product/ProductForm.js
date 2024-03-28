import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addProducts} from '../../redux/products/actionCreators'
import './ProductForm.css'

const ProductForm = () => {
  // const {addProduct} = props
  // const [data, setData] = useState({ product: '', price: '' })

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')

  const dispatch = useDispatch()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    // addProduct(data)
    // alert(JSON.stringify(data))
    if (title && price) {
      const product = {
        product: title,
        price: price,
      }
      console.log(addProducts(product))
      dispatch(addProducts(product))
      setTitle('')
      setPrice('')
    }
    // const prod = data
    // dispatch(addProducts(prod))
    // setData({ product: '', price: '' })
  }
  // const inputChangeHandle = (text, name) => {
  //   setData({ ...data, [name]: text.target.value })
  // }
  return (
      <div className="app-block product-form">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label>Product: </label>
            <input
                type="text"
                placeholder="Enter new product"
                value={title}
                // onChange={(e) => inputChangeHandle(e, 'product')}
                onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Price: </label>
            <input
                type="text"
                placeholder="Enter price"
                value={price}
                // onChange={(e) => inputChangeHandle(e, 'price')}
                onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <button type="submit">Enter</button>
        </form>
      </div>
  )
}

export default ProductForm
