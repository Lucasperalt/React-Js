import React from 'react'
import CartWidget from './CartWidget.jsx'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Store from '../pages/Store'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to ="/">Peralta Detailing</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className= {({isActive}) => isActive ? "link-active":""} to ="/">Inicio</NavLink>
                        <NavLink className= {({isActive}) => isActive ? "link-active":""}   to ="/Contact">Contacto</NavLink>
                        <NavLink className= {({isActive}) => isActive ? "link-active":""}  to ="/Store">Tienda</NavLink>
                        <NavLink className= {({isActive}) => isActive ? "link-active":""} to ="/About" >Sobre nosotros</NavLink>
                        
                    </div>
                </div>
            </div>
        <CartWidget/>
        </nav>
        </div>
        )
}

export default NavBar