import React from 'react'

import './NavHeader.css'

const NavHeader = () => {
    return (
        <nav>
            <div className='home-nav-container'>
                <h1 className='title'>SkillTrade</h1>
                <ul className='right'>
                    <li className='question'>?</li>
                    <li>Comunidad</li>
                    <li>Iniciar Sesion</li>
                    <li>Registrarse</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavHeader