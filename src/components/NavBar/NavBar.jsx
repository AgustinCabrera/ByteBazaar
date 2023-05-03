import { NavLink,Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';
import { ReactLogo } from '../ReactLogo';




export default function NavBar() {
    return(
    <nav className="navbar">
        <header className='header'>
            <ReactLogo /> 
        </header>
        <div className="links">
        <NavLink to={`/`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Shop </NavLink>
            <NavLink to={`/category/headphones`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Headphones </NavLink>
            <NavLink to={`/category/notebook`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Notebooks</NavLink>
            <NavLink to={`/category/phones`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}> Phones</NavLink>
        </div>
        <NavLink to={`/cart`} activeClassName= {({isActive}) => isActive ? 'ActiveOption' : 'Option'}>  <CartWidget  /></NavLink>
    </nav>
    )
}