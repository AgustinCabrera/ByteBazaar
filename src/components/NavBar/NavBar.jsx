import { NavLink,Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';

export default function NavBar() {
    return(
    <nav className="navbar">
        <Link to="/">
            <h3>ByteBazaar</h3>
        </Link>
        <div className="categories">
            <NavLink to={`/category/pc-components`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Componentes </NavLink>
            <NavLink to={`/category/notebook`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Notebooks</NavLink>
            <NavLink to={`/category/phones`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Celulares</NavLink>
        </div>
        <CartWidget />
    </nav>
    )
}