import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import ProductForm from './components/Product/ProductForm'
import ProductList from './components/Product/ProductList'
import './App.css'
import ShopForm from './components/Shop/ShopForm'
import ShopList from './components/Shop/ShopList'
import CategoryForm from './components/Category/CategoryForm'
import CategoryList from './components/Category/CategoryList'

function App() {
    const [categories, setCategories] = useState([])
    const addCatedoryHandler = (textCategory) => {
        setCategories([...categories, textCategory])
    }
    const [shops, setShops] = useState([])
    const addShopHandler = (textShop) => {
        setShops([...shops, textShop])
    }
    const [products, setProducts] = useState([])
    const addProductHandler = ({product, price}) => {
        const newProduct = {
            product: product,
            price: price,
            id: uuidv4(),
            isComplited: false,
        }
        console.log(newProduct)
        setProducts([...products, newProduct])
    }
    const deleteProductHandler = (id) => {
        setProducts(products.filter((product) => product.id !== id))
    }

    const toggleProductHandler = (id) => {
        setProducts(
            products.map((product) => {
                return product.id === id
                    ? {...product, isComplited: !product.isComplited}
                    : {...product}
            })
        )
    }

    return (
        <div className="App">
            <h1>Name category</h1>
            <CategoryForm addCategory={addCatedoryHandler}/>
            <CategoryList categories={categories}/>
            <h1>Name shop</h1>
            <ShopForm addShop={addShopHandler}/>
            <ShopList shops={shops}/>
            <h1>Name product</h1>
            <ProductForm addProduct={addProductHandler}/>
            <ProductList
                products={products}
                deleteProduct={deleteProductHandler}
                toggleProduct={toggleProductHandler}
            />
        </div>
    )
}

export default App
