import React from "react"
import { NavLink } from "react-router-dom"

import './Botonera.css'

const Botonera = () => {
    return (
        <div className='botonera'>
            <NavLink to={'/'} className='boton'>
                Volver
            </NavLink>
            <button className='boton aceptar' type='submit'>
                Aceptar
            </button>
        </div>
    )
}

export default Botonera