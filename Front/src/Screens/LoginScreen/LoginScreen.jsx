import React from 'react'
import { NavLink } from 'react-router-dom'

import { BloqueInputLabel, Botonera } from '../index.js'

import './LoginScreen.css'

const LoginScreen = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <h2>Inicio de sesión</h2>
                <div className='bloqueCentro'>
                    <BloqueInputLabel label={'Email'} type={'email'} fontSize={'23px'} />
                    <BloqueInputLabel label={'Contraseña'} type={'password'} fontSize={'23px'} />
                    <div>
                        <span>{'¿No estás registrado? '}</span>
                        <NavLink to={'/sign-up'}>
                            {'Registrate'}
                        </NavLink>
                    </div>
                </div>
                <Botonera />
            </form>
        </div>
    )
}

export default LoginScreen