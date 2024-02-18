import {useState} from 'react'
import styles from './ProductForm.module.css'
import Button from '../UI/Button'

function ProductForm(props) {
  const {addProduct} = props
  const [data, setData] = useState({product: '', price: ''})
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addProduct(data)
    // alert(JSON.stringify(data))
    setData({product: '', price: ''})
  }
  const inputChangeHandle = (text, name) => {
    setData({...data, [name]: text.target.value})
  }
  return (
      <div className={styles.productFormContainer}>
        <form onSubmit={onSubmitHandler}>
          <label>
            Product:
            <input
                type="text"
                placeholder="Enter new product"
                value={data.product}
                onChange={(e) => inputChangeHandle(e, 'product')}
            />
          </label>
          <label>
            Price:
            <input
                type="text"
                placeholder="Enter price"
                value={data.price}
                onChange={(e) => inputChangeHandle(e, 'price')}
            />
          </label>
          <Button type="submit" title="Submit">
            Enter
          </Button>
        </form>
      </div>
  )
}

export default ProductForm
