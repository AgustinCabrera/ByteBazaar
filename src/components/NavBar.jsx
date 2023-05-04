import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return(
    <div className="navbar">
        <div className="Links" >
            <Link to="/">Shop</Link>
            <Link to="/cart"><CartWidget/></Link>
        </div>
    </div>
    );
};