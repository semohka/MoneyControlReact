import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './ProductsActions.module.css'

function ProductsActions({
                             resetProducts,
                             deleteComplitedProducts,
                             completedProductsExist,
                         }) {
    return (
        <div className={styles.productsActionsContainer}>
            <Button title="Recet products" onClick={resetProducts}>
                <RiDeleteBin2Line/>
            </Button>
            <Button
                title="Clear complited products"
                onClick={deleteComplitedProducts}
                disabled={!completedProductsExist}
            >
                <RiRefreshLine/>
            </Button>
        </div>
    )
}

export default ProductsActions
