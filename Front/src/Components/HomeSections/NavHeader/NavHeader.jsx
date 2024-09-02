import React from 'react'

import './NavHeader.css'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
    return (
        <nav>
            <div className='home-nav-container'>
                <h1 className='title'>SkillTrade</h1>
                <ul className='right'>
                    <li className='question'>?</li>
                    <li>Comunidad</li>
                    <NavLink to={'/login'}>
                        Iniciar sesion
                    </NavLink>
                    <NavLink to={'/sign-up'}>
                        Registrarse
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}

export default NavHeader