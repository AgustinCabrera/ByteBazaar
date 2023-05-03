import  { useState, useEffect } from 'react'
import { getProducts } from '../assets/data'
import { useParams } from 'react-router-dom'
import { getProductsByCategory } from '../assets/data'
import Item from './item/item'

const ItemListContainer = ({ greeting }) => {

  const [products, setProducts] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts

    asynFunc(categoryId)
      .then(response => {
        setProducts(response)
        })

     .catch (error => {
       console.log(error)
     })  
    },[categoryId])


  return (
    <div>
      <h2>{greeting}</h2>
      {products.map((prod) => (
        <Item id={prod.id} name={prod.title} price={prod.price} stock={prod.stock} img={prod.img} />))}
    </div>
  )
}
export default ItemListContainer
