import React from 'react'
import { NavLink } from 'react-router-dom'
import './RegisterScreen.css';

const RegisterScreen = () => {
    return (
        <>
            <section>
                <form action="">
                    <h1 className='h1-item'>Registrarse</h1>
                    <div className='div-1'>
                        <div className='container-form-divs name'>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id='name' name='name' /></div>
                        <div className='container-form-divs surname'>
                            <label htmlFor="surname">Apellido</label>
                            <input type="text" id='surname' name='surname' /></div>
                    </div>
                    <div className='div-2'>
                        <div className='container-form-divs categorys'>
                            <label htmlFor="categorys">Categorias</label>
                            <input type="text" id='categorys' name='categorys' /></div>
                        <div className='container-form-divs age'>
                            <label htmlFor="age">Edad</label>
                            <input type="text" id='age' name='age' /></div>
                    </div>
                    <div className='container-form-divs email'>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' name='email' /></div>
                    <div className='container-form-divs password'>
                        <label htmlFor="password">Contraseña</label>
                        <input type="text" id='password' name='password' /></div>
                    <div className='container-form-divs r-p'>
                        <label htmlFor="repeat-password">Repetir contraseña</label>
                        <input type="text" id='repeat-password' name='repeat-password' /></div>
                    <div className='container-form-buttons'>
                        <NavLink to={'/'}>volver</NavLink>
                        <button>Aceptar</button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default RegisterScreen