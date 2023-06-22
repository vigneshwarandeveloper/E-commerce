import React from 'react';
import { Link } from 'react-router-dom';
import {FaShoppingBasket} from "react-icons/fa";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Shop</Link>
            <Link to="/cart"><FaShoppingBasket /></Link>
        </div>
    </div>
  )
}
