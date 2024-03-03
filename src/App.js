import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import ProductForm from './components/Product/ProductForm'
import ProductList from './components/Product/ProductList'
import Filter from './components/Product/Filter'
import './App.css'
import ShopForm from './components/Shop/ShopForm'
import ShopList from './components/Shop/ShopList'
import CategoryForm from './components/Category/CategoryForm'
import CategoryList from './components/Category/CategoryList'
import ProductsActions from './components/Product/ProductsActions'
import MainLayout from './layouts/MainLayout'
import Receipts from './components/Receipts'
import SingleReceipt from './components/SingleReceipt'

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

  const resetProductsHandler = () => {
    setProducts([])
  }

  const deleteComplitedProductsHandler = () => {
    setProducts(products.filter((product) => !product.isComplited))
  }

  const completedProductsCount = products.filter(
      (product) => product.isComplited
  ).length

  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout/>}>
              <Route index={true} element={<Home/>}/>
              <Route path="receipts" element={<Receipts/>}/>
              <Route path="receipts/:title" element={<SingleReceipt/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="contacts" element={<Contacts/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
          <h1>Name category</h1>
          <CategoryForm addCategory={addCatedoryHandler}/>
          <CategoryList categories={categories}/>
          <h1>Name shop</h1>
          <ShopForm addShop={addShopHandler}/>
          <ShopList shops={shops}/>
          <div className="app-main">
            <div className="app-left-column">
              <h1>Name product</h1>
              <ProductForm addProduct={addProductHandler}/>
              {!!products.length && (
                  <ProductsActions
                      completedProductsExist={!!completedProductsCount}
                      resetProducts={resetProductsHandler}
                      deleteComplitedProducts={deleteComplitedProductsHandler}
                  />
              )}
            </div>
            <div className="app-right-column">
              <Filter/>
              <ProductList
                  products={products}
                  deleteProduct={deleteProductHandler}
                  toggleProduct={toggleProductHandler}
              />
              {completedProductsCount > 0 && (
                  <h2>{`you have completed ${completedProductsCount} ${
                      completedProductsCount > 1 ? 'products' : 'product'
                  }`}</h2>
              )}
            </div>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App
