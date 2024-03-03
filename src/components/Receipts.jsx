import {Link, useLocation, useNavigate} from 'react-router-dom'
import queryString from 'query-string'
import {useEffect, useState} from 'react'
import receipts from '../data/receipts'

const SORT_KEYS = ['title', 'id']

function sortReceipt(receipts, key) {
  const sortedReceipt = [...receipts]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedReceipt
  }
  sortedReceipt.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedReceipt
}

const Receipts = () => {
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedReceipt, setSortedReceipt] = useState(
      sortReceipt(receipts, sortKey)
  )
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedReceipt([...receipts])
    }
  }, [sortKey, navigate])

  return (
      <>
        <h1>{sortKey ? `receipt sorted by ${sortKey}` : 'Receipt'}</h1>
        {sortedReceipt.map((receipt) => (
            <div key={receipt.id}>
              <Link to={receipt.title} className="receiptLink">
                {receipt.title}
              </Link>
            </div>
        ))}
      </>
  )
}

export default Receipts
