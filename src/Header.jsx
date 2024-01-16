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
                <Link to="/carrinho"><FaCartShopping size={50}/></Link>
            </li>
            <li>
                <Link to="/login"><IoPersonOutline size={50}/>login</Link>
            </li>
            <li>
                <Link to="/register"><IoPersonOutline size={50}/> registre</Link>
            </li>
            <li>
                <Link to="/dashboard"><IoPersonOutline size={50}/> Conta</Link>
            </li>
        </ul> 
    </nav>
  )
}

export default Header