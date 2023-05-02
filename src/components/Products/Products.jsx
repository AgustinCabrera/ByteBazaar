import { Link } from 'react-router-dom'
import { getProducts } from '../../assets/data'

export const Products = () => {
  return (
    <div>
    <h1>Products</h1>
    <ul>
        {getProducts.map((product) => (
            <li key={product.id}>
                <Link to = {`/products/${product.id}`}>{product.name}</Link>
            </li>
      ))
    }
    </ul>
    </div>
  )
}

