import React from 'react'

import './Header.css'

const Header = () => {
    return (
        <header className='home-header'>
            <h2>Donde tu conocimiento es buscado</h2>
            <div className='search'>
                <input type="text" placeholder='Busca un conocimiento que desees intercambiar'/>
                <span className='icon'>🔍</span>
            </div>
            <Selector />
        </header>
    )
}

export default Header

const Selector = () => {
    return (
        <div className='selector'>
            <ul className='list'>
                <li className='item'>
                    <span>icono</span>
                    <span>1</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>2</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>3</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>4</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>5</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>6</span>
                </li>
                <li className='item'>
                    <span>icono</span>
                    <span>7</span>
                </li>
            </ul>
            <span className='arrow'>
                {'>'}
            </span>
        </div>
    )
}