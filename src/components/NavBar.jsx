import CartWidget from './CartWidget';
export default function NavBar() {
    return(
    <nav className="nav">
        <a href='/' className="site-title">ByteBazaar</a> 
        <ul className='nav__list'>
            <li>
                <a className='cart-widget' href='/cart-widget'>
                    <CartWidget />
                </a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
                <li>
                <a href='/contact'>Contact</a>
                </li>
            <li>
                <a href='/login'>Login</a>
            </li>
        </ul>
    </nav>
    )
}