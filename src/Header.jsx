import React from 'react'

import { Link } from "react-router-dom"

import './app.css'



const Header = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/"><img src="src/imgs/petz.png" width={100}/></Link>
            </li>
            <li>
                <Link to="/carrinho"><img src="src/imgs/cart.png" width={80}/></Link>
            </li>
        </ul> 
    </nav>
  )
}

export default Header