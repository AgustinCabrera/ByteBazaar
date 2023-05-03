import { Link } from "react-router-dom"
import './item.css'

const Item = ({id, name, price, stock, img}) => {
    return (
        <article className="Carditem">
            <header className="Carditem-header">
                <h2 className="Carditem-title">{name}</h2>
            </header>
            <picture>
                <img src="{img}" alt="{name}" className="ItemImg"/>
            </picture>
            <section className="Carditem-body">
                <p className="Carditem-price">${price}</p>
                <p className="Carditem-stock">{stock} left in stock</p>
            </section>
            <footer className="Carditem-footer">
                <Link to = {`/item/${id}`} className="Carditem-link">View Item</Link>
            </footer>
        </article>
    )
}
export default Item;
