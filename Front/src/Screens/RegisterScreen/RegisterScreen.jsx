import React from 'react'

import './RegisterScreen.css';
import { NavLink } from 'react-router-dom';

const RegisterScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const datosUsuario = {
            nombre:     e.target.elements[0].value,
            apellido:   e.target.elements[1].value,
            categorias: e.target.elements[2].value,
            edad:       e.target.elements[3].value,
            email:      e.target.elements[4].value,
            contraseña: e.target.elements[5].value,
            repetir:    e.target.elements[6].value
        }

        console.log(datosUsuario)

    }

    return (
        <section className='register'>
            <form onSubmit={handleSubmit}>
                <h2>Registrate</h2>
                <div className='bloqueSuperior'>
                    <BloqueSuperior />
                </div>
                <BloqueInputLabel label={'Email'} />
                <BloqueInputLabel label={'Contraseña'} type={'password'} />
                <BloqueInputLabel label={'Repetir contraseña'} type={'password'}/>
                <div className='botonera'>
                    <NavLink to={'/'} className='boton'>
                        Volver
                    </NavLink>
                    <button className='boton aceptar' type='submit'>
                        Aceptar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default RegisterScreen


const BloqueSuperior = () => {
    return (
        <>
            <div className='par'>
                <BloqueInputLabel label={'Nombre'} />
                <BloqueInputLabel label={'Apellido'} />
            </div>
            <div className='par'>
                <BloqueInputLabel label={'Categorias'} />
                <BloqueInputLabel label={'Edad'} />
            </div>
        </>
    )
}



const BloqueInputLabel = ({ label, type }) => {
    return (
        <div className='inputLabel'>
            <label>{label}</label>
            <input type={type}/>
        </div>
    )
}
