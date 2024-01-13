import React from 'react'

import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

import './app.css'

const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/"><img src="src/imgs/petz.png" width={100}/></Link>
            </li>
            <li>
                <Link to="/carrinho"><FaCartShopping size={40}/></Link>
            </li>
            <li>
                <Link to="/login"><IoPersonOutline size={40}/></Link>
            </li>
        </ul> 
    </nav>
  )
}

export default Header