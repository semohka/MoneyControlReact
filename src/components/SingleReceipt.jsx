import {Link, useParams} from 'react-router-dom'
import NotFound from './NotFound'
import receipts from '../data/receipts'

const SingleReceipt = () => {
    const param = useParams()
    const receipt = receipts.find((receipt) => receipt.title === param.title)
    if (!receipt) {
        return <NotFound/>
    }
    return (
        <>
            <h2>{receipt.title}</h2>
            <h3>{receipt.id}</h3>
            <Link to=".." relative="path">
                Все чеки
            </Link>
        </>
    )
}

export default SingleReceipt
