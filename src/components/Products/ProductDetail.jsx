import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProducts } from '../../assets/data'
import './ProductDetail.css'

export const ProductDetail = () => {

    const params = useParams()
    const Navigate = useNavigate()

    const {productId} = params
    const onBack = () => {
        Navigate(-1)
    }
   const product = getProducts.find((product) => product.id === Number(productId))

    return (
    <div className='card'>
        <div className='card-container'>
            <h5 className='card-title'>{product.name}</h5>
            <p className='card-text'>{product.price}</p>
            <p className='card-text'>{product.stock}</p>
        </div>
        <button onClick={onBack} className='button-container'> Volver </button>
    </div>
  )
}
