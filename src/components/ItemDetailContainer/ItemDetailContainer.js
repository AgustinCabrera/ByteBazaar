import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../assets/data'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
    const { productId } = useParams()
  
    useEffect(() => {
    getProductsById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.log(error)
        })
}, [productId])

  return (
    <div>
        <ItemDetailContainer {...product} />
        </div>
  )
}
export default ItemDetailContainer;
